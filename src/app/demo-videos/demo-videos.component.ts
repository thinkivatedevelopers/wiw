import { Component, OnInit, Pipe, PipeTransform, Inject, AfterViewInit, ElementRef, ViewChild  } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import * as $ from 'jquery';
import 'magnific-popup';

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) { }
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

@Component({
  selector: 'app-demo-videos',
  templateUrl: './demo-videos.component.html',
  styleUrls: ['./demo-videos.component.css']
})
export class DemoVideosComponent implements AfterViewInit {
  @ViewChild('img') imgElement: ElementRef;

  videos = [
    {
      subject: 'Biology',
      link: 'https://www.youtube.com/watch?v=FUIIaLzDGlM',
      thumb: 'assets/icons/bio-fill.svg'
    },
    {
      subject: 'Physics',
      link: 'https://www.youtube.com/watch?v=K1V9mW8gQNs',
      thumb: 'assets/icons/phy-fill.svg'
    },
    {
      subject: 'Chemistry',
      link: 'https://www.youtube.com/watch?v=s6b5Hrzhcfo',
      thumb: 'assets/icons/che-fill.svg'
    },
    {
      subject: 'Maths',
      link: 'https://www.youtube.com/watch?v=gdjPwEZMMK0',
      thumb: 'assets/icons/math-fill.svg'
    }
    // {
    //   subject: 'Biology',
    //   link: 'https://www.youtube.com/watch?v=URrXh0LJ6JE',
    //   thumb: 'assets/icons/bio-fill.svg'
    // },
    // {
    //   subject: 'Physics',
    //   link: 'https://www.youtube.com/watch?v=uh6bHORgC-Y',
    //   thumb: 'assets/icons/phy-fill.svg'
    // },
    // {
    //   subject: 'Chemistry',
    //   link: 'https://www.youtube.com/watch?v=t8x3wdXZGEY',
    //   thumb: 'assets/icons/che-fill.svg'
    // },
    // {
    //   subject: 'Maths',
    //   link: 'https://www.youtube.com/watch?v=64643Op6WJo',
    //   thumb: 'assets/icons/math-fill.svg'
    // }
  ];

  constructor() { }


  ngAfterViewInit(): void {

    // To shuffle video array
    this.videos = this.videos.sort(() => Math.random() - 0.5);

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

  }

}

