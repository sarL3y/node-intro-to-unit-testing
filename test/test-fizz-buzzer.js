// import chai, declare expect variable
const expect = require('chai').expect;

// import adder
const fizzBuzzer = require('../fizzBuzzer');

// unit tests for our `adder` function
describe('fizzBuzzer', function() {

    // test the normal case
    it('should return "fizz-buzz" for multiples of 15', function() {
        // range of normal inputs, including
        // notable cases like negative answers
        
        [15, 30, 45].forEach(function(input) {
            expect(fizzBuzzer(input)).to.equal('fizz-buzz');
        });
    });

    it('should return "fizz" for multiples of 3', function() {
        // range of normal inputs, including
        // notable cases like negative answers
        
        [3, 6, 9, 12].forEach(function(input) {
            expect(fizzBuzzer(input)).to.equal('fizz');
        });
    });

    it('should return "buzz" for multiples of 5', function() {
        // range of normal inputs, including
        // notable cases like negative answers
        
        [5, 10, 50].forEach(function(input) {
            expect(fizzBuzzer(input)).to.equal('buzz');
        });
    });

    it('should raise error if args not numbers', function() {
        // range of bad inputs where not both are numbers
        const badInputs = [
        true,
        ['1', 2],
        [2, false], 
        function() {},
        'cat'
        ];
        // prove that an error is raised for bad inputs
        badInputs.forEach(function(input) {
        expect(function() {
            fizzBuzzer(input);
        }).to.throw(Error);
        });
    });
});