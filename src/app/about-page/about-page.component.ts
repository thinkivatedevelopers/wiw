import { Component, OnInit } from '@angular/core';
import {Title, Meta} from '@angular/platform-browser';

import * as $ from 'jquery';
import 'magnific-popup';
import { SEOService } from '../seo.service';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {

  constructor(private seoService: SEOService
  ) { }

  ngOnInit(): void {
    this.seoService.updateTitle('About us - WIW Learn');
    this.seoService.updateDescription('Wiw Learn is a One-App-One-Solution for Students. It allows students to access learning solutions mapped to their curriculum. Learn from anywhere, anytime while simultaneously allowing parents to track and evaluate the student’s performance.');

    $('.video-popup').magnificPopup({
      type: 'iframe',
      showCloseBtn: true,
      removalDelay: 160,
      closeMarkup:
        '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
      mainClass: 'mfp-fade',
      iframe: {
        markup:
          '<div class="mfp-iframe-scaler">' +
          '<div class="mfp-close"></div>' +
          '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
          '</div>',
      },
      patterns: {
        youtube: {
          index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).
          id: 'v=', // String that splits URL in a two parts, second part should be %id%
          // Or null - full URL will be returned
          // Or a function that should return %id%, for example:
          // id: function(url) { return 'parsed id'; }
          src: '//www.youtube.com/embed/%id%?autoplay=1', // URL that will be set as a source for iframe.
        },
      },
    });

    $('.image-popup').magnificPopup({type: 'image'});
  }

}
