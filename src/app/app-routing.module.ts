import { CourseListComponent } from './course-list/course-list.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { FaqPageComponent } from './faq-page/faq-page.component';
import { PrivacyPolicyPageComponent } from './privacy-policy-page/privacy-policy-page.component';
import { TermsAndConditionsPageComponent } from './terms-and-conditions-page/terms-and-conditions-page.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { PackagesPageComponent } from './packages-page/packages-page.component';
import { FeaturesPageComponent } from './features-page/features-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutPageComponent } from './about-page/about-page.component';
import { CourseComponent } from './course/course.component';
import { GradeComponent } from './grade/grade.component';
import { PackageComponent } from './package/package.component';


const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'about', component: AboutPageComponent },
  { path: 'features', component: FeaturesPageComponent },
  { path: 'packages', component: PackagesPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'blogs', component: BlogPageComponent },
  { path: 'faq', component: FaqPageComponent },
  { path: 'terms-and-conditions', component: TermsAndConditionsPageComponent},
  { path: 'privacy-policy', component: PrivacyPolicyPageComponent },
  { path: 'courses', component: CourseListComponent},
// Dynamic Routes for Courses
  { path: ':course', component: CourseComponent },
  { path: ':course/:grade', component: GradeComponent },
  { path: ':course/:grade/:package', component: PackageComponent },

  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
