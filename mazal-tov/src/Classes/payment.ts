import { DecimalPipe } from '@angular/common';
import { decimalDigest } from '@angular/compiler/src/i18n/digest';

export class payment {

    Id: number;
    CreateDate: Date;
    FromMonth: number;
    FromYear: number;
    Sum: DecimalPipe;
    Bonus: DecimalPipe;
    TotalPrice: DecimalPipe;
    Status: number;
    WorkerId: number;
}