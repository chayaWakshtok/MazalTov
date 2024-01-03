import { Component, OnInit } from '@angular/core';
import { CandidateService } from 'src/app/shared/services/candidate.service';
import { Candidate } from 'src/app/classes/candidate';
import { CandidateStep } from 'src/app/classes/candidateStep';
import { Router } from '@angular/router';
import { CandidateStepService } from 'src/app/shared/services/candidateStep.service';
import { TokenStorageService } from 'src/app/shared/auth/token-storage.service';
import { Options } from '@angular-slider/ngx-slider';

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
  canStep: CandidateStep;

  value: number = 0;
  highValue: number = 120;
  options: Options = {
    floor: 0,
    ceil: 120,
    showTicks: false,
  };

  constructor(public candidateService: CandidateService,
    public router: Router,
    public candidateStepService: CandidateStepService,
    private authenticationService: TokenStorageService) { }

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

      this.canStep = new CandidateStep();
      this.canStep.female = this.candidateFemale;
      this.canStep.male = this.candidateMale;
      this.canStep.female.user.bornDate = new Date(this.canStep.female.user.bornDate);
      this.canStep.male.user.bornDate = new Date(this.canStep.male.user.bornDate);
      this.canStep.treatedByUser = this.authenticationService.getUser();
      this.canStep.step = 1;

      this.candidateStepService.create(this.canStep).subscribe((res: CandidateStep) => {
        this.canStep._id = res._id;
        this.candidateStepService.canStepCurrent = this.canStep;
        this.router.navigate(["matchmaker/step1"]);
      })


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
    this.canStepChoose.female.user.bornDate = new Date(this.canStepChoose.female.user.bornDate);
    this.canStepChoose.male.user.bornDate = new Date(this.canStepChoose.male.user.bornDate);
    this.candidateStepService.canFemale = this.canStepChoose.female;
    this.candidateStepService.canMale = this.canStepChoose.male;
    this.router.navigate(["matchmaker/step" + this.canStepChoose.step, this.canStepChoose._id]);
  }

  chooseRow(item: Candidate) {
    if (item.user.gender == 1)
      this.candidateMale = item;
    else this.candidateFemale = item;
  }

  showUser(item: Candidate) {

  }

  deleteTreatedByInStep(id) {
    this.candidateStepService.deleteTreatedByInStep(id).subscribe(res => {
      this.candidateService.getTreatedInStep().subscribe((res: CandidateStep[]) => {
        this.canInStep = res;
        this.canInStep.forEach(re => {
          re.updatedAt = new Date(re.updatedAt);
        })
      })
    })
  }

}
