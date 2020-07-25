import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  courseList;
 

  constructor(
    private data: DataService ) {}

  ngOnInit(): void {
    this.courseList = this.data.getAllData()
    console.log(this.data.getAllData());
  }

}
