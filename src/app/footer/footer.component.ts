import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wiw-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scrollToTop(){
    window.scrollTo(0, 0);
  }

}
