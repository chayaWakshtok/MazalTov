import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { User } from 'src/app/classes/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-classification',
  templateUrl: './classification.component.html',
  styleUrls: ['./classification.component.scss']
})
export class ClassificationComponent implements OnInit {

  users: User[] = [];

  constructor(public userService: UserService,
    public router:Router) { }

  ngOnInit(): void {
    this.userService.getAll().subscribe(res => {
      this.users = res;
      this.users.forEach(u => {
        u.createdAt = new Date(u.createdAt);
      })
    })
  }

  okStatus(item) {
    var u = { ...item };
    u.status = 2;
    this.userService.updateStatus(u).subscribe(res => {
      item.status = 2;
    })
  }

  createNew(path:string)
  {
    this.router.navigate([path]);
  }

}
