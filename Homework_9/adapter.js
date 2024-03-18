// adapter.js
class SimpleMotor {
    simpleMotorInterface() {
        console.log(`Simple Motor`);
    }
}

class TurboMotor {
    turboMotorInterface() {
        console.log(`Turbo Motor`);
    }
}

class TurboMotorAdapter {
    constructor(motor) {
        this.motor = motor;
    }

    simpleMotorInterface() {
        this.motor.turboMotorInterface();
    }
}

class Aircraft {
    constructor(name, passengers, speed, motor, cost) {
        this.name = name;
        this.passengers = passengers;
        this.speed = speed;
        this.motor = motor;
        this.cost = cost;
    }

    increaseSpeed() {
        this.speed *= 10;
    }
}

module.exports = {
    SimpleMotor,
    TurboMotor,
    TurboMotorAdapter,
    Aircraft
};
