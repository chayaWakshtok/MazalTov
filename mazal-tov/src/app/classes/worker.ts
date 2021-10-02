import { DecimalPipe } from '@angular/common';
import { User } from './user';

export class Worker {
  _id: string;
  address: string;
  chasidut: string;
  isAgreement: boolean;
  city: string;
  sector: string;
  user: User = new User();
  tell: string;
  phone: string;
  fax: string;
  experiance: number;
  confidentComment: string;
  categoryWork:string;
  workerRemark: string;
  hourPrice: number;
  monthPrice: number;
  numHourWork: number;
  fillForm: boolean = false;

}
