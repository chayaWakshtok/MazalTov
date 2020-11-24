import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChasidutService } from 'src/app/shared/services/chasidut.service';
import { CityService } from 'src/app/shared/services/city.service';
import { SectorService } from 'src/app/shared/services/sector.service';
import { UserService } from 'src/app/shared/services/user.service';
import { Chasidut } from 'src/Classes/chasidut';
import { City } from 'src/Classes/city';
import { Helper } from 'src/Classes/helper';
import { Sector } from 'src/Classes/sector';

@Component({
  selector: 'app-helper',
  templateUrl: './helper.component.html',
  styleUrls: ['./helper.component.scss']
})
export class HelperComponent implements OnInit {
  helper: Helper = new Helper();
  cities: City[] = [];
  sector:Sector[]=[];
  chasidut:Chasidut[]=[];
  constructor(public router:Router,public userService:UserService,public cityService:CityService
    ,public sectorService:SectorService ) { }

  ngOnInit(): void {
    this.cityService.getCity().subscribe(l => { this.cities = l });
    this.sectorService.getSector().subscribe(l => { this.sector = l });
  
  }
  onChangeCity(deviceValue:number) {
    alert("fl");
   this.helper.cityId=deviceValue;
   console.log(deviceValue);}
   Idsector(id:number){
 
    console.log(this.helper);
    this.helper.sectorId=id;
    
  }
}
