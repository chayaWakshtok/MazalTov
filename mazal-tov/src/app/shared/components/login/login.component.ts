import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { UserService } from 'src/app/shared/services/user.service';
import { User } from 'src/Classes/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User = new User();

  constructor(public userService: UserService,
    private router: Router,
    public activeRouter: ActivatedRoute) { }

  ngOnInit(): void {
  }

  validlogin(): void {
    this.userService.getToken(this.user)
      .pipe(
        switchMap(() => {
          return this.userService.getInfo();
        })).subscribe((res: User) => {
          var url = this.activeRouter.snapshot.queryParams["returnUrl"];
          if (url)
            this.router.navigate([url]);
          else {
            if (res.roles.findIndex(p => p.name == "Admin") >= 0)
              this.router.navigate(["admin"]);
            else if (res.roles.findIndex(p => p.name == "MatchMarker") >= 0)
              this.router.navigate(["matchMarker"]);
            else if (res.roles.findIndex(p => p.name == "Worker") >= 0)
              this.router.navigate(["worker"]);
            else if (res.roles.findIndex(p => p.name == "User") >= 0)
              this.router.navigate(["user"]);
            else if (res.roles.findIndex(p => p.name == "Secretary") >= 0)
              this.router.navigate(["secretary"]);
          }
        })
  }
}
