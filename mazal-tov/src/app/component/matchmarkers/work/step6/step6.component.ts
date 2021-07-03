import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step6',
  templateUrl: './step6.component.html',
  styleUrls: ['./step6.component.scss']
})
export class Step6Component implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  back() {
    this.router.navigate(["matchmaker/main"]);
  }

  next() {
    this.router.navigate(["matchmaker"]);
  }

}
