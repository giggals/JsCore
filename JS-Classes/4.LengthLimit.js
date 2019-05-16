
class Stringer {
    constructor(stringInput, length) {
        this.innerString = stringInput;
        this.innerLength = length;
    }

    increase(length) {
        let result = this.innerLength + length;

        if (result < 0) {
            this.innerLength = 0;
        }
        else {
            this.innerLength += length;
        }

    }

    decrease(length) {
        let remove = this.innerLength - length;
        if (remove < 0) {
            remove = 0;
        }

        this.innerLength = remove;
    }

    toString() {
        return this.innerString.substr(0, this.innerLength) + '...';
    }
}

