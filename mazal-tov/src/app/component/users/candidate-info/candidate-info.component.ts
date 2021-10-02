import { Component, OnInit, Input } from '@angular/core';
import { InfoCandidate } from 'src/app/classes/infoCandidate';

@Component({
  selector: 'app-candidate-info',
  templateUrl: './candidate-info.component.html',
  styleUrls: ['./candidate-info.component.scss']
})
export class CandidateInfoComponent implements OnInit {

  @Input() index:number=0;
  @Input() info: InfoCandidate = new InfoCandidate();
  constructor() { }

  ngOnInit(): void {
  }

}
