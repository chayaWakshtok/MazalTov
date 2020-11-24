import { Role } from './role';

export class User {
    id: number;
    firstname: string;
    lastname: string;
    username: string;
    password: string;
    tz: string;
    roles:Role[]=[];
}