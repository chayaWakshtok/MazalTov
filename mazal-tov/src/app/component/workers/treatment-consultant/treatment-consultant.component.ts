import { Component, OnInit } from '@angular/core';
import { Helper } from 'src/app/classes/helper';
import { HelperService } from 'src/app/shared/services/helper.service';

@Component({
  selector: 'app-treatment-consultant',
  templateUrl: './treatment-consultant.component.html',
  styleUrls: ['./treatment-consultant.component.scss']
})
export class TreatmentConsultantComponent implements OnInit {
helper:Helper;
  constructor(private helperService:HelperService) { }
  
  ngOnInit(): void {
      this.helper = JSON.parse(localStorage.getItem("auth-user"));
  }
  getAll(){
  // this.helperService.getAllMatchingHelper( )
  }
}
