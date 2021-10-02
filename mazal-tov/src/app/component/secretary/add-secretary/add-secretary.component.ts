import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';
import { CityService } from 'src/app/shared/services/city.service';
import { ChasidutService } from 'src/app/shared/services/chasidut.service';
import { SectorService } from 'src/app/shared/services/sector.service';
import { Chasidut } from 'src/app/classes/chasidut';
import { City } from 'src/app/classes/city';
import { Worker } from 'src/app/classes/worker';
import { Sector } from 'src/app/classes/sector';
import { MatchmakerService } from 'src/app/shared/services/matchmaker.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RegisterMessageComponent } from '../../matchmarkers/register-message/register-message.component';
import { WorkerService } from 'src/app/shared/services/worker.service';
import { SecretaryService } from 'src/app/shared/services/secretary.service';
import { Secretary } from 'src/app/classes/secretary';

@Component({
  selector: 'app-add-secretary',
  templateUrl: './add-secretary.component.html',
  styleUrls: ['./add-secretary.component.scss']
})
export class AddSecretaryComponent implements OnInit {

  worker: Secretary = new Secretary();
  cities: City[] = [];
  sector: Sector[] = [];
  chasidut: Chasidut[] = [];
  date: Date = new Date();
  confirmPassword: string = "";

  constructor(public router: Router, public userService: UserService, public cityService: CityService
    , public chasidutService: ChasidutService, public sectorService: SectorService,
    public secretaryService: SecretaryService,
    private modalService: NgbModal,) { }

  ngOnInit(): void {

    this.cityService.getCity().subscribe(l => { this.cities = l });
    this.sectorService.getSector().subscribe(l => { this.sector = l });
    this.chasidutService.getChasiut().subscribe(l => { this.chasidut = l });
  }

  registerMatchmaker(): void {
    this.worker.user.status = 1;
    this.worker.user.bornDate = new Date(this.worker.user.bornDate);

    this.secretaryService.registerWorker(this.worker).subscribe(res => {
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
