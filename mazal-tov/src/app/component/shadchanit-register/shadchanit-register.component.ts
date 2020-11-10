import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { matchmaker } from 'src/Classes/matchmaker';
 

import { NgModule }      from '@angular/core';
import { user } from 'src/Classes/user';
@Component({
  selector: 'app-shadchanit-register',
  templateUrl: './shadchanit-register.component.html',
  styleUrls: ['./shadchanit-register.component.scss']
})
export class ShadchanitRegisterComponent implements OnInit {
     user:user = new user();
     matchmaker: matchmaker = new matchmaker();
  // matchmaker:matchmaker;
   
  constructor(public router:Router) { }

  ngOnInit(): void {
  }

}
