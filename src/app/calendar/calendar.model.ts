export class Calendar {
    fromDate: Date;
    days: number;

    constructor() {
        this.fromDate = new Date((new Date()).setHours(0, 0, 0, 0));
        this.days = 10; //defaults to 10 days
    }

    public getVisibleDates(): Date[] {
        let date = [];

        for (let n = 0; n < this.days; n++) {
            let d = this.addDays(this.fromDate, n);
            date.push(d);
        }

        return date;
    }

    private addDays(d: Date, days: number): Date {
        var dat = new Date(d);
        dat.setDate(dat.getDate() + days);
        return dat;
    }
}