import { Component, Input, OnInit } from '@angular/core';
import { City } from 'src/app/classes/city';
import { Married } from 'src/app/classes/married';
import { CityService } from 'src/app/shared/services/city.service';

@Component({
  selector: 'app-law',
  templateUrl: './law.component.html',
  styleUrls: ['./law.component.scss']
})
export class LawComponent implements OnInit {

  @Input() index: number;
  @Input() married: Married = new Married();
  cities: City[] = [];

  constructor(public cityService: CityService) { }

  ngOnInit(): void {
    this.cityService.getCity().subscribe(res => {
      this.cities = res;
    })
  }

}
