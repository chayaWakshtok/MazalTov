import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { Chasidut } from 'src/Classes/chasidut';
 

@Injectable({
    providedIn: 'root'
  })
  export class ChasidutService {
  
    private currentUserSubject: BehaviorSubject<Chasidut>;
    public currentUser: Observable<Chasidut>;
  
    constructor(public httpClient: HttpClient, private router: Router,) { }
  
   
  
    getChasiut(): Observable<Chasidut[]> {
        return this.httpClient.get<Chasidut[]>(environment.apiUrl + "api/User/Chasidut");
      }
    
  }
