import { DecimalPipe } from '@angular/common';

export class worker {
    Id: number;
    Experiance: number;
    BornDate: Date;
    Tell: string;
    Phone: string;
    Fax: string;
    Email: string;
    Remark: string;
    Gender: number;
    CreateDate: Date;
    UpdateDate: Date;
    ConfidentComment: string;
    HourPrice: DecimalPipe;
    MonthPrice: DecimalPipe;
    //לברר אם זה סוג טוב
    NumHourWork: Float32Array;
    UserId: number;
    BankId: number;

}