import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  courses;

  public isMenuCollapsed = true;
  //public isCollapsed=true;

  constructor(private data: DataService, private router: Router) { }

  ngOnInit(): void {
    this.courses = this.data.getAllData();
    // console.log(this.courses);

    
  }

  logoClick() {
    if (this.router.url === '/') {
      window.scrollTo(0, 0)
    }
    else {
      console.log(this.router.url)
      this.router.navigate(['/'])
    }

  }
  
}
