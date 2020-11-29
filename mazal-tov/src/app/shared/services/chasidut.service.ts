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
  
    constructor(public httpClient: HttpClient, private router: Router,) { }
  
    getChasiut(): Observable<Chasidut[]> {
        return this.httpClient.get<Chasidut[]>(environment.apiUrl + "api/Chasidut/GetChasidut");
      }
    
  }
