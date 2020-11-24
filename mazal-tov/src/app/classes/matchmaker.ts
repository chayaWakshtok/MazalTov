import { User } from './user';
import { Worker } from './worker';


export class Matchmaker {
      id: number;
      address: string;
      medicalProblem: string;
      chasidutId: number;
      numMatching: number;
      childrenMatchmaking: number;
      howSend: number;
      isCommitment: boolean;
      isAgreement: boolean;
      status: number;
      cityId: number;
      sectorId: number;
      workerId: number;
      user: User = new User();
      worker: Worker = new Worker();
}