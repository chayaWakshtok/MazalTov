import { Component, OnInit } from '@angular/core';
import { CandidateService } from 'src/app/shared/services/candidate.service';
import { Candidate } from 'src/app/classes/candidate';
import { CandidateStep } from 'src/app/classes/candidateStep';
import { Router } from '@angular/router';
import { CandidateStepService } from 'src/app/shared/services/candidateStep.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  candidateList: Candidate[] = [];
  canTreated: Candidate[] = [];
  canInStep: CandidateStep[] = [];
  yearNow = new Date().getFullYear();
  candidateMale: Candidate;
  candidateFemale: Candidate;
  canStepChoose: CandidateStep;

  constructor(public candidateService: CandidateService,
    public router: Router,
    public candidateStepService: CandidateStepService,) { }

  ngOnInit(): void {
    this.candidateService.getNotMarry().subscribe((res: Candidate[]) => {
      res.forEach(element => {
        element.user.bornDate = new Date(element.user.bornDate);
      });
      this.candidateList = res;
    });
    this.candidateService.getTreated().subscribe((res: Candidate[]) => {
      res.forEach(element => {
        element.user.bornDate = new Date(element.user.bornDate);
      });
      this.canTreated = res;
    })
    this.candidateService.getTreatedInStep().subscribe((res: CandidateStep[]) => {
      this.canInStep = res;
      this.canInStep.forEach(re => {
        re.updatedAt = new Date(re.updatedAt);
      })
    })
  }

  treatChoose() {
    if (this.candidateFemale && this.candidateMale) {
      this.candidateStepService.canFemale = this.candidateFemale;
      this.candidateStepService.canMale = this.candidateMale;
      this.router.navigate(["matchmaker/step1"]);
    }
    else alert("לא בחרת זכר ונקבה לזוג");
  }

  chooseStepRow(item: CandidateStep) {
    this.canStepChoose = item;
  }

  treatChooseStep() {
    if (!this.canStepChoose) {
      alert("לא נבחר זוג ");
      return;
    }
    this.candidateStepService.canStepCurrent = this.canStepChoose;
    this.canStepChoose.female.user.bornDate=new Date(this.canStepChoose.female.user.bornDate);
    this.canStepChoose.male.user.bornDate=new Date(this.canStepChoose.male.user.bornDate);
    this.candidateStepService.canFemale=this.canStepChoose.female;
    this.candidateStepService.canMale=this.canStepChoose.male;
    this.router.navigate(["matchmaker/step" + this.canStepChoose.step, this.canStepChoose._id]);
  }

  chooseRow(item: Candidate) {
    if (item.user.gender == 1)
      this.candidateMale = item;
    else this.candidateFemale = item;
  }

}
