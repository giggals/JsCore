function EvenNumbersToN(number){
    let result = "";
    for (let i = 2; i <= number;i+=2)
    {
      result = result + i + "\n";
    }

    return result;
}

console.log(EvenNumbersToN(5));