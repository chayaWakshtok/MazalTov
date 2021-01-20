import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  createNew(path:string)
  {
    this.router.navigate([path]);
  }

}
