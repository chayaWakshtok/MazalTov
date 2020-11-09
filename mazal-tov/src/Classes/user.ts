import { candidate } from './candidate';
import { matchmaker } from './matchmaker';

export class user {
    id: number;
    firstname: string;
    lastname: string;
    username: string;
    password: string;
    tz: string;

   candidate: candidate[] = [];
   matchmaker:matchmaker[]=[];
   

}