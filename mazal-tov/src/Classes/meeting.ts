import { time, timeLog } from 'console';
import { TimeInterval } from 'rxjs';

export class meeting{

     Id:number;  
   DateMeeting:Date;  
      CreateDate:Date; 
     UpdateDate:Date; 
     Place:string; 
     //לבדוק שזה סוג נכון 
     DuringTime:TimeRanges;
    NumMeeting:number; 
     Remark:string; 
      MatchingId:number;
}