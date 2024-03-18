class Aircraft {
    constructor(name, passengers, speed, motor, cost) {
        this.name = name;
        this.passengers = passengers;
        this.speed = speed;
        this.motor = motor;
        this.cost = cost;
    }
}

class Kukuruznik extends Aircraft {
    constructor() {
        super("Кукурузник", 1, 180, "diesel", 5);
    }
}

class Mig29 extends Aircraft {
    constructor() {
        super("Миг-29", 1, 1500, "diesel", 30000);
    }
}

class AirbusA380 extends Aircraft {
    constructor() {
        super("Airbus A380", 555, 1090, "diesel", 150);
    }
}

class Tu134 extends Aircraft {
    constructor() {
        super("Ту-134", 76, 850, "diesel", 35);
    }
}

module.exports = {
    Kukuruznik,
    Mig29,
    AirbusA380,
    Tu134
};
