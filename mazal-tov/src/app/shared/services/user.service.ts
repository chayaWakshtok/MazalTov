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


const URL = environment.apiUrl + "api/user/"

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private currentUserSubject: Subject<User> = new Subject();
  public currentUser: Observable<User>;

  constructor(public httpClient: HttpClient, private router: Router,
    public tokenStorage: TokenStorageService) {
      this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
      this.currentUser = this.currentUserSubject.asObservable();
    }


  getToken(data: User): Observable<any> {
    return this.httpClient.post<User>(`${environment.apiUrl}api/token`, { username: data.username, password: data.password })
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

  getDataAdminHome3(): Observable<any> {
    return this.httpClient.get<any>(URL + "getDataAdminHome3");
  }

  getDataAdminHome2(): Observable<any> {
    return this.httpClient.get<any>(URL + "getDataAdminHome2");
  }

  getDataAdminHome1(): Observable<any> {
    return this.httpClient.get<any>(URL + "getDataAdminHome1");
  }

  updateStatus(item: User): Observable<any> {
    return this.httpClient.put<any>(URL + "updateStats", item);
  }

  getDataHome(): Observable<any> {
    return this.httpClient.get<any>(URL + "getDataHome");
  }
}
