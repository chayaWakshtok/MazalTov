import { DecimalPipe } from '@angular/common';
import { User } from './user';

export class Worker {
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
    numHourWork: number;
    userId: number;
    bankId: number;
    user: User = new User();

}