import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { TokenStorageService } from '../auth/token-storage.service';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { Candidate } from 'src/app/classes/candidate';
import { Matchmaker } from 'src/app/classes/matchmaker';
import { User } from 'src/app/classes/user';
import { Helper } from 'src/app/classes/helper';


const URL = environment.apiUrl + "api/User/"

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private currentUserSubject: Subject<User>=new Subject();
  public currentUser: Observable<User>;

  constructor(public httpClient: HttpClient, private router: Router,
    public tokenStorage: TokenStorageService) { }

  getToken(data: User): Observable<any> {
    const body = new HttpParams()
      .set('grant_type', "password")
      .set('username', data.username)
      .set('password', data.password)
    return this.httpClient.post<any>(environment.apiUrl + 'token', body.toString(), {
      observe: 'response',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    }).pipe(map((data: any) => {
      debugger;
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      this.tokenStorage.saveToken(data.body.access_token);
      return data;
    }));;
  }

  getInfo() {
    return this.httpClient.get<User>(URL + "GetInfo")
      .pipe(map((data: any) => {
        this.tokenStorage.saveUser(data);
        this.currentUserSubject.next(data);
        return data;
      }))
  }
}
