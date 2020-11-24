import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { City } from 'src/Classes/city';
 

@Injectable({
    providedIn: 'root'
  })
  export class CityService {
  
    private currentUserSubject: BehaviorSubject<City>;
    public currentUser: Observable<City>;
  
    constructor(public httpClient: HttpClient, private router: Router,) { }
  
   
  
  
    getCity(): Observable<City[]> {
      return this.httpClient.get<City[]>(environment.apiUrl + "api/User/City");
    }
    
  }

 