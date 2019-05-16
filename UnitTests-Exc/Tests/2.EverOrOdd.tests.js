let isOddOrEven = require('../2.EvenOrOdd');
let assert = require('assert');

describe('ShouldRetrunEvenOrOdd', function(){
    it('ShouldReturnEven' , function(){
        let evenInput = 'asdf';

        let result = isOddOrEven(evenInput);

        assert.equal(result , 'even');
    });
    it('ShouldReturnOdd' , function(){
        let evenInput = 'asdff';

        let result = isOddOrEven(evenInput);

        assert.equal(result , 'odd');
    });
    it('ShouldReturnUndefined', function(){
        let evenInput = 13;

        let result = isOddOrEven(evenInput);

        assert.equal(result , undefined);
    })
})