function calculateMoney(day, service, time) {

    let result = 0;

    switch (day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            switch (service) {
                case "Fitness":
                    if (time >= 8.00 && time <= 15.00) {
                        result = (5);
                        return result;
                    }
                    else if (time >= 15.01 && time <= 22.00) {
                        result = (7.50);
                        return result;
                    }
                    break;
                case "Sauna":
                    if (time >= 8.00 && time <= 15.00) {
                        result = (4);
                        return result;
                    }
                    else if (time >= 15.01 && time <= 22.00) {
                        result = (6.50);
                        return result;
                    }
                case "Instructor":
                    if (time >= 8.00 && time <= 15.00) {
                        result = (10);
                        return result;
                    }
                    else if (time >= 15.01 && time <= 22.00) {
                        result = (12.50);
                        return result;
                    }
                default:
                    break;
            }
        case "Saturday":
        case "Sunday":
            switch (service) {
                case "Fitness":
                    result = (8);
                    return result;
                case "Sauna":
                    result = (7);
                    return result;
                case "Instructor":
                    result = (15);
                    return result;
                default:
                    break;
            }

        default:
            break;
    }
}


console.log(calculateMoney('Thursday', 'Sauna', 12.00));