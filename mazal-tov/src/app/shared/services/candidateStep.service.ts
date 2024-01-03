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

const url = environment.apiUrl + "api/candidateStep/"

@Injectable({
  providedIn: 'root'
})
export class CandidateStepService {

  canStepCurrent: CandidateStep = new CandidateStep();
  canMale: Candidate = new Candidate();
  canFemale: Candidate = new Candidate();

  constructor(public httpClient: HttpClient, private router: Router,) { }

  updateStep(candidateStep: CandidateStep) {
    return this.httpClient.put(url + "update", candidateStep);
  }

  create(candidateStep: CandidateStep) {
    return this.httpClient.post(url + "create", candidateStep);
  }

  getSameSteps(candidateStep: CandidateStep) {
    return this.httpClient.post(url + "getSameSteps", { female: candidateStep.female, male: candidateStep.male });
  }

  findById(id: string) {
    return this.httpClient.get(url + 'findOne?id=' + id);
  }

  deleteTreatedByInStep(id: string)
  {
    return this.httpClient.delete(url+"deleteTreatedByInStep?id="+id);
  }

}
