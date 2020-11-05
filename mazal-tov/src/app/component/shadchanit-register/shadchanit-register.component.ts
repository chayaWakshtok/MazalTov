import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { matchmaker } from 'src/Classes/matchmaker';
import { NgModule }      from '@angular/core';
@Component({
  selector: 'app-shadchanit-register',
  templateUrl: './shadchanit-register.component.html',
  styleUrls: ['./shadchanit-register.component.scss']
})
export class ShadchanitRegisterComponent implements OnInit {
  model: matchmaker = new matchmaker();
  matchmaker:matchmaker;
   
  constructor(public router:Router) { }

  ngOnInit(): void {
  }

}
