import { Component, OnInit } from '@angular/core';
import { SEOService } from '../seo.service';

@Component({
  selector: 'app-faq-page',
  templateUrl: './faq-page.component.html',
  styleUrls: ['./faq-page.component.css']
})
export class FaqPageComponent implements OnInit {

  constructor(
    private seoService: SEOService
  ) { }

  ngOnInit(): void {
    this.seoService.updateTitle('FAQs - WIW Learn');
    this.seoService.updateDescription('Frequently Asked Questions about WIW Learn')
  }

}
