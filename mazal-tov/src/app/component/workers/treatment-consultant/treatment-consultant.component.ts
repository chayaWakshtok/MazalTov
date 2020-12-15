import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/shared/services/helper.service';

@Component({
  selector: 'app-treatment-consultant',
  templateUrl: './treatment-consultant.component.html',
  styleUrls: ['./treatment-consultant.component.scss']
})
export class TreatmentConsultantComponent implements OnInit {

  constructor(private helperService:HelperService) { }

  ngOnInit(): void {
  }
  getAll(){
// this.helperService.getAllMatchingHelper()
  }
}
