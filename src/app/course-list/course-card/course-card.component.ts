import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  @Input() course;

  constructor() { }

  ngOnInit(): void {
    // console.log(this.course)
  }

}
