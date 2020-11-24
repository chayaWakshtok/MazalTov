import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';
import { Worker } from 'src/app/classes/worker';

@Component({
  selector: 'app-add-worker',
  templateUrl: './add-worker.component.html',
  styleUrls: ['./add-worker.component.scss']
})
export class AddWorkerComponent implements OnInit {

  worker: Worker = new Worker();

  constructor(public router: Router, public userService: UserService,) { }

  ngOnInit(): void {
  }

  gender(a: number) {
    this.worker.gender = a;
  }

  registerWorker() { }
  // registerMatchmaker():void{

  //   this.userService.registerWorker(this.worke).subscribe(res => {
  //     if (res == null)
  //         alert("error");    
  //      else {
  //         //  this.router.navigate(['app-muamad-register']);
  //       }
  //   }, err => {
  //     alert("error")
  //   }
  //   )
  // }
}
