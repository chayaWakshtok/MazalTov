import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chasidut } from 'src/app/classes/chasidut';
import { City } from 'src/app/classes/city';
import { Helper } from 'src/app/classes/helper';
import { Sector } from 'src/app/classes/sector';
import { ChasidutService } from 'src/app/shared/services/chasidut.service';
import { CityService } from 'src/app/shared/services/city.service';
import { SectorService } from 'src/app/shared/services/sector.service';
import { UserService } from 'src/app/shared/services/user.service';


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
    
   this.helper.cityId=deviceValue;
   console.log(deviceValue);
  }
   Idsector(id:number){
 
    console.log(this.helper);
    console.log(this.helper.worker);
    this.helper.sectorId=id;
    
  }

  registerHelper():void{
 
    this.userService.registerHelper(this.helper ).subscribe(res => {
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
  
}
