(function solve() {
    let testString = 'h...';

    String.prototype.ensureStart = function (str) {
        if (!this.startsWith(str)) {
            let temp = this;
            temp = str + temp;

            return temp;
        }

        return this.toString();

    }

    String.prototype.ensureEnd = function (str) {
        if (!this.endsWith(str)) {
            let temp = this;
            temp = temp + str;

            return temp;
        }

        return this.toString();
    }

    String.prototype.isEmpty = function (){
        if(this.toString().length > 0){
            return false;
        }

        return true;
    }

    String.prototype.truncate = function (n) {
        let str = this.toString();
        if(str.length < n){
            return str;
        }
        else if(str.length > n){
            if(n < 4){
                let dots = '';
                for (let i = 0; i < n; i++) {
                   dots += '.';
                }

                return dots;
            }
            let split = str.split(' ');
            if(split.length == 1){
                let result = '';
                for (let i = 0; i < n - 3; i++) {
                    result += str[i];
                }

                return result + '...';
            }
            let result = '';
            while (str.length > n) {
                for (let i = 0; i < split.length - 1; i++) {
                    if(i != split.length - 2){
                        result += split[i] + ' ';
                    }
                    else{
                         result += split[i];
                    }
                   
                }

               str = result.replace(`${split[split.length - 1]}` , '') + '...';
                
            }
            
            return str;
        }
    }

    // console.log(testString.truncate(2));
    // console.log(testString.ensureEnd('asd'));
    // console.log(testString.isEmpty());
})()



