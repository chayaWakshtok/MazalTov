import { Component, OnInit } from '@angular/core';
import { Halacha } from 'src/app/classes/halacha';
import { Router } from '@angular/router';
import { HalachaService } from 'src/app/shared/services/halacha.service';

@Component({
  selector: 'app-halachots',
  templateUrl: './halachots.component.html',
  styleUrls: ['./halachots.component.scss']
})
export class HalachotsComponent implements OnInit {

  halachotsList: Halacha[] = [];

  constructor(public router: Router,
    public halachaService: HalachaService) { }

  ngOnInit(): void {
    this.halachaService.getHalachots().subscribe(res => {
      this.halachotsList = res;
    })
  }

  okStatus(h) {

  }

  addHalacha() {
    this.router.navigate(["admin/add-halacha"])
  }

}
