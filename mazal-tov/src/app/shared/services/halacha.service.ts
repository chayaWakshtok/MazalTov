import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Halacha } from 'src/app/classes/halacha';

@Injectable({
  providedIn: 'root'
})
export class HalachaService {

  url: string;

  constructor(public httpClient: HttpClient, private router: Router,) {
    this.url = environment.apiUrl + "halacha";
  }

  getHalachots(): Observable<Halacha[]> {
    return this.httpClient.get<Halacha[]>(this.url + "/all");
  }

  create(halacha: Halacha) {
    return this.httpClient.post(this.url + "/create",halacha);
  }

  edit(halacha: Halacha) {
    return this.httpClient.put(this.url + "/update",halacha);
  }

  updateStatus(halacha: Halacha) {
    return this.httpClient.put(this.url + "/updateStatus",halacha);
  }
}
