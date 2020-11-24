import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Matchmaker } from 'src/Classes/matchmaker';
import { UserService } from 'src/app/shared/services/user.service';
 

import { NgModule }      from '@angular/core';
import { User } from 'src/Classes/user';
import { City } from 'src/Classes/city';
import { Sector } from 'src/Classes/sector';
 
import { CityService } from 'src/app/shared/services/city.service';
 
import { Chasidut } from 'src/Classes/chasidut';
import { ChasidutService } from 'src/app/shared/services/chasidut.service';
import { SectorService } from 'src/app/shared/services/sector.service';

@Component({
  selector: 'app-shadchanit-register',
  templateUrl: './shadchanit-register.component.html',
  styleUrls: ['./shadchanit-register.component.scss']
})
export class ShadchanitRegisterComponent implements OnInit {
     matchmaker: Matchmaker = new Matchmaker();
     cities: City[] = [];
     sector:Sector[]=[];
     chasidut:Chasidut[]=[];
     HowSend:any[]=["דואר","פקס","מייל"];
  constructor(public router:Router,public userService:UserService,public cityService:CityService
    ,public chasidutService:ChasidutService,public sectorService:SectorService ) { }

  ngOnInit(): void {

    this.cityService.getCity().subscribe(l => { this.cities = l });
    this.sectorService.getSector().subscribe(l => { this.sector = l });
    this.chasidutService.getChasiut().subscribe(l => { this.chasidut = l });
  }
  onChangeCity(deviceValue:number) {
     alert("fl");
    this.matchmaker.cityId=deviceValue;
    console.log(deviceValue);}
    onChangeChasidut(deviceValue) {
     
      this.matchmaker.chasidutId=deviceValue;
      console.log(deviceValue);}
  registerMatchmaker():void{
 
    this.userService.registerMatchmaker(this.matchmaker ).subscribe(res => {
      if (res == null)
          alert("error");    
       else {
          //  this.router.navigate(['app-muamad-register']);
        }
    }, err => {
      alert("error")
    }
    )
  }

  Idsector(id:number){
 
    console.log(this.matchmaker);
    this.matchmaker.sectorId=id;
    
  }
  HowSend(send:string){
    this.matchmaker.howSend=send;
  }
}
