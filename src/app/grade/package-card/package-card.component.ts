import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'package-card',
  templateUrl: './package-card.component.html',
  styleUrls: ['./package-card.component.css']
})
export class PackageCardComponent implements OnInit {
  @Input() package;
  @Input() courseSlug: string;
  @Input() packageSlug: string;
  @Input() gradeSlug: string;
  constructor() { }

  ngOnInit(): void {
  }

}
