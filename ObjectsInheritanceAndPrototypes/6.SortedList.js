function solve() {
   let array = [];
    let resultObj = {
        add: function (element) {
            array.push(element);
            this.sort();
            this.size++;
        },
        remove: function (index) {
            if (!(index >= array.length) && index >= 0) {
                array.splice(index, 1);
                this.size--;
                this.sort();
            }
        },
        get: function (index) {
            if (!(index >= array.length)) {
                return array[index];
            }
        },
        sort() {
            array = array.sort((a, b) => a - b);
        },
        size: function(){
            return array.length;
        }
        
    }
   
    return resultObj;
}
