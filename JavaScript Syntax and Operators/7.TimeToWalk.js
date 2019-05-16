function calculateTime(steps, footprint, speed) {
    // let oneMinuteTime = ((speed * 1000) / 60) * 60;
    let distance = steps * footprint;
    let secondRest = 500 / 60;
    let restMinutes = (distance / secondRest) / 60;
    let restSeconds = restMinutes * 60;


    let time = (distance / oneMinuteTime) * 60;
    time += restSeconds;
    let minutes = time / 60;
    let hours = minutes / 60;

    return `00:${time}`;
}

console.log(calculateTime(4000, 0.60, 5));