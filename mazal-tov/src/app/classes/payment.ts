import { DecimalPipe } from '@angular/common';
import { decimalDigest } from '@angular/compiler/src/i18n/digest';

export class Payment {

    id: number;
    createDate: Date;
    fromMonth: number;
    fromYear: number;
    sum: DecimalPipe;
    bonus: DecimalPipe;
    totalPrice: DecimalPipe;
    status: number;
    workerId: number;
}