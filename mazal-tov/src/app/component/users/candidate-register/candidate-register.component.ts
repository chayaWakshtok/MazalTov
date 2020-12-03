import { Component, OnInit } from '@angular/core';
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
  constructor(public router: Router, public userService: UserService, public cityService: CityService
    , public chasidutService: ChasidutService, public sectorService: SectorService, public candidateService: CandidateService) { }

  ngOnInit(): void {
    this.cityService.getCity().subscribe(l => { this.cities = l });
    this.sectorService.getSector().subscribe(l => { this.sector = l });
    this.chasidutService.getChasiut().subscribe(l => { this.chasidut = l });
  }

  changeNumMarried() {
    if (this.model.numMarried)
      this.model.marrieds = Array(this.model.numMarried).fill(new Married());
    else this.model.marrieds = [];
  }

  registerCandidate(): void {
    this.candidateService.registerCandidate(this.model).subscribe(res => {
      if (res == null)
        alert("error");
      else {

        //  this.router.navigate(['app-muamad-register']);
        alert("cxvbnm");
      }
    }, err => {
      alert("error")
    }
    )
  }

}
