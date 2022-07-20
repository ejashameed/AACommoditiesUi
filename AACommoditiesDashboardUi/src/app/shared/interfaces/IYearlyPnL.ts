import { ICumulativePnL } from "./ICumulativePnL";

export interface IYearlyPnL extends ICumulativePnL {
    year:number;    
}