function solve(array){
    let resultArray = '';

    for (let i = 0; i < array.length; i+=2) {
        let productName = array[i];
        let calories = [array[i + 1]]
        if(array.length - i <= 2)
        {
            resultArray += `${productName}: ${calories} `;
        }
        else
        {
            resultArray += `${productName}: ${calories}, `;
        }
      
    }

    return `{ ${resultArray}}` ;
}

console.log(solve(['Potato', 93, 'Skyr', 63, 'Cucumber', 18, 'Milk', 42]));