function solve(array) {

    let price = 0;
    let totalIncome = 0;


    for (let i = 0; i < array.length; i++) {
        let splitArray = array[i].split(', ');
        let coin = splitArray[0];
        let drinkType = splitArray[1];

        if (drinkType === "coffee") {
            let coffeeType = splitArray[2];
            if (coffeeType === "caffeine") {
                price = 0.80;
            }
            else { price = 0.90; }
            if (splitArray[3] === "milk") {
                let milkPrice = (price * 0.1).toFixed(1);
                price += +milkPrice;
                let sugar = splitArray[4];
                if (sugar > 0 && sugar <= 5)
                {
                    price += 0.10;
                }
            }
                let sugar = splitArray[3];
                if (sugar > 0 && sugar <= 5)
                {
                    price += 0.10;
                }
        }
        else {
            price = 0.80;
            if (splitArray[2] === "milk") {
                let milkPrice = (price * 0.1).toFixed(1);
                price += +milkPrice;
                let sugar = splitArray[3];
                if (sugar > 0 && sugar <= 5) {
                    price += 0.10;
                }
            }
            let sugar = splitArray[2];
            if (sugar > 0 && sugar <= 5) {
                price += 0.10;
            }

        }


      

        let change = Math.abs(coin - price);
        if (coin >= price) {
            let result = `You ordered ${drinkType}. Price: ${price.toFixed(2)}\$ Change: ${change.toFixed(2)}\$`;
            console.log(result);
            totalIncome += price;
        }
        else { console.log(`Not enough money for ${drinkType}. Need ${change.toFixed(2)}$ more.`) }
    }

    console.log(`Income Report: ${totalIncome.toFixed(2)}\$`);

}

solve(['1.00, coffee, caffeine, milk, 4', '0.40, tea, milk, 2',
'1.00, coffee, decaf, 0'
]

);
