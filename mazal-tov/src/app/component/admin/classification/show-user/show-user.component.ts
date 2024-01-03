import { Component, Input, OnInit } from '@angular/core';
import { Candidate } from 'src/app/classes/candidate';
import { Matchmaker } from 'src/app/classes/matchmaker';
import { Rav } from 'src/app/classes/rav';
import { Role, RoleEnum } from 'src/app/classes/role';
import { Secretary } from 'src/app/classes/secretary';
import { User } from 'src/app/classes/user';
import { Worker } from 'src/app/classes/worker';
import { CandidateService } from 'src/app/shared/services/candidate.service';
import { MatchmakerService } from 'src/app/shared/services/matchmaker.service';
import { RavService } from 'src/app/shared/services/rav.service';
import { SecretaryService } from 'src/app/shared/services/secretary.service';
import { UserService } from 'src/app/shared/services/user.service';
import { WorkerService } from 'src/app/shared/services/worker.service';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.scss']
})
export class ShowUserComponent implements OnInit {

  private _user: User = new User();
  secretary: Secretary = new Secretary();
  worker: Worker = new Worker();
  rav: Rav = new Rav();
  matchMaker: Matchmaker = new Matchmaker();
  candidate: Candidate = new Candidate();

  @Input() set user(value: User) {
    this._user = value;
    if (this.user.role == RoleEnum.Secretary) {
      this.secretaryService.getByUserId(this.user._id).subscribe(res => {
        this.secretary = res;
      })
    }
    else if (this.user.role == RoleEnum.Worker) {
      this.workerService.getByUserId(this.user._id).subscribe(res => {
        this.worker = res;
      })
    }
    else if (this.user.role == RoleEnum.Rav) {
      this.ravService.getByUserId(this.user._id).subscribe(res => {
        this.rav = res;
      })
    }
    else if (this.user.role == RoleEnum.MatchMarker) {
      this.matchMakerService.getByUserId(this.user._id).subscribe(res => {
        this.matchMaker = res;
      })
    }
    else if (this.user.role == RoleEnum.User) {
      this.candidateService.getByUserId(this.user._id).subscribe(res => {
        this.candidate = res;
      })
    }
  }

  get user(): User {
    return this._user;
  }

  constructor(public userService: UserService,
    public secretaryService: SecretaryService,
    public candidateService: CandidateService,
    public ravService: RavService,
    public workerService: WorkerService,
    public matchMakerService: MatchmakerService) { }

  ngOnInit(): void {
  }

}
