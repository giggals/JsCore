function solve(number){

    let array = [];
    let sum = 0;
    
    while (number) 
    {
        array.push(number % 10);
        number = Math.floor(number/10);
    }

    

    let firstDigit = array.toString()[0];
    let sameNumbers = true;
    for (let i = 0; i < array.length;i++)
    {   
        sum+= array[i];
        if(firstDigit.toString() != array[i].toString()){sameNumbers = false};
    }


    let result = sameNumbers + "\n" + sum;
    
    return result;

}

console.log(solve(1234));