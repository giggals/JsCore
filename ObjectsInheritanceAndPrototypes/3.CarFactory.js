function solve(inputObj) {
    let resultObj = {
        'model': inputObj.model,
    };

    let volume = 0;
    let power = 0;

    if (inputObj.power <= 90) {
        power = 90;
        volume = 1800;
    }
    else if (inputObj.power > 90 && inputObj.power <= 120) {
        power = 120;
        volume = 2400;
    }
    else if (inputObj.power > 120) {
        power = 200;
        volume = 3500;
    }

    function createCar(volume , power) {
        resultObj.engine = {
            'power': power,
            'volume': volume,
        };
        resultObj.carriage = {
            'type': inputObj.carriage,
            'color': inputObj.color
        }
        let wheelsArray = [];
        let numberToPush = +inputObj.wheelsize;
        if (numberToPush % 2 == 0) {
            numberToPush--;
        }
        for (let i = 0; i < 4; i++) {
            wheelsArray.push(numberToPush);
        }
        resultObj.wheels = wheelsArray;
    }

    createCar(volume, power);

    return resultObj;
}

// console.log(solve({
//     model: 'Opel Vectra',
//     power: 110,
//     color: 'grey',
//     carriage: 'coupe',
//     wheelsize: 17
// }
// )
// )