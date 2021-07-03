import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoleEnum } from 'src/app/classes/role';
import { User } from 'src/app/classes/user';
import { TokenStorageService } from '../../auth/token-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  user: User = new User();

  constructor(public router: Router,
    public authService: TokenStorageService) { }

  ngOnInit(): void {
    this.user = this.authService.getUser();
    if (this.user) {
      if (this.user.role == RoleEnum.Admin)
        this.router.navigate(["admin"]);
      else if (this.user.role == RoleEnum.MatchMarker)
        this.router.navigate(["matchmaker"]);
      else if (this.user.role == RoleEnum.Worker)
        this.router.navigate(["worker"]);
      else if (this.user.role == RoleEnum.User)
        this.router.navigate(["user"]);
      else if (this.user.role == RoleEnum.Secretary)
        this.router.navigate(["secretary"]);
    }
  }
}
