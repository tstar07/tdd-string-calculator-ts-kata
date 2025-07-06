// src/core/string-calculator.ts

import { parseNumber, throwNegativesError } from './../helpers/common.helper';

/**
 * StringCalculator with add logic scenarios for the given number string.
 */
export class StringCalculator {
    
    private _call_count = 0;

    /**
     * Add method to perform calculations for the given string input
     * 
     * Supports:
     * - Default delimiters: comma (`,`) and newline (`\n`)
     * - Custom single-character delimiter: Format → `//;\n1;2`
     * - Negative number validation (throws if negative numbers exist)
     * - Tracks how many times `add()` is called 
     * 
     * @param numbers A string containing numbers and delimiters.
     * @returns The sum of all numbers, or 0 for empty input.
     */
    add(numbers: string): number {
        
        // increment every time add is called
        this._incrementCallCount(); 

        // Default delimiters: comma and newline
        let delimiter_regex = /,|\n/;
        let nums_str = numbers;
        
        // If custom delimiter is format starts with '//'
        if (numbers.startsWith('//')) {

            //extracts custom delimiter 
            const delimiter = numbers[2];

            //builds regex using the custom delimiter (example: ";" from "//;\n1;2")
            delimiter_regex = new RegExp(`[${delimiter}]`);

            //extract the number part from the input string after '\n'
            nums_str = numbers.substring(4); 
        }

        // Split input by delimiter regex, parse each, and sum them
        const nums_arr = (nums_str) ? nums_str.split(delimiter_regex).map(parseNumber) : []; 

        //throws negative numbers error if exists 
        throwNegativesError(nums_arr);       

        return nums_arr.reduce((acc, n) => acc + n, 0);
    }

    /**
     * Increments the internal counter each time `add()` is called.
     * to track how many times the calculator add was used.     * 
     */
    private _incrementCallCount(): void {
        ++this._call_count;
    }

    /**
     * Retrieves the total number of times `add()` has been called.
     * Useful for diagnostics or analytics of calculator usage.
     * 
     * @returns The current call count.
     */
    public getCalledCount(): number {
        return this._call_count;
    }
    
} // StringCalculator