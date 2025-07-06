// tests/string-calculator.test.ts

/**
 * String Calculator Test Suite 
 * 
 * Following are the completed Test cases for the string calculator add TDD Kata
 * 1. Empty Input – Return 0 for an empty string
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

});
    