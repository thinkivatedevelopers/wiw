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


const routes: Routes = [

  { path: '', component: HomePageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'features', component: FeaturesPageComponent},
  { path: 'packages', component: PackagesPageComponent},
  { path: 'contact', component: ContactPageComponent},
  { path: 'blogs', component: BlogPageComponent},
  { path: 'faq', component: FaqPageComponent},
  { path: 'terms-and-conditions', component: TermsAndConditionsPageComponent},
  { path: 'privacy-policy', component: PrivacyPolicyPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
