import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';
import { CityService } from 'src/app/shared/services/city.service';
import { ChasidutService } from 'src/app/shared/services/chasidut.service';
import { SectorService } from 'src/app/shared/services/sector.service';
import { Chasidut } from 'src/app/classes/chasidut';
import { City } from 'src/app/classes/city';
import { Matchmaker } from 'src/app/classes/matchmaker';
import { Sector } from 'src/app/classes/sector';
import { MatchmakerService } from 'src/app/shared/services/matchmaker.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RegisterMessageComponent } from '../register-message/register-message.component';

@Component({
  selector: 'app-matchmarker-register',
  templateUrl: './matchmarker-register.component.html',
  styleUrls: ['./matchmarker-register.component.scss']
})
export class MatchmarkerRegisterComponent implements OnInit {

  matchmaker: Matchmaker = new Matchmaker();
  cities: City[] = [];
  sector: Sector[] = [];
  chasidut: Chasidut[] = [];
  date: Date = new Date();
  confirmPassword: string = "";

  constructor(public router: Router, public userService: UserService, public cityService: CityService
    , public chasidutService: ChasidutService, public sectorService: SectorService,
    public matchmakerService: MatchmakerService,
    private modalService: NgbModal,) { }

  ngOnInit(): void {

    this.cityService.getCity().subscribe(l => { this.cities = l });
    this.sectorService.getSector().subscribe(l => { this.sector = l });
    this.chasidutService.getChasiut().subscribe(l => { this.chasidut = l });
  }

  registerMatchmaker(): void {
    this.matchmaker.user.status = 1;
    this.matchmaker.user.bornDate = new Date(this.matchmaker.user.bornDate);

    this.matchmakerService.registerMatchmaker(this.matchmaker).subscribe(res => {
      if (res == null)
        alert("error");
      else {
        const modalRef = this.modalService.open(RegisterMessageComponent,
          {
            size: 'xl'
          });
        this.router.navigate(["login"]);
      }
    }, err => {
      alert("error")
    }
    )
  }

}
