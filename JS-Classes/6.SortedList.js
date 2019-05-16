class SortedList {
    constructor() {
        this.array = [];
        this.size = 0;
    }

    add(element) {
        this.array.push(element);
        this.size++;
        this.sort();
    }

    remove(index) {
        if (!(index >= this.array.length) && index >= 0) {
            this.array.splice(index, 1);
            this.sort();
            this.size--;
        }
    }

    get(index) {
        if (!(index >= this.array.length)) {
            return this.array[index];
        }

    }

    sort(){
        this.array = this.array.sort((a, b) => a - b);
    }

}

// let srt = new SortedList();
// srt.add(1);
// srt.add(2);
// srt.add(3);
// srt.remove(0);

// console.log(srt.size);