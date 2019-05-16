
class Rat {
    constructor(name) {
        this.name = name;
        this.unitRats = [];
    }


    unite(otherRat) {
        if (!otherRat) {

        } else if (otherRat.constructor.name !== "Rat") {

        } else {
            this.unitedRats.push(otherRat);
        }
    }

    getRats() {
        return this.unitRats;
    }

    toString() {
        let result = '';
        result += this.name + '\n';
        result += Array.from(this.unitRats).forEach(r => {
            result = + '##' + rat.name.toString() + '\n';
        });
        return result.trim();
    }
}

