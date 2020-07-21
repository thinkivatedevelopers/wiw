import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.css']
})
export class GradeComponent implements OnInit {

  courseSlug;
  gradeSlug;
  grade;

  constructor(
    private data: DataService,
    private route: ActivatedRoute) {
      this.courseSlug = this.route.snapshot.paramMap.get('course');
      this.gradeSlug = this.route.snapshot.paramMap.get('grade');
    }

  ngOnInit(): void {

    this.grade = this.data.getGrade(this.courseSlug, this.gradeSlug);
  }

}
