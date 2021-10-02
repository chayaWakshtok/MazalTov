

import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { Secretary } from 'src/app/classes/secretary';

@Injectable({
  providedIn: 'root'
})
export class SecretaryService {

  baseApi = environment.apiUrl + "secretary/";

  constructor(public httpClient: HttpClient, private router: Router,) { }

  registerWorker(model: Secretary): Observable<Secretary> {
    return this.httpClient.post<Secretary>(this.baseApi + "create", model)
  }

  getTodayHebrow() {
    var date = new Date();
    return this.httpClient.get(`https://www.hebcal.com/converter?cfg=json&gy=${date.getFullYear()}
    &gm=${date.getMonth() + 1}&gd=${date.getDate()}&g2h=1`);
  }

}

