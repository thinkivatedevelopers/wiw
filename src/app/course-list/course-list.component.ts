import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { SEOService } from '../seo.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  courseList;

  constructor(
    private data: DataService, private seoService: SEOService ) {}

  ngOnInit(): void {
    this.seoService.updateTitle(`Our Courses - Wiw Learn`);
    this.seoService.updateDescription(`Wiw Learn is a One-App-One-Solution for Students. It allows students to access learning solutions mapped to their curriculum. Learn from anywhere, anytime while simultaneously allowing parents to track and evaluate the student’s performance.`);

    
    this.courseList = this.data.getAllData();
    // console.log(this.data.getAllData());
  }

}
