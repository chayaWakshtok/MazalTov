import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { Candidate } from 'src/app/classes/candidate';
import { Chasidut } from 'src/app/classes/chasidut';
import { City } from 'src/app/classes/city';
import { Married } from 'src/app/classes/married';
import { Sector } from 'src/app/classes/sector';
import { CandidateService } from 'src/app/shared/services/candidate.service';
import { ChasidutService } from 'src/app/shared/services/chasidut.service';
import { CityService } from 'src/app/shared/services/city.service';
import { SectorService } from 'src/app/shared/services/sector.service';
import { UserService } from 'src/app/shared/services/user.service';
import { CandidateFamily } from 'src/app/classes/candidateFamily';
import { InfoCandidate } from 'src/app/classes/infoCandidate';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RegisterMessageComponent } from '../register-message/register-message.component';
import { TokenStorageService } from 'src/app/shared/auth/token-storage.service';



@Component({
  selector: 'app-candidate-register',
  templateUrl: './candidate-register.component.html',
  styleUrls: ['./candidate-register.component.scss']
})
export class CandidateRegisterComponent implements OnInit {
  // user:user = new user();

  model: Candidate = new Candidate();
  cities: City[] = [];
  sector: Sector[] = [];
  chasidut: Chasidut[] = [];
  date = new Date();
  entryBy = 1;

  constructor(public router: Router,
    public userService: UserService,
    public tokenService: TokenStorageService,
    public cityService: CityService,
    public chasidutService: ChasidutService,
    public sectorService: SectorService,
    public candidateService: CandidateService,
    private modalService: NgbModal,
    private cdr: ChangeDetectorRef,) { }

  ngOnInit(): void {
    this.cityService.getCity().subscribe(l => { this.cities = l });
    this.sectorService.getSector().subscribe(l => { this.sector = l });
    this.chasidutService.getChasiut().subscribe(l => { this.chasidut = l });
    this.model.infoCandidates = [new InfoCandidate()];
  }

  changeNumMarried() {
    if (this.model.numMarried) {
      this.model.marrieds = [];
      for (let index = 0; index < this.model.numMarried; index++) {
        this.model.marrieds.push(new Married());
      }
    }
    else this.model.marrieds = [];
  }

  changeNumChildren() {
    if (this.model.numChildren) {
      this.model.candidateFamilies = [];
      for (let index = 0; index < this.model.numChildren; index++) {
        this.model.candidateFamilies.push(new CandidateFamily());
      }
    }
    else this.model.candidateFamilies = [];
  }

  addChild() {
    this.model.numChildren++;
    this.model.candidateFamilies.push(new CandidateFamily());
  }

  addMarried() {
    this.model.numMarried++;
    this.model.marrieds.push(new Married());
  }

  addInfoCan() {
    this.model.infoCandidates.push(new InfoCandidate());
  }

  registerCandidate(): void {
    var user = this.tokenService.getUser();
    if (user)
      this.model.entryByUser = user._id;
    this.model.step = 0;
    this.candidateService.registerCandidate(this.model).subscribe(res => {
      if (res) {
        const modalRef = this.modalService.open(RegisterMessageComponent,
          {
            size: 'xl'
          });
        this.router.navigate([""]);
      }
      else {
        //  this.router.navigate(['app-muamad-register']);
        alert("error");
      }
    }, err => {
      alert("error")
    }
    )
  }

  changeCube(value) {
    debugger;
    this.model.isCube = value;
    this.cdr.detectChanges();
  }

}
