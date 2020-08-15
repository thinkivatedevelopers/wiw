import { Component, OnInit } from '@angular/core';
import { SEOService } from '../seo.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {
  phoneNumber = "^(\+\d{1,3}[- ]?)?\d{10}$";
   form=new FormGroup({
     name:new FormControl('',Validators.required),
     email:new FormControl('',[Validators.required,Validators.email]),
     mobile:new FormControl('',[Validators.required,Validators.minLength(10)]),
     message:new FormControl('',[Validators.required,Validators.minLength(5)]),
   });


  constructor(
    private seoService: SEOService
  ) { }

  ngOnInit(): void {
    this.seoService.updateTitle('Contact us - WIW Learn');
    this.seoService.updateDescription('Wiw Learn is a One-App-One-Solution for Students. It allows students to access learning solutions mapped to their curriculum. Learn from anywhere, anytime while simultaneously allowing parents to track and evaluate the student’s performance.');
  }

  onSubmit(){
    alert(JSON.stringify(this.form.value))
  }

}
