

import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { City } from 'src/app/classes/city';
import { Helper } from 'src/app/classes/helper';
import { Worker } from 'src/app/classes/worker';



@Injectable({
  providedIn: 'root'
})
export class WorkerService {

  baseApi = environment.apiUrl + "worker/";

  constructor(public httpClient: HttpClient, private router: Router,) { }

  registerWorker(model: Worker): Observable<Worker> {
    return this.httpClient.post<Worker>(this.baseApi + "create", model)
  }

  getTodayHebrow() {
    var date = new Date();
    return this.httpClient.get(`https://www.hebcal.com/converter?cfg=json&gy=${date.getFullYear()}
    &gm=${date.getMonth() + 1}&gd=${date.getDate()}&g2h=1`);
  }

}

