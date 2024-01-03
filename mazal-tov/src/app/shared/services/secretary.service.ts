

import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { Secretary } from 'src/app/classes/secretary';
import { url } from 'inspector';

@Injectable({
  providedIn: 'root'
})
export class SecretaryService {

  baseApi = environment.apiUrl + "api/secretary/";

  constructor(public httpClient: HttpClient, private router: Router,) { }

  registerWorker(model: Secretary): Observable<Secretary> {
    return this.httpClient.post<Secretary>(this.baseApi + "create", model)
  }

  getTodayHebrow() {
    var date = new Date();
    return this.httpClient.get(`https://www.hebcal.com/converter?cfg=json&gy=${date.getFullYear()}
    &gm=${date.getMonth() + 1}&gd=${date.getDate()}&g2h=1`);
  }

  getById(id: string):Observable<Secretary> {
    return this.httpClient.get<Secretary>(this.baseApi + "find?id=" + id)
  }

  getByUserId(id: string):Observable<Secretary> {
    return this.httpClient.get<Secretary>(this.baseApi + "findByUser?id=" + id)
  }

}

