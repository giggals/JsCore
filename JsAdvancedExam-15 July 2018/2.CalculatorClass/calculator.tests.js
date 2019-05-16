const Calculator = require('./Calculator');
const assert = require('chai').assert;

describe('CalculatorTests', function () {

    beforeEach(function () {
        calculator = new Calculator();
    });

    it('shouldReturnEmptyArray', function () {
        let array = [];

        assert.deepEqual(array, calculator.expenses);
    });
    it('addShouldAddElementOfAnyType', function () {
        let array = [2];

        calculator.add(2);

        assert.deepEqual(calculator.expenses, array);
    });
    it('addShouldAddNegative', function () {
        let array = [-10];

        calculator.add(-10);

        assert.deepEqual(calculator.expenses, array);
    });
    it('shouldDivideNumber', function () {
        let number1 = 50;
        let number2 = 40;

        calculator.add(number1);
        calculator.add(number2);
        let result = calculator.divideNums();

        assert.equal(result, 1.25);

    });
    it('shouldNotDivideNumberWith0', function () {
        let number1 = 200;
        let number2 = 0;
        

        calculator.add(number1);
        calculator.add(number2);
        let result = calculator.divideNums();

        assert.equal(result, 'Cannot divide by zero');

    });
    it('shouldNotDivideNumber', function () {
        let number1 = 'ahfsdh';
        let number2 = 'sdfgsdf';

        calculator.add(number1);
        calculator.add(number2);
        
        // let expected =  new Error('There are no numbers in the array!');
        let expected = 'There are no numbers in the array!';

        assert.throw(function(){calculator.divideNums()} , expected); 

    });
    it('shouldReturnToStringWithArrows', function () {
        calculator.add(10);
        calculator.add(20);
        calculator.add(30);

        let result = calculator.toString();

        assert.equal(result, '10 -> 20 -> 30');
    });
    it('shouldReturnToStringWithArrows', function () {
       

        let result = calculator.toString();

        assert.equal(result, 'empty array');
    });
    it('shouldReturnToStringWithArrows', function () {
       
        let result = calculator.toString();

        assert.equal(result, 'empty array');
    });
    it('shouldReturnEmpty' , function(){
        let result = calculator.orderBy();

        assert.equal(result , 'empty');
    })
    it('shouldOrderTheNumbers' , function(){
        let firstNum = 1;
        let secondNum = 2;
        let thirdNum = 3;

        calculator.add(firstNum);
        calculator.add(secondNum);
        calculator.add(thirdNum);

        let result = calculator.orderBy();

        assert.equal(result , '1, 2, 3');
    })


});
