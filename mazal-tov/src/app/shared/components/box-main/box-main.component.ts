import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-box-main',
  templateUrl: './box-main.component.html',
  styleUrls: ['./box-main.component.scss']
})
export class BoxMainComponent implements OnInit {

  @Input() number: number;
  @Input() text: string;
  @Input() routeUrl: string;

  constructor() { }

  ngOnInit(): void {
  }

}
