import { User } from './user';

export class Halacha {
    _id: string;
    createdAt: Date;
    updatedAt: Date;
    entryByUser: any;
    subject: string;
    type: number;
    content: string;
    status: number;
}