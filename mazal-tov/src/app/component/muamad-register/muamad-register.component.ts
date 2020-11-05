import { Component, OnInit } from '@angular/core';
import { candidate } from 'src/Classes/candidate';

@Component({
  selector: 'app-muamad-register',
  templateUrl: './muamad-register.component.html',
  styleUrls: ['./muamad-register.component.scss']
})
export class MuamadRegisterComponent implements OnInit {
  model: candidate = new candidate();
  matchmaker:candidate;
  constructor() { }

  ngOnInit(): void {
  }

}
