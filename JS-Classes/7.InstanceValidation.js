class CheckingAccount {
    constructor(clientId, email, firstName, lastname) {
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastname = lastname;
        this.products = [];
    }

    // get lastName() {
    //     return this.lastName;
    // }

    set lastname(lastname) {
        if (lastname.length < 3 || lastname > 20) {
            throw new TypeError('Last name must be between 3 and 20 characters long');
        }
        let splitToArray = lastname.split('');
        for (const characher of splitToArray) {
            if (!(/[a-zA-Z]+/.test(characher))) {
                throw new TypeError("Last name must contain only Latin characters");
            }
        }

        return this.lastname;
       
    }

    // get firstName() {
    //     return this.firstName;
    // }

    set firstName(firstName) {
        if (firstName.length < 3 || firstName > 20) {
            throw new TypeError('First name must be between 3 and 20 characters long');
        }
        let splitToArray = firstName.split('');
        for (const characher of splitToArray) {
            if (!(/[a-zA-Z]+/.test(characher))) {
                throw new TypeError("First name must contain only Latin characters");
            }
        }

        return this.firstName;
    }


    // get email() {
    //     return this.email;
    // }

    set email(email) {
        if (!/^[a-zA-Z0-9]+\@[a-zA-Z0-9\.]+$/.test(email)) {
            throw new TypeError('Invalid e-mail');
        }

        return this.email;
    }

    // get clientId() {
    //     return this.clientId;
    // }

    set clientId(clientId) {
        if (!(clientId.length == 6 && Number.isInteger(+clientId))) {
            throw new TypeError('Client ID must be a 6-digit number');
        }

        return this.clientId;
    }


}
let acc = new CheckingAccount('131455', 'ivan@some.com', 'I', 'Petrov')
