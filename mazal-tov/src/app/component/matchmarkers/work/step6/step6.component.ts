import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CandidateStep } from 'src/app/classes/candidateStep';
import { RemarkPogram } from 'src/app/classes/remarkPogram';
import { CandidateService } from 'src/app/shared/services/candidate.service';
import { CandidateStepService } from 'src/app/shared/services/candidateStep.service';
import { RemarkPogramService } from 'src/app/shared/services/remarkPogram.service';

@Component({
  selector: 'app-step6',
  templateUrl: './step6.component.html',
  styleUrls: ['./step6.component.scss']
})
export class Step6Component implements OnInit {

  canStepCurrect: CandidateStep = new CandidateStep();
  remarkPogram: RemarkPogram = new RemarkPogram();

  constructor(public router: Router,
    public activatedRoute: ActivatedRoute,
    public canStepService: CandidateStepService,
    public canService: CandidateService,
    private modalService: NgbModal,
    public remarkService: RemarkPogramService) { }


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

  addRemark() {
    this.remarkService.addRemark(this.remarkPogram).subscribe(res => {
      this.remarkPogram = new RemarkPogram();
    })
  }

  back() {
    this.router.navigate([""]);
  }

  updateStep() {
    this.canStepCurrect.step = 7;
    this.canStepService.updateStep(this.canStepCurrect).subscribe(res => {
      this.canService.updateMarry(this.canStepCurrect.male._id).subscribe();
      this.canService.updateMarry(this.canStepCurrect.female._id).subscribe();
    })
  }

  next() {
    this.canStepCurrect.step = 7;
    this.canStepService.updateStep(this.canStepCurrect).subscribe(res => {
      this.canService.updateMarry(this.canStepCurrect.male._id).subscribe();
      this.canService.updateMarry(this.canStepCurrect.female._id).subscribe();
      this.router.navigate(["matchmaker/main"]);
    })
  }

}
