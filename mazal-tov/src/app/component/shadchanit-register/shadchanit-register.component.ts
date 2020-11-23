import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { matchmaker } from 'src/Classes/matchmaker';
import { UserService } from 'src/app/shared/services/user.service';

import { NgModule }      from '@angular/core';
import { user } from 'src/Classes/user';
import { city } from 'src/Classes/city';
@Component({
  selector: 'app-shadchanit-register',
  templateUrl: './shadchanit-register.component.html',
  styleUrls: ['./shadchanit-register.component.scss']
})
export class ShadchanitRegisterComponent implements OnInit {
     matchmaker: matchmaker = new matchmaker();
     cities: city[] = [];
   
  constructor(public router:Router,public userService:UserService,) { }

  ngOnInit(): void {

  
    this.userService.getCity().subscribe(l => { this.cities = l });

  }
  onChange(deviceValue) {
    this.matchmaker.cityId=deviceValue;
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
}
