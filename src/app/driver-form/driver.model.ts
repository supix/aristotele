import { DayOfWeek } from '../utils/day-of-week.enum';

export class Driver {
    constructor(
        public name: string,
        public studentName: string,
        public defaultExitTime: Date,
        public defaultDaysOfAvailability: DayOfWeek[]) {
        }
}
