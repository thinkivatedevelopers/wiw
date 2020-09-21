import { Component, OnInit } from '@angular/core';
import { SEOService } from '../seo.service';

@Component({
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.css']
})
export class NotFoundPageComponent implements OnInit {

  constructor(private seoService: SEOService) { }

  
  ngOnInit(): void {
    this.seoService.updateTitle('Page Not Found - WIW Learn');
    this.seoService.updateDescription('Oops!! The Page You Are Looking For, Is Not Found!');
  }

}
