// src/core/string-calculator.ts

import { parseNumber } from './../helpers/common.helper';

/**
 * StringCalculator with add logic scenarios for the given number string.
 */
export class StringCalculator {

    /**
     * Add method to perform calculations for the given string input
     * 
     * @param numbers A string containing numbers and delimiters.
     * @returns The sum of all numbers, or 0 for empty input.
     */
    add(numbers: string): number {
        // Split numbers by comma, parse each, and sum them
        const nums_arr = (numbers) ? numbers.split(',').map(parseNumber) : [];
        return nums_arr.reduce((acc, n) => acc + n, 0);
    }
    
} // StringCalculator