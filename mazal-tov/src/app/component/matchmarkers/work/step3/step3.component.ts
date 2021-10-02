import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CandidateStepService } from 'src/app/shared/services/candidateStep.service';
import { CandidateStep } from 'src/app/classes/candidateStep';
import { CancelMatchComponent } from '../cancel-match/cancel-match.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.scss']
})
export class Step3Component implements OnInit {

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
          }
          else {
            this.canStepService.findById(params.id).subscribe((res: CandidateStep) => {
              this.canStepCurrect = res;
              this.canStepService.canStepCurrent = res;
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
    this.canStepCurrect.step = 4;
    this.canStepService.updateStep(this.canStepCurrect).subscribe(res => {
      this.router.navigate(["matchmaker/step4", this.canStepCurrect._id]);
    })
  }

  back() {
    const modalRef = this.modalService.open(CancelMatchComponent,
      {
        size: 'xl'
      });
    modalRef.result.then((result) => {
      debugger;
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
