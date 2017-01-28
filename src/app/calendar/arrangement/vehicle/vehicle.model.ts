export class Vehicle {
    driverName: string;
    constructor(
        public names: string[],
        public seats: number = 5) {
        this.driverName = "Alonso";
    }

    public availableSeats(): number {
        let s = this.seats - 1 - this.names.length; //the driver takes one seat
        if (s < 0)
            s = 0;

        return s;
    }

    public isFull(): boolean {
        return this.availableSeats() <= 0;
    }

    public availableSeatsArray(): boolean[] {
        let v =[];
        for (let i = 0; i < this.availableSeats(); i++)
            v.push(true);

        return v;
    }

    public static getRandom(): Vehicle {
        let _names: string[] = [];
        if (Math.random() < 0.2)
            _names.push("pippo");

        if (Math.random() < 0.2)
            _names.push("pluto");

        if (Math.random() < 0.2)
            _names.push("topolino");

        if (Math.random() < 0.2)
            _names.push("michele");

        if (Math.random() < 0.2)
            _names.push("antonio");

        if (Math.random() < 0.2)
            _names.push("gianni");

        if (Math.random() < 0.2)
            _names.push("ruoppo");

        if (Math.random() < 0.2)
            _names.push("giancarlo");

        if (Math.random() < 0.2)
            _names.push("geppo");

        if (Math.random() < 0.2)
            _names.push("anacleto");

        if (Math.random() < 0.2)
            _names.push("paperone");

        return new Vehicle(_names);
    }
}