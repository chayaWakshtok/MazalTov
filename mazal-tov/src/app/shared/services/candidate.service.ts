import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { Candidate } from 'src/app/classes/candidate';
import { City } from 'src/app/classes/city';
import { Helper } from 'src/app/classes/helper';
import { Matchmaker } from 'src/app/classes/matchmaker';
import { environment } from 'src/environments/environment';
import { CandidateStep } from 'src/app/classes/candidateStep';

const url = environment.apiUrl + "api/candidate/"

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  constructor(public httpClient: HttpClient, private router: Router,) { }


  registerCandidate(model: Candidate): Observable<Candidate> {
    return this.httpClient.post<Candidate>(url + "create", model)
  }

  getAll() {
    return this.httpClient.get(url + "all")
  }

  getNotMarry() {
    return this.httpClient.get(url + "notMarry")
  }

  getTreated() {
    return this.httpClient.get(url + "treatedBy")
  }

  getTreatedInStep() {
    return this.httpClient.get(url + "treatedByInStep")
  }

  updateStep(candidateStep: CandidateStep) {
    return this.httpClient.post(url + "updateStep", candidateStep);
  }

  updateMarry(num: string) {
    return this.httpClient.put(url + "updateMarry?id=" + num, {});
  }

  getById(id: string):Observable<Candidate> {
    return this.httpClient.get<Candidate>(url + "find?id=" + id)
  }

  getByUserId(id: string):Observable<Candidate> {
    return this.httpClient.get<Candidate>(url + "findByUser?id=" + id)
  }

}
