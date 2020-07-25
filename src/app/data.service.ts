import { Injectable } from '@angular/core';
import { Course } from './models/course';
import { state } from '../app/state';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private state = state;


  constructor() {}

  getAllData() {
    return this.state;
  }

  getCourse(courseSlug: string) {
    return this.state.filter(c => c.slug === courseSlug)[0];
  }

  getGrade(courseSlug: string, gradeSlug: string) {
    const course = this.getCourse(courseSlug);
    if (!course) {return false; }

    return course.grades.filter(g => g.slug === gradeSlug)[0];
  }

  getPackage(courseSlug: string, gradeSlug: string, packageSlug: string) {
    const grade = this.getGrade(courseSlug, gradeSlug);
    if (!grade) {return false; }

    return grade.packages.filter(p => p.slug === packageSlug)[0];
  }
}
