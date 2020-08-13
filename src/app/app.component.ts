import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fadeAnimation } from './animations';

import * as $ from 'jquery';
import 'magnific-popup';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    fadeAnimation
  ]
})
export class AppComponent implements OnInit {
  title = 'wiw';

  constructor() { }

  ngOnInit() {
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

    $('.owl-one').owlCarousel({
      loop: true,
      margin: 0,
      nav: true,
      responsiveClass: true,
      autoplay: false,
      autoplayTimeout: 5000,
      autoplaySpeed: 1000,
      autoplayHoverPause: false,
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        480: {
          items: 1,
          nav: false
        },
        667: {
          items: 1,
          nav: true
        },
        1000: {
          items: 1,
          nav: true
        }
      }
    })
    
  }
}
