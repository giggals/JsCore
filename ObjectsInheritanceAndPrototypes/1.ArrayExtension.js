(function solve() {
    let myArr = [1 , 2, 3];
    Array.prototype.last = function last () {
        return this[this.length - 1];
    }

    Array.prototype.skip = function skip (n) {
        return this.slice(n);
    }

    Array.prototype.take = function take (n) {
        let result = [];
        for (let i = 0; i < n; i++) {
            result.push(this[i]);
        }

        return result;
    }

    Array.prototype.sum = function sum () {
        let totalSum = 0;
        for (const el of this) {
            totalSum += el;
        }

        return totalSum;
    }

    Array.prototype.average = function average () {
        let totalSum = 0;
        for (const el of this) {
            totalSum += el;
        };

        let average = totalSum / this.length;

        return average;

    }

    

})()
