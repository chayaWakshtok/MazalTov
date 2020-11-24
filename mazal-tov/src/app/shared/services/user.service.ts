import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { TokenStorageService } from '../auth/token-storage.service';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from 'src/Classes/user';
import { Candidate } from 'src/Classes/candidate';
import { Matchmaker } from 'src/Classes/matchmaker';
import { City } from 'src/Classes/city';
import { Sector } from 'src/Classes/sector';
import { Chasidut } from 'src/Classes/chasidut';
import { Helper } from 'src/Classes/helper';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(public httpClient: HttpClient, private router: Router,
    public tokenStorage: TokenStorageService) { }

  getToken(data: User): any {
    debugger;
    const body = new HttpParams()
      .set('grant_type', "password")
      .set('username', data.username)
      .set('password', data.password)
    return this.httpClient.post<any>(environment.apiUrl + 'token', body.toString(), {
      observe: 'response',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    }).pipe(map((data: any) => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      this.tokenStorage.saveToken(data);
      this.currentUserSubject.next(data);
      return data;
    }));;
  }

  registerCandidate(model: Candidate): Observable<Candidate> {
    return this.httpClient.post<Candidate>(environment.apiUrl + "api/User/RegisterCandidate", model)
  }

  registerMatchmaker(model: Matchmaker): Observable<Matchmaker> {
    return this.httpClient.post<Matchmaker>(environment.apiUrl + "api/User/RegisterMatchmaker", model)
  }

   
  registerHelper(model: Helper): Observable<Helper> {
    return this.httpClient.post<Helper>(environment.apiUrl + "api/User/RegisterHelper", model)
  }
 

}
