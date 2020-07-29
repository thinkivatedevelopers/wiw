import { Component, OnInit } from '@angular/core';
import { SEOService } from '../seo.service';

@Component({
  selector: 'app-terms-and-conditions-page',
  templateUrl: './terms-and-conditions-page.component.html',
  styleUrls: ['./terms-and-conditions-page.component.css']
})
export class TermsAndConditionsPageComponent implements OnInit {

  constructor(
    private seoService: SEOService
  ) { }

  ngOnInit(): void {
    this.seoService.updateTitle('Terms and Conditions - WIW Learn');
    this.seoService.updateDescription('Our Terms and conditions ');
  }

}
