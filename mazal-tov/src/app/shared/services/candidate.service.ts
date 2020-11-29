import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { Candidate } from 'src/app/classes/candidate';
import { City } from 'src/app/classes/city';
import { Helper } from 'src/app/classes/helper';
import { Matchmaker } from 'src/app/classes/matchmaker';
 

@Injectable({
    providedIn: 'root'
  })
  export class CandidateService {

    constructor(public httpClient: HttpClient, private router: Router,) { }

    
    registerCandidate(model: Candidate): Observable<Candidate> {
        return this.httpClient.post<Candidate>(URL + "RegisterCandidate", model)
      }
    
  }
