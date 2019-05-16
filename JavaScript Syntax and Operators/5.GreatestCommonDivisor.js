function commonDivisor(firstNumber , secondNumber){
    let lowerNumber = firstNumber > secondNumber ? firstNumber : secondNumber;
    let divisor = lowerNumber;
    while(true)
    {
        if(firstNumber % divisor === 0 && secondNumber % divisor  === 0)
        {
            return divisor;
        }

        divisor--;
    }
}

console.log(commonDivisor(15, 5));  