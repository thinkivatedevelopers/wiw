import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { SEOService } from '../seo.service';

@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.css']
})
export class GradeComponent implements OnInit {

  courseSlug;
  gradeSlug;

  grade;
  course;

  constructor(
    private data: DataService,
    private route: ActivatedRoute,
    private seoService: SEOService) {
      this.courseSlug = this.route.snapshot.paramMap.get('course');
      this.gradeSlug = this.route.snapshot.paramMap.get('grade');
    }

  ngOnInit(): void {
    this.grade = this.data.getGrade(this.courseSlug, this.gradeSlug);
    this.course = this.data.getCourse(this.courseSlug);

    if (this.grade){
      this.seoService.updateTitle(`${this.course.name} - ${this.grade.name} - Wiw Learn`);
      this.seoService.updateDescription(`${this.grade.desciption}`);
    }
  }

}
