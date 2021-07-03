import { Component, OnInit, Input } from '@angular/core';
import { Candidate } from 'src/app/classes/candidate';

@Component({
  selector: 'app-can-card',
  templateUrl: './can-card.component.html',
  styleUrls: ['./can-card.component.scss']
})
export class CanCardComponent implements OnInit {

  @Input() candidate: Candidate = new Candidate();
  yearNow: number = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
  }

}
