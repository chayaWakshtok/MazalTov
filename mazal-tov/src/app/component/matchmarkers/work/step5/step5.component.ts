import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step5',
  templateUrl: './step5.component.html',
  styleUrls: ['./step5.component.scss']
})
export class Step5Component implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  back() {
    this.router.navigate(["matchmaker/main"]);
  }

  next() {
    this.router.navigate(["matchmaker/step6"]);
  }

}
