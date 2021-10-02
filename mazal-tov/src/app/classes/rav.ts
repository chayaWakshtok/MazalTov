import { DecimalPipe } from '@angular/common';
import { User } from './user';

export class Rav {
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
  categoryWork: string;
  workerRemark: string;
  seatPerson: boolean;
  questionAnswer: boolean;
  fillForm: boolean = false;


}
