import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { Sector } from 'src/app/classes/sector';


@Injectable({
  providedIn: 'root'
})
export class SectorService {

  url: string;

  constructor(public httpClient: HttpClient, private router: Router,) {
    this.url = environment.apiUrl + "sector";
  }

  getSector(): Observable<Sector[]> {
    return this.httpClient.get<Sector[]>(this.url+ "/all");
  }
}

