import { DecimalPipe } from '@angular/common';

export class worker {
    id: number;
    experiance: number;
    bornDate: Date;
    tell: string;
    phone: string;
    fax: string;
    email: string;
    remark: string;
    gender: number;
    createDate: Date;
    updateDate: Date;
    confidentComment: string;
    hourPrice: DecimalPipe;
    monthPrice: DecimalPipe;
    //לברר אם זה סוג טוב
    numHourWork: Float32Array;
    userId: number;
    bankId: number;

}