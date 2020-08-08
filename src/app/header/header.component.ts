import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  courses;

  public isMenuCollapsed = true;
  //public isCollapsed=true;

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.courses = this.data.getAllData();
    // console.log(this.courses);
  }

}
