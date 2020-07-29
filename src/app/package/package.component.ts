import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { SEOService } from '../seo.service';


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
    private seoService: SEOService
  ) {
    this.courseSlug = this.route.snapshot.paramMap.get('course');
    this.gradeSlug = this.route.snapshot.paramMap.get('grade');
    this.packageSlug = this.route.snapshot.paramMap.get('package');
  }

  ngOnInit(): void {
    this.package = this.data.getPackage(this.courseSlug, this.gradeSlug, this.packageSlug );
    if (this.package){
      this.seoService.updateTitle(`${this.package.name} - Wiw Learn`);
      this.seoService.updateDescription(`${this.package.description}`);
    }
  }

}
