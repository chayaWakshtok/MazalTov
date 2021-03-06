import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { City } from 'src/app/classes/city';
import { Helper } from 'src/app/classes/helper';
import { MatchingHelper } from 'src/app/classes/matchingHelper';
 

@Injectable({
    providedIn: 'root'
  })
  export class HelperService {

  constructor(public httpClient: HttpClient, private router: Router,) { }
 
  registerHelper(model: Helper): Observable<Helper> {
    return this.httpClient.post<Helper>(environment.apiUrl + "api/Helper/RegisterHelper", model)
  } 
  // getAllMatchingHelper(id:number): Observable<MatchingHelper[]> {
  //   return this.httpClient.get<MatchingHelper[]>(environment.apiUrl + "api/Helper/AllGetMatchingHelper/"+id);
  // }
  getMatchingHelper(id:number): Observable<MatchingHelper[]> {
    return this.httpClient.get<MatchingHelper[]>(environment.apiUrl +"api/Helper/GetMatchingHelper/"+id);
  }
  }

 