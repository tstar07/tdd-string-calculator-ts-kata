// tests/string-calculator.test.ts

/**
 * String Calculator Test Suite 
 * 
 * Following are the completed Test cases for the string calculator add TDD Kata
 * 1. Empty Input – Return 0 for an empty string
 * 2. Single Number – Return the number itself 
 * 3. Two Numbers – Return sum of two comma-separated numbers
 * 4. Multiple Numbers – Handle any count of numbers
 * 5. Newlines as Delimiters - Handle `\n` as a valid delimiter
 * 6. Custom Delimiter – Format: `//[delimiter]\n[numbers...]` 
 * * 7. Negative Numbers – Throw error for negatives - 
 *    7.1 Combine multiple negatives in one message (example: `Negative numbers not allowed: -1, -4`) - 
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

    //Feature 4: Multiple Numbers
    describe('Feature 4: Multiple Numbers (handle unknown length of comma-separated numbers)', () => {
        it('should return the correct sum', () => {
          expect(calculator.add('1,2,3')).toBe(6);
          expect(calculator.add('10,20,30,40')).toBe(100);
          expect(calculator.add('5,5,5,5,5,1,1,1,1,1')).toBe(30);
        });
    });

    // Feature 5: Newline Delimiter
    describe('Feature 5: Newline Delimiter', () => {        
        it('should return the correct sum for both newline and comma delimiter', () => {
          expect(calculator.add('1\n2,3')).toBe(6);
          expect(calculator.add('4\n2\n6')).toBe(12);
        });
    });

    // Feature 6: Custom Delimiter
    describe('Feature 6: Custom Delimiter (support different single-character delimiter)', () => {
        it('should return correct sum with custom delimiter', () => {
            expect(calculator.add('//;\n1;2')).toBe(3);
            expect(calculator.add('//#\n3#4#5')).toBe(12);
        });
    }); 

    // Feature 7: Negative Numbers
    describe('Feature 7: Negative Numbers - single', () => {      
        it('Feature 7.0: should throw error with a single negative number', () => {
            expect(() => calculator.add('-1')).toThrow('Negative numbers not allowed: -1');
        });

        it('Feature 7.1: should throw error with multiple negative numbers in message', () => {
            expect(() => calculator.add('1,-2,3,-5')).toThrow('Negative numbers not allowed: -2, -5');
        });
    });

});
    