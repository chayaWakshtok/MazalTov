import { Component, OnInit } from '@angular/core';
import { Halacha } from 'src/app/classes/halacha';
import { Router } from '@angular/router';
import { HalachaService } from 'src/app/shared/services/halacha.service';
import { TokenStorageService } from 'src/app/shared/auth/token-storage.service';
import { RoleEnum } from 'src/app/classes/role';
import { User } from 'src/app/classes/user';

@Component({
  selector: 'app-halachots',
  templateUrl: './halachots.component.html',
  styleUrls: ['./halachots.component.scss']
})
export class HalachotsComponent implements OnInit {

  halachotsList: Halacha[] = [];
  currentUser: User = new User();
  isAdmin: boolean = false;

  constructor(public router: Router,
    public halachaService: HalachaService,
    private authenticationService: TokenStorageService) { }

  ngOnInit(): void {
    this.getHalachot();
    this.currentUser = this.authenticationService.getUser();
    if (this.currentUser.role == RoleEnum.Admin)
      this.isAdmin = true;
  }

  getHalachot() {
    this.halachaService.getHalachots().subscribe(res => {
      this.halachotsList = res;
    })
  }

  okStatus(h: Halacha, status: number) {
    var u = { ...h };
    u.status = status;
    this.halachaService.updateStatus(u).subscribe(res => {
      this.getHalachot();
    })
  }

  addHalacha() {
    if (this.isAdmin)
      this.router.navigate(["admin/add-halacha"])
    else this.router.navigate(["secretary/add-halacha"]);
  }

}
