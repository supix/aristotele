import { DayOfWeek, isWorkingDay } from '../utils/day-of-week.enum';

export class Driver {
    constructor(
        public name?: string,
        public studentName?: string,
        public defaultExitTime?: Date,
        public defaultDaysOfAvailability?: DayOfWeek[]) {
            this.defaultDaysOfAvailability = [];
            for (let i = DayOfWeek.MONDAY; i <= DayOfWeek.SUNDAY; i++)
                if (isWorkingDay(i))
                    this.defaultDaysOfAvailability.push(i);
        }
}
