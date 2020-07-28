import { Component, OnInit } from '@angular/core';
import {Title, Meta} from '@angular/platform-browser';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {

  constructor(
    private title: Title,
    private mete: Meta
  ) { }

  ngOnInit(): void {
    this.title.setTitle('About us - WIW Learn')
  }

}
