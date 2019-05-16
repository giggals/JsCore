let mathEnforcer = require('../4.MathEnforcer');
let assert = require('assert');

describe('MathEnforcer' , function(){
    it('ShouldRetrunUndefinedIfNotNumber', function(){
        let input = 'asdf';

        let result = mathEnforcer.addFive(input);

        assert.equal(result , undefined);
    });

    it('ShouldRetrunNumberPlusFive', function(){
        let input = 10;

        let result = mathEnforcer.addFive(input);

        assert.equal(result , 15);
    });

    it('ShouldRetrunUndefinedIfNotNumber', function(){
        let input = 'asdf';

        let result = mathEnforcer.subtractTen(input);

        assert.equal(result , undefined);
    });

    it('ShouldRetrunNumberMinusTen', function(){
        let input = 10;

        let result = mathEnforcer.subtractTen(input);

        assert.equal(result , 0);
    });

    it('ShouldRetrunUndefinedIfNotNumber', function(){
        let firstinput = 10;
        let secondInput = 'asdf';

        let result = mathEnforcer.sum(firstinput , secondInput);

        assert.equal(result , undefined);
    });

    it('ShouldRetrunUndefinedIfNotNumber', function(){
        let firstinput = 'dfgdfg';
        let secondInput = 15;

        let result = mathEnforcer.sum(firstinput , secondInput);

        assert.equal(result , undefined);
    });

    it('ShouldSumTheNumbers', function(){
        let input = 10;
        let secondInput = 15;

        let result = mathEnforcer.sum(input , secondInput);

        assert.equal(result , 25);
    });

    it('ShouldSumFloatingNumbers', function(){
        let input = 10.13;
        let secondInput = 15.57;

        let result = mathEnforcer.sum(input , secondInput);

        assert.equal(result.toFixed(2) , 25.70);
    });

    it('ShouldRemoveNegativeNumbers', function(){
        let input = -10;
        

        let result = mathEnforcer.subtractTen(input);

        assert.equal(result , -20);
    });

    it('ShouldSumNegativeNumbers', function(){
        let input = -10;
        let second = -40;
        
        let result = mathEnforcer.sum(input , second);

        assert.equal(result , -50);
    });

    it('ShouldSubstarctFloatingNumbers' , function(){
        let input = -10.5;
      
        let result = mathEnforcer.subtractTen(input);

        assert.equal(result , -20.5);
    });

    it('ShouldSumFloatingWithFive' , function(){
        let input = 5.23;
      
        let result = mathEnforcer.addFive(input);

        assert.equal(result , 10.23);
    });

    it('ShouldSumWithNegative' , function(){
        let input = -5.23;
      
        let result = mathEnforcer.addFive(input);

        assert.equal(result.toFixed(2) , -0.23);
    });





});