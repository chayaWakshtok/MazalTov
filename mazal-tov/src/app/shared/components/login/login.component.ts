import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';
import { User } from 'src/Classes/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: User = new User();
  constructor(public userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  validlogin(): void {
    console.log("login");
    debugger;
    this.userService.getToken(this.user).subscribe(res => {
    }, err => {
      alert("error")
    })
  }


}
