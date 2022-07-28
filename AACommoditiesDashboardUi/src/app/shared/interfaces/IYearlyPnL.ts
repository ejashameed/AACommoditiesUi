import { ICumulativePnL } from "./ICumulativePnL";

export interface IYearlyPnL {
    commodity: string;
    model: string;    
    year:number;
    cumulativeSum: number;          
}