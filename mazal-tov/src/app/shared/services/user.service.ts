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


const URL = environment.apiUrl + "user/"

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private currentUserSubject: Subject<User> = new Subject();
  public currentUser: Observable<User>;

  constructor(public httpClient: HttpClient, private router: Router,
    public tokenStorage: TokenStorageService) { }


  getToken(data: User): Observable<any> {
    return this.httpClient.post<User>(`${environment.apiUrl}token`, { username: data.username, password: data.password })
      .pipe(map(user => {
        this.tokenStorage.saveToken(user.accessToken);
        this.tokenStorage.saveUser(user);
        return user;
      }));
  }

  getInfo() {
    return this.httpClient.get<User>(URL + "GetInfo")
      .pipe(map((data: any) => {
        this.tokenStorage.saveUser(data);
        this.currentUserSubject.next(data);
        return data;
      }))
  }

  getAll(): Observable<User[]> {
    return this.httpClient.get<User[]>(URL + "all");
  }

  updateStatus(item: User): Observable<User> {
    return this.httpClient.put<User>(URL + "updateStats", item);
  }
}
