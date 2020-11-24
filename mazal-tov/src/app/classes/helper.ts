import {Worker} from "./worker"
export class Helper {
     id: number;
     address: string;
     type: number;
     workerId: number;
     cityId: number;
     sectorId: number;
     worker: Worker = new Worker();
}