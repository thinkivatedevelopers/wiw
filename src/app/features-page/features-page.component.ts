import { Component, OnInit, OnDestroy } from '@angular/core';
import { SEOService } from '../seo.service';

@Component({
  selector: 'app-features-page',
  templateUrl: './features-page.component.html',
  styleUrls: ['./features-page.component.css']
})
export class FeaturesPageComponent implements OnInit {

  constructor(
    private seoService: SEOService
  ) { }

  ngOnInit(): void {
    this.seoService.updateTitle('Features - WIW Learn');
    this.seoService.updateDescription('We offer Flexible Subscriptions, Watch Video Online & Offline, Practice Questions & Answers, Sample Question Papers, Raise Your Doubt, Performance Analytics')
  }

}
