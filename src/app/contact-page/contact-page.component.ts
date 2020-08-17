import { Component, OnInit } from '@angular/core';
import { SEOService } from '../seo.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactFormServiceService } from '../contact-form-service.service';


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
    private seoService: SEOService,
    private contactService:ContactFormServiceService
  ) { }

  ngOnInit(): void {
    this.seoService.updateTitle('Contact us - WIW Learn');
    this.seoService.updateDescription('Wiw Learn is a One-App-One-Solution for Students. It allows students to access learning solutions mapped to their curriculum. Learn from anywhere, anytime while simultaneously allowing parents to track and evaluate the student’s performance.');
  }

  onSubmit(){
    
    //alert(JSON.stringify(this.form.value))
   
      // this.contactService.submitContactForm()
      //   .subscribe(() =>{} );
    
    // https://script.google.com/macros/s/AKfycbzNZKf1Lwipg44dzUMlKZfgafOGYUla6ll-sQ2o-VZUa-mq4I4/exec
    
//     var $form = $('form#test-form'),
//     url = 'https://script.google.com/macros/s/abcdefghijklmnopqrstuvwxyz1234567890/exec'

// $('#submit-form').on('click', function(e) {
//   e.preventDefault();
//   var jqxhr = $.ajax({
//     url: url,
//     method: "GET",
//     dataType: "json",
//     data: $form.serializeObject()
//   }).success(
//     // do something
//   );
// })
  
  }

}
