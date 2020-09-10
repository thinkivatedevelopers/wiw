import { Component, OnInit } from '@angular/core';
import { SEOService } from '../seo.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactFormServiceService } from '../contact-form-service.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {
  phoneNumber = "^(\+\d{1,3}[- ]?)?\d{10}$";
  onLoading: boolean = false

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    mobile: new FormControl('', [Validators.required, Validators.minLength(10)]),
    message: new FormControl('', [Validators.required, Validators.minLength(5)]),
  });


  constructor(
    private seoService: SEOService,
    private contactService: ContactFormServiceService,
    private http: HttpClient,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.seoService.updateTitle('Contact us - WIW Learn');
    this.seoService.updateDescription('Wiw Learn is a One-App-One-Solution for Students. It allows students to access learning solutions mapped to their curriculum. Learn from anywhere, anytime while simultaneously allowing parents to track and evaluate the student’s performance.');
  }

  onSubmit() {
    let loadSnack = this.snackBar
    this.onLoading = true

    loadSnack.open('Please wait...', '', { horizontalPosition: 'right', verticalPosition: 'bottom' })
    // disable submit button
    // post data
    // on success, reset form, show success message and fade of message

    let data = {
      name: this.form.value.name,
      email: this.form.value.email,
      mobile: this.form.value.mobile,
      message: this.form.value.message,
      method: 'WIW Learn Website',
      against: 'WIW Learn'
    }

    const endPoint = 'http://3.129.204.135/enquiries'

    this.http.post(endPoint, data).subscribe(
      (res: any) => {
      console.log(res)
      if (res && res.status === 200) {
        loadSnack.dismiss()
        this.snackBar.open('Thank you, we\'ll get back to you. 😊😊', '', { duration: 4000, horizontalPosition: 'right', verticalPosition: 'bottom' })
      }
      else {
        loadSnack.dismiss()
        this.snackBar.open('Something went wrong, Please try again 🙁', '', { duration: 4000, horizontalPosition: 'right', verticalPosition: 'bottom' })
      }
      this.form.reset();
      this.onLoading = false
    }, 
    (err) => {
      console.log(err)
      loadSnack.dismiss()
      this.snackBar.open('Something went wrong, Please try again 🙁', '', { duration: 4000, horizontalPosition: 'right', verticalPosition: 'bottom' })
      this.form.reset();
      this.onLoading = false
    })

  }

}
