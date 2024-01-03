

import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { City } from 'src/app/classes/city';
import { Helper } from 'src/app/classes/helper';
import { Worker } from 'src/app/classes/worker';
import { Rav } from 'src/app/classes/rav';

@Injectable({
  providedIn: 'root'
})
export class RavService {

  baseApi = environment.apiUrl + "api/rav/";

  constructor(public httpClient: HttpClient, private router: Router,) { }

  registerWorker(model: Rav): Observable<Rav> {
    return this.httpClient.post<Rav>(this.baseApi + "create", model)
  }

  getTodayHebrow() {
    var date = new Date();
    return this.httpClient.get(`https://www.hebcal.com/converter?cfg=json&gy=${date.getFullYear()}
    &gm=${date.getMonth() + 1}&gd=${date.getDate()}&g2h=1`);
  }

  getById(id: string):Observable<Rav> {
    return this.httpClient.get<Rav>(this.baseApi + "find?id=" + id)
  }

  getByUserId(id: string):Observable<Rav> {
    return this.httpClient.get<Rav>(this.baseApi + "findByUser?id=" + id)
  }

}

