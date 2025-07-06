// src/core/string-calculator.ts

/**
 * StringCalculator with add logic scenarios for the given number string.
 */
export class StringCalculator {

    /**
     * Add method to perform calculations for the given string input
     * 
     * @param numbers A string containing numbers and delimiters.
     * @returns 0 for empty input, or the number itself for a single number input.
     */
     add(numbers: string): number {      
        // Return 0 for empty string; return the number itself for single input
        return (!numbers) ? 0 : Number(numbers);    
    }
    
} // StringCalculator