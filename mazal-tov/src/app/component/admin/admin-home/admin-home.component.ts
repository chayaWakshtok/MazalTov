import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {

  date: Date = new Date();

  constructor(public rouetr: Router) { }

  ngOnInit(): void {
  }

  routePage(page) {
    this.rouetr.navigate([page]);
  }

}
