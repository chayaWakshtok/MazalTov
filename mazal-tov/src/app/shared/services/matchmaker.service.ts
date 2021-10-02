

import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { City } from 'src/app/classes/city';
import { Helper } from 'src/app/classes/helper';
import { Matchmaker } from 'src/app/classes/matchmaker';


@Injectable({
  providedIn: 'root'
})
export class MatchmakerService {

  baseApi = environment.apiUrl + "matchmaker/";

  constructor(public httpClient: HttpClient, private router: Router,) { }

  registerMatchmaker(model: Matchmaker): Observable<Matchmaker> {
    return this.httpClient.post<Matchmaker>(this.baseApi + "create", model)
  }

  getTodayHebrow() {
    var date = new Date();
    return this.httpClient.get(`https://www.hebcal.com/converter?cfg=json&gy=${date.getFullYear()}
    &gm=${date.getMonth() + 1}&gd=${date.getDate()}&g2h=1`);
  }

  getCloseCount() {
    return this.httpClient.get(this.baseApi + "countFinish");
  }

  findMatchmaker():Observable<Matchmaker> {
    return this.httpClient.get<Matchmaker>(this.baseApi + "findMatchmaker");
  }

  getTryMatchCount() {
    return this.httpClient.get(this.baseApi + "countTryMatch");
  }

}

