import { Injectable } from '@angular/core';
import { Course } from './models/course';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private state: Course[] = [
    {
      slug: 'kerala-state',
      name: 'Kerala State',
      description: 'desc',
      image: '',
      grades: [
        {
          slug: 'plus-two',
          name: 'Plus Two',
          decription: 'description of plus two',
          image: 'plus-two.jpeg',
          packages: [
            {
              slug: 'kerala-state-plus-two-offline-bundle-pack',
              name: 'Keral State Plus Two Offline Bundle Pack',
              description: 'description',
              image: 'ks-pl-off.png',
              isOnlinePack: true,
              isComboPack: true,
              validityDays: 150,
              price: 12000,
              subjects: [
                { name: 'Biology', icon: 'boilogy-small.svg' },
                { name: 'Chemistry', icon: 'chmemistry-small.svg' },
              ],
            },
          ],
        },
      ],
    },
  ];


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
