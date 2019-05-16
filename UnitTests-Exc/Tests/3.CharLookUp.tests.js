let lookupChar = require('../3.CharLookUp');
let assert = require('assert');

describe('ShouldFindChar', function () {
    it('ShoudlRetrunUndefinedIfNotString', function () {
        let input = 123;

        let result = lookupChar(input, 2);

        assert.equal(result, undefined);
    });

    it('ShoudlRetrunUndefinedIfNotNumber', function () {
        let input = '12adfasg3';

        let result = lookupChar('afgdfgsdf', input);

        assert.equal(result, undefined);
    });

    it('ShouldRetrunIncorectIfIndexLessThanZero', function () {
        let inputIndex = -2;

        let result = lookupChar('afgadg', inputIndex);

        assert.equal(result, 'Incorrect index');
    });

    it('ShouldRetrunIncorectIfIndexBiggerThanLength', function () {
        let inputIndex = 10;

        let result = lookupChar('afgadgsss', inputIndex);

        assert.equal(result, 'Incorrect index');
    });

    it('ShouldRetrunCharachter', function () {
        let inputText = 'asdf';
        let inputIndex = 2;

        let result = lookupChar(inputText, inputIndex);

        assert.equal(result, 'd');
    });

    it('ShouldRetrunCharachter', function () {
        let inputText = 'asdf';
        let inputIndex = 2.12;

        let result = lookupChar(inputText, inputIndex);

        assert.equal(result, undefined);
    })

});

