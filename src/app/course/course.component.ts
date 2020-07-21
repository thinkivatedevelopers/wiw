import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  course;
  courseSlug;

  constructor(
    private data: DataService,
    private route: ActivatedRoute ) {

      this.courseSlug = this.route.snapshot.paramMap.get('course');
     }

  ngOnInit(): void {
    this.course = this.data.getCourse(this.courseSlug);
    console.log(this.data.getCourse(this.courseSlug));
  }

}
