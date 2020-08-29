import { Component, OnInit } from '@angular/core';
import { SEOService } from '../seo.service';
import { DataService } from '../data.service';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  courseList;
  
  constructor(
    private seoService: SEOService,
    private data: DataService
  ) { }

  ngOnInit(): void {
    this.courseList = this.data.getAllData();

    this.seoService.updateTitle('WIW Learn - The Learning App.');
    this.seoService.updateDescription('Wiw Learn is a One-App-One-Solution for Students. It allows students to access learning solutions mapped to their curriculum. Learn from anywhere, anytime while simultaneously allowing parents to track and evaluate the student’s performance.');
  }

  moveTo($element){
    $element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
  }

  

}
