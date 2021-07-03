import { Component, OnInit } from '@angular/core';
import { CandidateStep } from 'src/app/classes/candidateStep';
import { Router } from '@angular/router';
import { Candidate } from 'src/app/classes/candidate';
import { CandidateService } from 'src/app/shared/services/candidate.service';
import { CandidateStepService } from 'src/app/shared/services/candidateStep.service';
import { TokenStorageService } from 'src/app/shared/auth/token-storage.service';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss']
})
export class Step1Component implements OnInit {

  canStep: CandidateStep = new CandidateStep();
  candidateMale: Candidate;
  candidateFemale: Candidate;

  constructor(public router: Router,
    public candidateStepService: CandidateStepService,
    private authenticationService: TokenStorageService) { }

  ngOnInit(): void {
    this.candidateFemale = this.candidateStepService.canFemale;
    this.candidateMale = this.candidateStepService.canMale;
    if (!this.candidateMale._id || !this.candidateFemale._id)
      this.router.navigate(["matchmaker/main"]);
    else if (this.candidateStepService.canStepCurrent) {
      this.canStep = this.candidateStepService.canStepCurrent;
    }
    else {
      this.canStep = new CandidateStep();
      this.canStep.female = this.candidateFemale;
      this.canStep.male = this.candidateMale;
      this.canStep.female.user.bornDate = new Date(this.canStep.female.user.bornDate);
      this.canStep.male.user.bornDate = new Date(this.canStep.male.user.bornDate);
      this.canStep.treatedByUser = this.authenticationService.getUser();
      this.canStep.step = 1;
    }
  }

  updateStep(nav: boolean = false) {
    if (this.canStep._id) {
      this.candidateStepService.updateStep(this.canStep).subscribe(res => {
        this.candidateStepService.canStepCurrent = this.canStep;
        if (nav)
          this.router.navigate(["matchmaker/step2", this.canStep._id]);
      })
    }
    else {
      this.candidateStepService.create(this.canStep).subscribe((res: CandidateStep) => {
        this.canStep._id = res._id;
        this.candidateStepService.canStepCurrent = this.canStep;
        if (nav)
          this.router.navigate(["matchmaker/step2", this.canStep._id]);
      })
    }
  }

  back() {
    this.router.navigate(["matchmaker/main"]);
    this.candidateStepService.canFemale = new Candidate();
    this.candidateStepService.canMale = new Candidate();
  }

  next() {
    this.updateStep(true);

  }

}
