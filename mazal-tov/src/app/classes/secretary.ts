import { DecimalPipe } from '@angular/common';
import { User } from './user';

export class Secretary {
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
  workerRemark: string;
  hourPrice: DecimalPipe;
  monthPrice: DecimalPipe;
  numHourWork: number;
  fillForm: boolean = false;

}
