import { Time } from '@angular/common';

export interface SessionList{
    id:number;
    username : string;
    day: Date;
    time: Time;
    location : string;
    totalPaid: number;
    duration: number;

}