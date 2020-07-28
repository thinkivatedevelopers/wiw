import { Component, OnInit, OnDestroy } from '@angular/core';
import {Title, Meta} from '@angular/platform-browser';

@Component({
  selector: 'app-features-page',
  templateUrl: './features-page.component.html',
  styleUrls: ['./features-page.component.css']
})
export class FeaturesPageComponent implements OnInit {

  constructor(
    private title: Title,
    private meta: Meta
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Features - WIW Learn');
    this.meta.updateTag({name: 'description', content: 'my super decription'});
  }

  ngOndestroy(){
    this.title.setTitle('sdfsdfsdf');
  }

}
