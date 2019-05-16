function calculate(fruit , weight , pricePerKilo){

    let kg = (weight / 1000);
    let fruitPrice = (kg * pricePerKilo);

    let result = "I need " + fruitPrice.toFixed(2) + " leva to buy " + kg.toFixed(2) + " kilograms " + fruit + ".";

    return result;
}

console.log(calculate('orange', 2500, 1.80));