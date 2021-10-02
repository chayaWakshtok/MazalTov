import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CandidateStep } from 'src/app/classes/candidateStep';
import { CandidateStepService } from 'src/app/shared/services/candidateStep.service';

@Component({
  selector: 'app-cancel-match',
  templateUrl: './cancel-match.component.html',
  styleUrls: ['./cancel-match.component.scss']
})
export class CancelMatchComponent implements OnInit, OnChanges {

  dateNow: Date = new Date();
  @Input() canStepCurrect: CandidateStep = new CandidateStep();

  constructor(public canStepService: CandidateStepService,
    public activeModal: NgbActiveModal) { }

  ngOnChanges(): void {
    this.canStepCurrect.fail = { reasonMale: "", remarkMatcher: "", resonFemale: "", whoFail: '' };
  }

  ngOnInit(): void {
  }

  send() {
    this.canStepCurrect.isFail = true;
    this.canStepCurrect.step = 8;
    this.canStepService.updateStep(this.canStepCurrect).subscribe(res => {
      this.canStepService.canStepCurrent = new CandidateStep();
      this.activeModal.close(true);
    })

  }

}
