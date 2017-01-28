export class Vehicle {
    driverName: string;
    constructor(public names: string[]) {
        this.driverName = "Alonso";
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