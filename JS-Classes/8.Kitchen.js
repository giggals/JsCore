class Kitchen {
    constructor(budget) {
        this.budget = budget;
        this.menu = {};
        this.productsInStock = [];
        this.actionsHistory = [];
    }
    

    loadProducts(inputArray) {

        for (let i = 0; i < inputArray.length; i++) {
            let tokens = inputArray[i].split(' ');

            let productName = tokens[0];
            let productQuantity = tokens[1];
            let productPrice = tokens[2];

            let priceToPay = productPrice * productQuantity;

            let productObj = {
                productName,
                productQuantity,
            }

            var found = false;
            for (var j = 0; j < this.productsInStock.length; j++) {
                if (this.productsInStock[j].productName == productName) {
                    found = true;
                    break;
                }
            }

            if (priceToPay <= this.budget && found == true) {
                for (let k = 0; k < this.productsInStock.length; k++) {
                    if (this.productsInStock[k].hasOwnProperty(productName)) {
                        this.productsInStock[k].quantity += productQuantity;
                    }
                }
                this.budget -= priceToPay;
                // console.log(`Successfully loaded ${productQuantity} ${productName}`);
                this.actionsHistory.push(`Successfully loaded ${productQuantity} ${productName}`);

            }
            else if (priceToPay <= this.budget && found == false) {
                this.productsInStock.push(productObj);

                this.budget -= priceToPay;
                // console.log(`Successfully loaded ${productQuantity} ${productName}`);
                this.actionsHistory.push(`Successfully loaded ${productQuantity} ${productName}`);

            } else {
                this.actionsHistory.push(`There was not enough money to load ${productQuantity} ${productName}`);
            }
        }

        return this.actionsHistory.join('\n');

    }
}

let kitchen = new Kitchen(1000);
console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));
