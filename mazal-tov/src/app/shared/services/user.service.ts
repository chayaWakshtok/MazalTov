import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { TokenStorageService } from '../auth/token-storage.service';
import { Router } from '@angular/router';
import { matchmaker } from 'src/Classes/matchmaker';
import { Observable } from 'rxjs';
import { candidate } from 'src/Classes/candidate';
import { city } from 'src/Classes/city';
import { sector } from 'src/Classes/sector';
import { chasidut } from 'src/Classes/chasidut';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public httpClient: HttpClient,private router:Router,
    public tokenStorage: TokenStorageService) { }

  getToken(data): any {
    debugger;
    const body = new HttpParams()
      .set('grant_type', data.grant_type)
      .set('username', data.username)
      .set('password', data.password)
    return this.httpClient.post(environment.apiUrl + 'api/User/token', body.toString(), {
      observe: 'response',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });
  }

 

  registerCandidate(model:candidate):Observable<candidate>{
      return this.httpClient.post<candidate>(environment.apiUrl+"api/User/RegisterCandidate",model)
      }
    registerMatchmaker(model:matchmaker):Observable<matchmaker>{
        return this.httpClient.post<matchmaker>(environment.apiUrl+"api/User/RegisterMatchmaker",model)
        }


        getCity() :Observable<city[]>{
             
            return this.httpClient.get<city[]>(environment.apiUrl+"api/User/City");

        }
        getSector() :Observable<sector[]>{
           
         return this.httpClient.get<sector[]>(environment.apiUrl+"api/User/Sector");
     }
     getChasiut() :Observable<chasidut[]>{
       
     return this.httpClient.get<chasidut[]>(environment.apiUrl+"api/User/Chasidut");
 }

 
  


}
