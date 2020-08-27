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


    const body = new FormData();
    body.append('name', this.form.value.name);
    body.append('email', this.form.value.email);
    body.append('message', this.form.value.message);
    body.append('mobile', this.form.value.mobile);

    this.http.post('https://script.google.com/macros/s/AKfycbzbt0Hh5jNMKnGxoWqfGl-X8p9gM2leWCOjgsaJv6l2qCCnGc8/exec', body).subscribe(res => {
      // console.log(res)

      this.form.reset();
      this.onLoading = false

      loadSnack.dismiss()
      this.snackBar.open('Thank you, we\'ll get back to you. 😊😊', '', { duration: 4000, horizontalPosition: 'right', verticalPosition: 'bottom' })
    })

  }

}
