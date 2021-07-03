import { Candidate } from './candidate';

export class CandidateStep {
    male: Candidate;
    female: Candidate;
    step: number;
    remark: string;
    _id: string;
    createdAt: Date;
    updatedAt: Date;
    treatedByUser: any;
    remarkSecure: string;
    remarkFemale: string;
    remarkmale: string;
    remarkSecureFemale: string;
    remarkSecuremale: string;
    precent: number = 0;
    reasonFail: String;
    checkeding: { dress: boolean, money: boolean, style: boolean, character: boolean, ambition: boolean } =
        { dress: false, money: false, style: false, character: false, ambition: false };
    meeting: { numMeeting: number, place: string, when: Date, longHour: number, remark: string }[] = [];
    questionRav: any[] = [];
    questionClever: any[] = [];
}


// checkeding: {
//     dress: Boolean,
//     money: Boolean,

// },
// questionRav:[
//     {}
// ],
// questionClever:[{

// }],


