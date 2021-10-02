import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/shared/auth/token-storage.service';
import { User } from 'src/app/classes/user';
import { MatchmakerService } from 'src/app/shared/services/matchmaker.service';
import { Router } from '@angular/router';
import { Matchmaker } from 'src/app/classes/matchmaker';
var hebrewDate = require("hebrew-date");

@Component({
  selector: 'app-matchmarker-home',
  templateUrl: './matchmarker-home.component.html',
  styleUrls: ['./matchmarker-home.component.scss']
})
export class MatchmarkerHomeComponent implements OnInit {

  date: Date = new Date();
  user: User = new User();
  hebrew: any;
  countClose: number = 0;
  countTryMatch: number = 0;
  matchmaker:Matchmaker=new Matchmaker();

  constructor(public storageService: TokenStorageService,
    public matchmakerService: MatchmakerService,
    public router: Router) { }

  ngOnInit(): void {
    this.user = this.storageService.getUser();
    this.matchmakerService.getTodayHebrow().subscribe(res => {
      this.hebrew = res;
    })

    this.matchmakerService.findMatchmaker().subscribe(res=>{
      this.matchmaker=res;
    })

    this.matchmakerService.getCloseCount().subscribe((res:any)=>{
      this.countClose=res.count;
    })

    this.matchmakerService.getTryMatchCount().subscribe((res:any)=>{
      this.countTryMatch=res.count;
    })

  }

  routePage(page) {
    this.router.navigate([page]);
  }

}
