import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Chasidut } from 'src/app/classes/chasidut';
import { City } from 'src/app/classes/city';
import { Rav } from 'src/app/classes/rav';
import { Sector } from 'src/app/classes/sector';
import { ChasidutService } from 'src/app/shared/services/chasidut.service';
import { CityService } from 'src/app/shared/services/city.service';
import { RavService } from 'src/app/shared/services/rav.service';
import { SectorService } from 'src/app/shared/services/sector.service';
import { UserService } from 'src/app/shared/services/user.service';
import { RegisterMessageComponent } from '../../matchmarkers/register-message/register-message.component';

@Component({
  selector: 'app-add-rav',
  templateUrl: './add-rav.component.html',
  styleUrls: ['./add-rav.component.scss']
})
export class AddRavComponent implements OnInit {


  worker: Rav = new Rav();
  cities: City[] = [];
  sector: Sector[] = [];
  chasidut: Chasidut[] = [];
  date: Date = new Date();
  confirmPassword: string = "";

  constructor(public router: Router, public userService: UserService, public cityService: CityService
    , public chasidutService: ChasidutService, public sectorService: SectorService,
    public ravService: RavService,
    private modalService: NgbModal,) { }

  ngOnInit(): void {

    this.cityService.getCity().subscribe(l => { this.cities = l });
    this.sectorService.getSector().subscribe(l => { this.sector = l });
    this.chasidutService.getChasiut().subscribe(l => { this.chasidut = l });
  }

  registerMatchmaker(): void {
    this.worker.user.status = 1;
    this.worker.user.bornDate = new Date(this.worker.user.bornDate);

    this.ravService.registerWorker(this.worker).subscribe(res => {
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
