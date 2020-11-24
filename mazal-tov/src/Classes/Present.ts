import { DecimalPipe } from '@angular/common';

export class Present {

  id: number;
  enterDate: Date;
  exitDate: Date;
  remark: string;
  numHours: DecimalPipe;
  subject: string;
  workerId: number;
}