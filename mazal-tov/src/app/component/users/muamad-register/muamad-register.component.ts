import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChasidutService } from 'src/app/shared/services/chasidut.service';
import { CityService } from 'src/app/shared/services/city.service';
import { SectorService } from 'src/app/shared/services/sector.service';
import { UserService } from 'src/app/shared/services/user.service';
import { Candidate } from 'src/Classes/candidate';
import { Chasidut } from 'src/Classes/chasidut';
import { City } from 'src/Classes/city';
import { Sector } from 'src/Classes/sector';


@Component({
  selector: 'app-muamad-register',
  templateUrl: './muamad-register.component.html',
  styleUrls: ['./muamad-register.component.scss']
})
export class MuamadRegisterComponent implements OnInit {
  // user:user = new user();
 
  model: Candidate = new Candidate();
  cities: City[] = [];
  sector:Sector[]=[];
  chasidut:Chasidut[]=[];
  constructor(public router:Router,public userService:UserService,public cityService:CityService
    ,public chasidutService:ChasidutService,public sectorService:SectorService ) { }

  ngOnInit(): void {
    this.cityService.getCity().subscribe(l => { this.cities = l });
    this.sectorService.getSector().subscribe(l => { this.sector = l });
    this.chasidutService.getChasiut().subscribe(l => { this.chasidut = l });
  }
  onChange(deviceValue) {
    this.model.cityId=deviceValue;
    console.log(deviceValue);}

  registerCandidate():void{
  this.userService.registerCandidate(this.model).subscribe(res => {
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

onChangeCity(deviceValue:number) {
  alert("fl");
 this.model.cityId=deviceValue;
 console.log(deviceValue);}
 onChangeChasidut(deviceValue) {
  
   this.model.chasidutId=deviceValue;
   console.log(deviceValue);}
   onChangeChasidutFather(deviceValue) {
  
    this.model.chasidutFather=deviceValue;
    console.log(deviceValue);}
    onChangeChasidutMather(deviceValue) {
  
      this.model.chasidutMother=deviceValue;
      console.log(deviceValue);}
    
   Idsector(id:number){
 
    console.log(this.model);
    this.model.sectorId=id;
    
  }
}
