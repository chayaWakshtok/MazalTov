import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CandidateStepService } from 'src/app/shared/services/candidateStep.service';
import { CandidateStep } from 'src/app/classes/candidateStep';
import { Meeting } from 'src/app/classes/meeting';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CancelMatchComponent } from '../cancel-match/cancel-match.component';

@Component({
  selector: 'app-step5',
  templateUrl: './step5.component.html',
  styleUrls: ['./step5.component.scss']
})
export class Step5Component implements OnInit {

  canStepCurrect: CandidateStep = new CandidateStep();
  newMeeting: Meeting = new Meeting();

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
    this.canStepCurrect.step = 6;
    this.canStepService.updateStep(this.canStepCurrect).subscribe(res => {
      this.router.navigate(["matchmaker/step6", this.canStepCurrect._id]);
    })
  }

  updateMeeting() {
    this.canStepCurrect.meeting.push(this.newMeeting);
    this.canStepService.updateStep(this.canStepCurrect).subscribe(res => {
      this.canStepService.canStepCurrent = this.canStepCurrect;
      this.newMeeting = new Meeting();
    })
  }

  cancel() {
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


}
