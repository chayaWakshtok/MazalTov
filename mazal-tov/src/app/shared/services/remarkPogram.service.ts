import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { City } from 'src/app/classes/city';
import { RemarkPogram } from 'src/app/classes/remarkPogram';


@Injectable({
  providedIn: 'root'
})
export class RemarkPogramService {

  url: string;

  constructor(public httpClient: HttpClient, private router: Router,) {
    this.url = environment.apiUrl + "api/remarkPogram";
  }

  getRemark(): Observable<City[]> {
    return this.httpClient.get<City[]>(this.url + "/all");
  }

  addRemark(remark: RemarkPogram) {
    return this.httpClient.post(this.url + "/create", remark);
  }

}

