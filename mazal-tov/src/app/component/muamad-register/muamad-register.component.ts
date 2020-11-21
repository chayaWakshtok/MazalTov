import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';
import { candidate } from 'src/Classes/candidate';
import { user } from 'src/Classes/user';

@Component({
  selector: 'app-muamad-register',
  templateUrl: './muamad-register.component.html',
  styleUrls: ['./muamad-register.component.scss']
})
export class MuamadRegisterComponent implements OnInit {
  // user:user = new user();
 
  model: candidate = new candidate();
 
  constructor(public userService:UserService,private router:Router) { }

  ngOnInit(): void {
  }

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
