import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


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
export class DemoVideosComponent implements OnInit {
  videos = [
    {
      link: 'https://www.youtube.com/embed/tgbNymZ7vqY',
      thumb: 'first'
    },
    {
      link: 'https://www.youtube.com/embed/_bZDjQOMf4U',
      thumb: 'second'
    },
    {
      link: 'https://www.youtube.com/embed/ANyOZIcGvB8',
      thumb: 'third'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
