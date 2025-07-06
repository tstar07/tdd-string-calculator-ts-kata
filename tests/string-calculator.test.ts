// tests/string-calculator.test.ts

/**
 * String Calculator Test Suite 
 * 
 * Following are the completed Test cases for the string calculator add TDD Kata
 * 1. Empty Input – Return 0 for an empty string
 * 2. Single Number – Return the number itself 
 * 3. Two Numbers – Return sum of two comma-separated numbers
 */
import { StringCalculator } from './../src/core/string-calculator';

describe('StringCalculator Test Suite', () => {
    let calculator: StringCalculator

    beforeEach(() => {
        calculator = new StringCalculator()
    })
    
    //Feature 1: Empty Input
    describe('Feature 1: Empty Input', () => {
        it('should return 0 for an empty string', () => {
            expect(calculator.add('')).toBe(0)
        });
    });

    //Feature 2: Single Number
    describe('Feature 2: Single Number', () => {
        it('should return the number itself from the input string', () => {
            expect(calculator.add('1')).toBe(1)
            expect(calculator.add('20')).toBe(20);
            expect(calculator.add('0')).toBe(0);
        });
    });

    //Feature 3: Two Numbers Addition
    describe('Feature 3: Two Numbers', () => {
        it('should return the sum of two comma-separated numbers input', () => {
            expect(calculator.add('1,2')).toBe(3);
            expect(calculator.add('5,15')).toBe(20);
            expect(calculator.add('0,7')).toBe(7);
        });
    });

});
    