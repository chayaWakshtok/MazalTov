import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-secretary-home',
  templateUrl: './secretary-home.component.html',
  styleUrls: ['./secretary-home.component.scss']
})
export class SecretaryHomeComponent implements OnInit {

  date: Date = new Date();
  data1:number[]=[0,0,0,0];
  data2:number[]=[0,0,0,0,0,0,0,0];
  data3:number[]=[0,0,0];


  constructor(public rouetr: Router,
    public userService: UserService) { }

  ngOnInit(): void {
    this.userService.getDataAdminHome1().subscribe(res => {
      this.data1=res.data;
    })
    this.userService.getDataAdminHome2().subscribe(res => {
      this.data2=res.data;
    })
    this.userService.getDataAdminHome3().subscribe(res => {
      this.data3=res.data;
    })
  }

  routePage(page) {
    this.rouetr.navigate([page]);
  }

}
