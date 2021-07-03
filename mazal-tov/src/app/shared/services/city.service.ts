import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { City } from 'src/app/classes/city';


@Injectable({
  providedIn: 'root'
})
export class CityService {

  url: string;

  constructor(public httpClient: HttpClient, private router: Router,) {                                                                                                                                                                                                                                                                                       
    this.url = environment.apiUrl + "city";
  }

  getCity(): Observable<City[]> {
    return this.httpClient.get<City[]>(this.url + "/all");
  }

}

