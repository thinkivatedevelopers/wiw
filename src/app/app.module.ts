import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { FeaturesPageComponent } from './features-page/features-page.component';
import { TermsAndConditionsPageComponent } from './terms-and-conditions-page/terms-and-conditions-page.component';
import { PrivacyPolicyPageComponent } from './privacy-policy-page/privacy-policy-page.component';
import { FaqPageComponent } from './faq-page/faq-page.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { CourseComponent } from './course/course.component';
import { GradeComponent } from './grade/grade.component';
import { PackageComponent } from './package/package.component';
import { CourseListComponent } from './course-list/course-list.component';
import { DemoVideosComponent, SafePipe } from './demo-videos/demo-videos.component';
import { DownloadComponent } from './download/download.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PackageCardComponent } from './grade/package-card/package-card.component';
import { CourseCardComponent } from './course-list/course-card/course-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FeatureCardsComponent } from './feature-cards/feature-cards.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    AboutPageComponent,
    ContactPageComponent,
    FeaturesPageComponent,
    TermsAndConditionsPageComponent,
    PrivacyPolicyPageComponent,
    FaqPageComponent,
    BlogPageComponent,
    NotFoundPageComponent,
    CourseComponent,
    GradeComponent,
    PackageComponent,
    CourseListComponent,
    DemoVideosComponent,
    SafePipe,
    DownloadComponent,
    PackageCardComponent,
    CourseCardComponent,
    FeatureCardsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatExpansionModule,
    MatTabsModule,
    MatMenuModule,
    NgbModule,
    MatDialogModule,
    ReactiveFormsModule,
    HttpClientModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
