
  
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
  
      constructor(public httpClient: HttpClient, private router: Router,) { }
  
      
      registerMatchmaker(model: Matchmaker): Observable<Matchmaker> {
        return this.httpClient.post<Matchmaker>(environment.apiUrl  + "api/RegisterMatchmaker", model)
      }
      
    }
  
 