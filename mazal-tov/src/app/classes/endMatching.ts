import { DecimalPipe } from '@angular/common';
export class EndMatching {
  id: number;
  endDate: Date;
  updateDate: Date;
  isPaid: boolean;
  whoPaid: number;
  //לברר אם זה סוג טוב:
  price: DecimalPipe;
  remark: string;
  isCare: boolean;
  endPlace: string;
  matchingId: number;


}