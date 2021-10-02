import { User } from './user';
import { Worker } from './worker';


export class Matchmaker {
      _id: string;
      address: string;
      medicalProblem: string;
      chasidut: string;
      numMatching: number;
      childrenMatchmaking: number;
      howSend: number;
      isCommitment: boolean;
      isAgreement: boolean;
      city: string;
      sector: string;
      user: User = new User();
      tell: string;
      phone: string;
      fax: string;
      experiance:number;
      confidentComment:string;
      workerRemark:string;
      point:number;

}
