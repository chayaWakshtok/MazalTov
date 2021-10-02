import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Halacha } from 'src/app/classes/halacha';
import { Contactus } from 'src/app/classes/contactus';

@Injectable({
  providedIn: 'root'
})
export class ContactusService {

  url: string;

  constructor(public httpClient: HttpClient, private router: Router,) {
    this.url = environment.apiUrl + "contactus";
  }

  getHalachots(): Observable<Contactus[]> {
    return this.httpClient.get<Contactus[]>(this.url + "/all");
  }

  create(Contactus: Contactus) {
    return this.httpClient.post(this.url + "/create",Contactus);
  }

  updateStatus(Contactus: Contactus) {
    return this.httpClient.put(this.url + "/updateStatus",Contactus);
  }
}
