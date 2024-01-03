import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { User } from 'src/app/classes/user';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/shared/auth/token-storage.service';
import { RoleEnum } from 'src/app/classes/role';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ShowUserComponent } from './show-user/show-user.component';

@Component({
  selector: 'app-classification',
  templateUrl: './classification.component.html',
  styleUrls: ['./classification.component.scss']
})
export class ClassificationComponent implements OnInit {

  users: User[] = [];
  currentUser: User = new User();
  isAdmin: boolean = false;

  constructor(public userService: UserService,
    public router: Router,
    private authenticationService: TokenStorageService,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    this.userService.getAll().subscribe(res => {
      this.users = res;
      this.users.forEach(u => {
        u.createdAt = new Date(u.createdAt);
      })
    })
    this.currentUser = this.authenticationService.getUser();
    if (this.currentUser.role == RoleEnum.Admin)
      this.isAdmin = true;
  }

  okStatus(item, status) {
    var u = { ...item };
    u.status = status;
    this.userService.updateStatus(u).subscribe(res => {
      item.status = status;
    })
  }

  createNew(path: string) {
    this.router.navigate([path]);
  }

  showUser(item: User) {
    const modalRef = this.modalService.open(ShowUserComponent,
      {
        size: 'xl'
      });
    modalRef.componentInstance.user = item;
  }

}
