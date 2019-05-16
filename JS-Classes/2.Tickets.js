function solve(arrayInput, sortCriteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }

    }
    
    let sortArray = [];
    for (let i = 0; i < arrayInput.length; i++) {
        let fullTicketInfo = arrayInput[i];
        let tokens = fullTicketInfo.split('|');
        let destination = tokens[0];
        let price = Number(tokens[1]);
        let status = tokens[2];

        let ticket = new Ticket(destination, price, status);
        sortArray.push(ticket);
    }

    let sort = sortArray.splice(0);
    if (sortCriteria == 'destination') {
        sort = sort.sort(function (a, b) {
            if (a.destination < b.destination) { return -1; }
            if (a.destination > b.destination) { return 1; }
            return 0;
        });
    }
    else if (sortCriteria == 'price') {
        sort = sort.sort(function (a, b) {
            if (a.price < b.price) { return -1; }
            if (a.price > b.price) { return 1; }
            return 0;
        });
    }
    else if (sortCriteria == 'status') {
        sort = sort.sort(function (a, b) {
            if (a.status < b.status) { return -1; }
            if (a.status > b.status) { return 1; }
            return 0;
        });
    }

    return sort;

}

solve(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'status'
)



