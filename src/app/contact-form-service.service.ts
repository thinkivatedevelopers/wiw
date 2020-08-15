import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactFormServiceService {

  constructor(private http: HttpClient) {  }

  submitContactForm() {
    return this.http.get("https://script.google.com/macros/s/AKfycbzNZKf1Lwipg44dzUMlKZfgafOGYUla6ll-sQ2o-VZUa-mq4I4/exec");
      }
}
