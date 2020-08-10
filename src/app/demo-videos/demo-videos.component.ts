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
      link: 'https://www.youtube.com/watch?v=fqVUBzQIuko',
      thumb: 'assets/images/presenters/video-thumb-2.png'
    },
    {
      link: 'https://www.youtube.com/watch?v=pBbsvavno8I',
      thumb: 'assets/images/presenters/video-thumb-3.png'
    },
    {
      link: 'https://www.youtube.com/watch?v=IEv3Pnh1O4M',
      thumb: 'assets/images/presenters/video-thumb-4.png'
    }
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

