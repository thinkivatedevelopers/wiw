import { Component, OnInit } from '@angular/core';
import { SEOService } from '../seo.service';

@Component({
  selector: 'app-privacy-policy-page',
  templateUrl: './privacy-policy-page.component.html',
  styleUrls: ['./privacy-policy-page.component.css']
})
export class PrivacyPolicyPageComponent implements OnInit {

  constructor(
    private seoService: SEOService
  ) { }

  ngOnInit(): void {
    this.seoService.updateTitle('Privacy Policy - WIW Learn');
    this.seoService.updateDescription('Our Privacy Policy');
  }

}
