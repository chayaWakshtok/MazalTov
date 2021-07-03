import { Married } from './married';
import { User } from './user';
import { CandidateFamily } from './candidateFamily';
import { InfoCandidate } from './infoCandidate';

export class Candidate {
  _id: string;
  isPayFood: boolean;
  address: string;
  medicalProblem: number;
  medicalProblemRemark: string;
  entryByUser: string;
  nameFather: string;
  nameMother: string;
  familyMother: string;
  numChildren: number;
  numMarried: number;
  numMatching: number;
  fatherWork: string;
  motherWork: string;
  candidateWork: string;
  lastPlaceLearn: number;
  show: string;
  clothes: number;
  tell: string;
  phone: string;
  fax: string;
  email: string;
  remark: string;
  userId: number;
  city: string;
  isOk: number;
  createDate: Date;
  uUpdateDate: Date;
  sumPay: number;
  matchmarkerId: number;
  sector: string
  chasidut: string
  chasidutMother: number
  chasidutFather: number;
  user: User = new User();
  isPay: boolean = false;
  heigth: number;
  whoMoneyGive: number;
  whoMoneyAnother: number;
  keepOn: string;
  tellFather: string;
  tellMother: string;
  reasonCubeA: string;
  reasonCube: number;
  isCube: boolean;
  marrieds: Married[] = [];
  candidateFamilies: CandidateFamily[] = [];
  infoCandidates: InfoCandidate[] = [new InfoCandidate()];
  remarkSecure: string;
  status:number;
  treatedByUser:any;
  step:number=0;
}