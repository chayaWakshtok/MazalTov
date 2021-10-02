import { Component, OnInit } from '@angular/core';
import { Candidate } from 'src/app/classes/candidate';
import { CandidateStep } from 'src/app/classes/candidateStep';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CandidateStepService } from 'src/app/shared/services/candidateStep.service';
import { CancelMatchComponent } from '../cancel-match/cancel-match.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss']
})
export class Step2Component implements OnInit {

  candidatesSteps: CandidateStep[] = [];
  canStepCurrect: CandidateStep = new CandidateStep();

  constructor(public router: Router,
    public activatedRoute: ActivatedRoute,
    public canStepService: CandidateStepService,
    private modalService: NgbModal,) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        if (params.id) {
          if (this.canStepService.canStepCurrent._id && this.canStepService.canStepCurrent._id == params.id) {
            this.canStepCurrect = this.canStepService.canStepCurrent;
            this.getAllData();
          }
          else {
            this.canStepService.findById(params.id).subscribe((res: CandidateStep) => {
              this.canStepCurrect = res;
              this.canStepService.canStepCurrent = res;
              this.getAllData();
            })
          }
        }
        else {
          this.router.navigate(["matchmaker/main"]);
        }
      }
    )
  }

  updateStep() {
    this.canStepCurrect.step = 3;
    this.canStepService.updateStep(this.canStepCurrect).subscribe(res => {
      this.router.navigate(["matchmaker/step3", this.canStepCurrect._id]);
    })
  }

  getAllData() {
    this.canStepService.getSameSteps(this.canStepCurrect).subscribe((res: CandidateStep[]) => {
      this.candidatesSteps = res;
      this.candidatesSteps = this.candidatesSteps.filter(p => p._id != this.canStepCurrect._id);
    })
  }

  back() {
    const modalRef = this.modalService.open(CancelMatchComponent,
      {
        size: 'xl'
      });
    modalRef.result.then((result) => {
      if (result) {
        this.router.navigate(["matchmaker/main"]);
      }
    });
    this.canStepCurrect.fail = { reasonMale: "", remarkMatcher: "", resonFemale: "", whoFail: '' };
    modalRef.componentInstance.canStepCurrect = this.canStepCurrect;
  }

  next() {
    this.updateStep();
  }
}
