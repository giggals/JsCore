function solve(inputObj) {
    if (inputObj.handsShaking == false) {
        return inputObj;
    }

    let increaseAlcohol = inputObj.weight * 0.1 * inputObj.experience;
    inputObj.bloodAlcoholLevel += increaseAlcohol;
    inputObj.handsShaking = false;

    return inputObj;
}
