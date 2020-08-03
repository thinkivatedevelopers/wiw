import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'price-and-plans',
  templateUrl: './price-and-plans.component.html',
  styleUrls: ['./price-and-plans.component.css']
})
export class PriceAndPlansComponent implements OnInit {

  courseList;

  constructor(
    private data: DataService ) {}

  ngOnInit(): void {
    this.courseList = this.data.getAllData();
    console.log(this.data.getAllData());
  }

}
