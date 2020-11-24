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
      if (this.user.roles.findIndex(p => p.name == RoleEnum.Admin) >= 0)
        this.router.navigate(["admin"]);
      else if (this.user.roles.findIndex(p => p.name == RoleEnum.MatchMarker) >= 0)
        this.router.navigate(["matchMarker"]);
      else if (this.user.roles.findIndex(p => p.name == RoleEnum.Worker) >= 0)
        this.router.navigate(["worker"]);
      else if (this.user.roles.findIndex(p => p.name == RoleEnum.User) >= 0)
        this.router.navigate(["user"]);
      else if (this.user.roles.findIndex(p => p.name == RoleEnum.Secretary) >= 0)
        this.router.navigate(["secretary"]);
    }

  }
}
