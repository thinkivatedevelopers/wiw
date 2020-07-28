import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import {Title, Meta} from '@angular/platform-browser';


@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css']
})
export class PackageComponent implements OnInit {

  courseSlug;
  gradeSlug;
  packageSlug;

  package;
  grade;
  course;

  constructor(
    private data: DataService,
    private route: ActivatedRoute,
    private title: Title,
    private meta: Meta
  ) {
    this.courseSlug = this.route.snapshot.paramMap.get('course');
    this.gradeSlug = this.route.snapshot.paramMap.get('grade');
    this.packageSlug = this.route.snapshot.paramMap.get('package');
  }

  ngOnInit(): void {
    this.package = this.data.getPackage(this.courseSlug, this.gradeSlug, this.packageSlug );
    if (this.package){
      this.title.setTitle(`${this.package.name} - Wiw Learn`);
      this.meta.updateTag({name: `description`, content: `${this.package.description}`});
    }
    else{
      this.title.setTitle('Not found');
      this.meta.updateTag({name: 'description', content: 'my super decription'});
    }
    // this.grade = this.data.getGrade(this.courseSlug, this.gradeSlug);
    // this.course = this.data.getCourse(this.courseSlug);
  }

}
