import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { FeaturesPageComponent } from './features-page/features-page.component';
import { PackagesPageComponent } from './packages-page/packages-page.component';
import { TermsAndConditionsPageComponent } from './terms-and-conditions-page/terms-and-conditions-page.component';
import { PrivacyPolicyPageComponent } from './privacy-policy-page/privacy-policy-page.component';
import { PriceAndPlansComponent } from './price-and-plans/price-and-plans.component';
import { FaqPageComponent } from './faq-page/faq-page.component';
import { BlogPageComponent } from './blog-page/blog-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    AboutPageComponent,
    ContactPageComponent,
    FeaturesPageComponent,
    PackagesPageComponent,
    TermsAndConditionsPageComponent,
    PrivacyPolicyPageComponent,
    PriceAndPlansComponent,
    FaqPageComponent,
    BlogPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
