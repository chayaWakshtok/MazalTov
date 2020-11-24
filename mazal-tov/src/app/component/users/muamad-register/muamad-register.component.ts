import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';
import { Candidate } from 'src/Classes/candidate';
import { City } from 'src/Classes/city';


@Component({
  selector: 'app-muamad-register',
  templateUrl: './muamad-register.component.html',
  styleUrls: ['./muamad-register.component.scss']
})
export class MuamadRegisterComponent implements OnInit {
  // user:user = new user();
 
  model: Candidate = new Candidate();
  cities: City[] = [];
  constructor(public userService:UserService,private router:Router) { }

  ngOnInit(): void {
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
}
