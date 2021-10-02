import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { RoleEnum } from 'src/app/classes/role';
import { User } from 'src/app/classes/user';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  errorMessage: string = "";

  constructor(public userService: UserService,
    private router: Router,
    public activeRouter: ActivatedRoute) { }

  ngOnInit(): void {
  }

  validlogin(): void {
    this.userService.getToken(this.user)
      .pipe(
        // switchMap(() => {
        //   return null;
        //   //return this.userService.getInfo();
        // })
      ).subscribe((res: User) => {
        var url = this.activeRouter.snapshot.queryParams["returnUrl"];
        if (url)
          this.router.navigate([url]);
        else {
          if (res.role == RoleEnum.Admin)
            this.router.navigate(["admin"]);
          else if (res.role == RoleEnum.MatchMarker)
            this.router.navigate(["matchmaker"]);
          else if (res.role == RoleEnum.Worker)
            this.router.navigate(["worker"]);
          else if (res.role == RoleEnum.User)
            this.router.navigate(["user"]);
          else if (res.role == RoleEnum.Secretary)
            this.router.navigate(["secretary"]);
          else if (res.role == RoleEnum.Rav)
            this.router.navigate(["rav"]);
        }
      }, err => {
        this.errorMessage = "שם משתמש או סיסמה שגוים"
      })
  }

  register() {
    this.router.navigate(["register"]);
  }
}
