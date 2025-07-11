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
 * 7. Negative Numbers – Throw error for negatives - 
 *    7.1 Combine multiple negatives in one message (example: `Negative numbers not allowed: -1, -4`)
 * 8. Track Method Calls – Count how many times `add()` was called  
 * 9. Ignore Numbers > 1000 – example: `2 + 1001 = 2`
 * 10. Delimiter of Any Length – example: `//[***]\n1***2***3`
 * 11. Multiple Single-Char Delimiters – example: `//[*][%]\n1*2%3`
 * 12. Multiple Multi-Char Delimiters (of any length) – example: `//[***][%%%]\n1***2%%%3`  
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

    // Feature 8: Track Add Method Calls
    describe('Feature 8: Track Add Method Calls', () => {
        it('should return the correct count of how many times add() was called', () => {
            calculator.add('1,2');    // 1st call
            calculator.add('3');      // 2nd call
            calculator.add('4,5,6');  // 3rd call
    
            expect(calculator.getCalledCount()).toBe(3);
        });
    });

    // Feature 9: ignore numbers > 1000 for example 2 + 1001 = 2
    describe('Feature 9: Ignore numbers > 1000 (example 2 + 1001 = 2)', () => {
        it('should ignore numbers greater than 1000', () => {
            expect(calculator.add('2,1001')).toBe(2);
            expect(calculator.add('1000,1')).toBe(1001);
            expect(calculator.add('2000\n3000\n4')).toBe(4);
        });
    });

    // Feature 10: Delimiter of Any Length – example: `//[***]\n1***2***3`
    describe('Feature 10: Delimiter of Any Length (example: `//[***]\n1***2***3`)', () => {
        it('should return correct sum for custom delimiter of any length ', () => {
          expect(calculator.add('//[***]\n1***2***3')).toBe(6);
          expect(calculator.add('//[****]\n1****2****2')).toBe(5);
          expect(calculator.add('//[##]\n4##5##6')).toBe(15);
          expect(calculator.add('//[abc]\n7abc8abc9')).toBe(24);
        });
    });

    // Feature 11: Multiple Single-Char Custom Delimiters
    describe('Feature 11: Multiple Single-Char Delimiters (e.g., //[#][%]\\n1#2%3)', () => {
        it('should return correct sum using multiple single-char delimiters', () => {
            expect(calculator.add('//[*][%]\n1*2%3')).toBe(6);
            expect(calculator.add('//[@][#]\n4@5#6')).toBe(15);
            expect(calculator.add('//[!][-]\n1!2-3')).toBe(6);
        });
    });

    // Feature 12: Multiple Multi-Char Delimiters
    describe('Feature 12: Multiple Multi-Char Delimiters (Of Any Length) (e.g., //[***][%%%]\\n1***2%%%3)', () => {
        it('should return correct sum using multiple multi-char delimiters', () => {
            expect(calculator.add('//[***][%%%]\n1***2%%%3')).toBe(6);
            expect(calculator.add('//[##][&&]\n10##20&&30')).toBe(60);
            expect(calculator.add('//[abc][xyz]\n1abc2xyz3')).toBe(6);
            expect(calculator.add('//[--][+++]\n5--10+++15')).toBe(30);
        });
    });
    
    //additional Edge Case Validations
    describe('Validation: invalid number input', () => {
        it('should throw error for non-numeric input like "1,a,3"', () => {
            expect(() => calculator.add('1,a,3')).toThrow('Invalid number: "a"');
        });
        it('should throw error for empty value between delimiters', () => {
            expect(() => calculator.add('1,,2')).toThrow('Invalid number: ""');
        });

        it('should throw error for completely non-numeric input', () => {
            expect(() => calculator.add('abc')).toThrow('Invalid number: "abc"');
        });

        it('should throw error for partially valid multi-char string', () => {
            expect(() => calculator.add('4,5x')).toThrow('Invalid number: "5x"');
        });

        it('should throw error for mixed numeric and non-numeric token', () => {
            expect(() => calculator.add('1,2a,3')).toThrow('Invalid number: "2a"');
        });
    });

});
    