import { time, timeLog } from 'console';
import { TimeInterval } from 'rxjs';

export class meeting{

     id:number;  
   dateMeeting:Date;  
      createDate:Date; 
     updateDate:Date; 
     place:string; 
     //לבדוק שזה סוג נכון 
     duringTime:TimeRanges;
    numMeeting:number; 
     remark:string; 
      matchingId:number;
}