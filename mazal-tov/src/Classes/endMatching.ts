import { DecimalPipe } from '@angular/common';
export class endMatching{
     Id:number ;
     EndDate:Date ;
   UpdateDate:Date ;
  IsPaid:boolean ;
   WhoPaid :number;
   //לברר אם זה סוג טוב:
   Price:DecimalPipe; 
 Remark :string;
   IsCare:boolean ;
   EndPlace:string ;
 MatchingId:number ;
   

}