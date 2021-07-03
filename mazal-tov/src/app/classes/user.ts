import { Role } from './role';

export class User {
    _id: string;
    firstname: string;
    lastname: string;
    username: string;
    password: string;
    email: string;
    tz: string;
    role: any;
    accessToken: string;
    bornDate: Date;
    gender: number;
    status: number;
    createdAt: Date;
    updatedAt: Date
}