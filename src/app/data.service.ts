import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class DataService {
  private data = {
    'kerala-state': {
      name: 'Kerala State',
      description: 'Keral state syllabus description',
      grades: [
        {
          slug: 'plus-two',
          name: 'Plus Two',
          description: 'kerala state plus two grade description',
          image: 'imagepath',
          packages: [
            {
              slug: 'kerala-state-plus-two-offline-pack-combo',
              name: 'Kerala state plus two offline compo pack',
              image: 'image path',
              subjects: [
                { name: 'chemistry', icon: 'icon path' },
                { name: 'Biology', icon: 'icon path bio' },
              ],
              price: 8000,
              description: 'package description',
              mode: 'online',
              type: 'combo'
            },
            {
              slug: 'kerala-state-plus-two-online-compo-pack',
              name: 'Kerala state plus two Online compo pack',
              image: 'image path',
              subjects: ['chemistry', 'Biology', 'Physics'],
            },
          ],
        },
        {
          name: 'plus-one',
          description: 'kerala state plus one grade description',
          image: 'image path',
        },
      ],
    },
    cbse: {},
  };

  constructor() {}

  getCourse(slug: string) {
    return this.data[slug] ? this.data[slug] : false;
  }

  getGrade(courseSlug: string, gradeSlug: string) {
    const grades = this.data[courseSlug]?.grades;
    if (!grades) { return false; }

    let gradeArr;

    gradeArr = grades.filter(grade => grade.slug === gradeSlug);
    return gradeArr.length === 0 ? false : gradeArr[0];

  }

  getPackage(courseSlug: string, gradeSlug: string, packageSlug: string) {
    const grades = this.data[courseSlug]?.grades;
    if (!grades) { return false; }

    let gradeArr;
    gradeArr = grades.filter(grade => grade.slug === gradeSlug);
    if (gradeArr.length === 0) {return false; }

    const packagesArr = gradeArr[0].packages;
    if (!packagesArr || packagesArr.lenght === 0) {return false; }
    const pack = packagesArr.filter(pack => pack.slug === packageSlug );
    return pack.length === 0 ? false : pack[0];
  }
}
