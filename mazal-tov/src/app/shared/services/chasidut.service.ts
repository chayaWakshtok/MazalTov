import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { Chasidut } from 'src/app/classes/chasidut';


@Injectable({
  providedIn: 'root'
})
export class ChasidutService {

  url: string;

  constructor(public httpClient: HttpClient, private router: Router,) {
    this.url = environment.apiUrl + "api/chasidut";
  }

  getChasiut(): Observable<Chasidut[]> {
    return this.httpClient.get<Chasidut[]>(this.url + "/all");
  }

}
