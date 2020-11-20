import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { TokenStorageService } from '../auth/token-storage.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public httpClient: HttpClient,private router:Router,
    public tokenStorage: TokenStorageService) { }

  getToken(data): any {
    const body = new HttpParams()
      .set('grant_type', data.grant_type)
      .set('username', data.username)
      .set('password', data.password)
    return this.httpClient.post(environment.apiUrl + 'token', body.toString(), {
      observe: 'response',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });
  }

  register() {

  }
 
  


}
