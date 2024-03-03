const adapter = require('./adapter');
const model = require('./model');
const location = require('./location');
const { coastData, reduceCostByHalf } = require('./coast');

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let locationInfo = {};

function getLocationDistance(answer) {
    switch (answer.toUpperCase()) {
        case 'A':
            locationInfo.distance = location.WARSAW_DISTANCE;
            locationInfo.coefficient = coastData.WARSAW_COEFFICIENT;
            askPassengerCount();
            break;
        case 'B':
            locationInfo.distance = location.LONDON_DISTANCE;
            locationInfo.coefficient = coastData.LONDON_COEFFICIENT;
            askPassengerCount();
            break;
        case 'C':
            locationInfo.distance = location.NEW_YORK_DISTANCE;
            locationInfo.coefficient = coastData.NEW_YORK_COEFFICIENT;
            askPassengerCount();
            break;
        default:
            console.log('error');
            rl.close();
    }
}

function askPassengerCount() {
    rl.question('какое количество пассажиров? ', (answer) => {
        const passengers = parseInt(answer);
        if (!isNaN(passengers)) {
            const selectedAircrafts = getSuitableAircraft(passengers);
            if (selectedAircrafts.length > 0) {
                askUserToChoose(selectedAircrafts);
            } else {
                console.log('error');
                rl.close();
            }
        } else {
            console.log('error');
            askPassengerCount();
        }
    });
}

function askUserToChoose(suitableAircrafts) {
    console.log('выберите самолет: ');
    suitableAircrafts.forEach((aircraft, index) => {
        console.log(`${index + 1}. ${aircraft.name}`);
    });

    rl.question('модели: ', (answer) => {
        const userChoice = parseInt(answer);
        if (userChoice >= 1 && userChoice <= suitableAircrafts.length) {
            const selectedAircraft = suitableAircrafts[userChoice - 1];
            locationInfo.cost = selectedAircraft.cost * locationInfo.coefficient;
            let flightTime = locationInfo.distance / selectedAircraft.speed;

            console.log(`самолет ${selectedAircraft.name}, стоимость: ${locationInfo.cost}, время полета: ${flightTime.toFixed(2)} ч.`);

            rl.question('Хотите мы установим вам супер двигатель это будет стоить 1 000 000? (1 - да, 2 - нет): ', (answer) => {
                if (answer === '1') {
                    const superMotor = new adapter.TurboMotorAdapter(new adapter.TurboMotor());
                    locationInfo.cost += 1000000;
                    console.log(`Супер двигатель установлен! стоимость увеличена: ${locationInfo.cost}`);
                }

                rl.question('Есть ли у вас скидочный талон? (1 - да, 2 - нет): ', (discountAnswer) =>{
                    if (discountAnswer === '1') {
                        locationInfo.cost = reduceCostByHalf(locationInfo.cost);
                        console.log(`цена : ${locationInfo.cost}`);
                    }

                    console.log(`время полета: ${flightTime.toFixed(2)} ч.`);
                    rl.close();
                });
            });
        } else {
            console.log('error');
            askUserToChoose(suitableAircrafts);
        }
    });
}

function getSuitableAircraft(passengers) {
    const aircrafts = [
        new model.Kukuruznik(),
        new model.Mig29(),
        new model.AirbusA380(),
        new model.Tu134()
    ];
    return aircrafts.filter(aircraft => passengers <= aircraft.passengers);
}

rl.question('День добрый ! куда вы летите а) Варшава b) Лондон c) Нью-Йорк (A, B или C): ', getLocationDistance);
