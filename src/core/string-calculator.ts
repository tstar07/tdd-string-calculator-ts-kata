// src/core/string-calculator.ts

import { parseNumber, throwNegativesError, isLessThanEqualTo } from './../helpers/common.helper';

/**
 * StringCalculator with add logic scenarios for the given number string.
 */
export class StringCalculator {
    
    private _call_count = 0;
    private readonly _INPUT_STRING_PREFIX = '//';
    private readonly _DEFAULT_DELIMITERS = [',', '\n'];
    private readonly _NEW_LINE_DELIMITER = this._DEFAULT_DELIMITERS[1];

    /**
     * Add method to perform calculations for the given string input
     * 
     * Supports:
     * - Default delimiters: comma (`,`) and newline (`\n`)
     * - Custom single-character delimiter: Format → `//;\n1;2`
     * - Negative number validation (throws if negative numbers exist)
     * - Tracks how many times `add()` is called 
     * - Ignores numbers greater than 1000
     * - Single multi-character delimiter: `//[***]\n1***2`
     * - Multiple delimiters: `//[*][%]\n1*2%3` 
     * 
     * @param numbers A string containing numbers and delimiters.
     * @returns The sum of all numbers, or 0 for empty input.
     */
    add(numbers: string): number {
        
        // increment every time add is called
        this._incrementCallCount(); 

        //gets numbers section only from the input
        const nums_str = this._getNumbersSection(numbers);

        // build a regex to split on different delimiters extracted via _getDelimiters from the given input
        const delimiter_regex = this._generateDelimiterRegex(this._getDelimiters(numbers));       

        // Split input by delimiter regex, parse each, ignore >1000, and calculate sum
        const nums_arr = (nums_str) ? nums_str.split(delimiter_regex).map(parseNumber).filter(isLessThanEqualTo(1000)) : []; 

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

    /**
     * Gets the list of delimiters from the input string.
     * 
     * Supports:
     * - Default delimiters: comma (`,`) and newline (`\n`)
     * - Single custom delimiter: `//;\n1;2`
     * - Single multi-character delimiter: `//[***]\n1***2`
     * - Multiple delimiters: `//[*][%]\n1*2%3` 
     *
     * @param input - The raw input string including optional delimiter block.
     * @returns An array of delimiters to be used for splitting.
     */
    private _getDelimiters(input: string): string[] {

        if (!input.startsWith(this._INPUT_STRING_PREFIX)) 
            return this._DEFAULT_DELIMITERS;

        const delimiter_end = input.indexOf(this._NEW_LINE_DELIMITER);

        const delimiter_block = input.slice(2, delimiter_end);

        
        // Matches all [delim] patterns inside the block (supports both single and multi-char delimiters)
        const delimiter_matches = [...delimiter_block.matchAll(/\[(.+?)\]/g)];      
        
        // Handles extraction of multiple delimiters:
        // example "//[*][%]\n1*2%3" → ['*', '%']
        //       "//[***][%%%]\n1***2%%%3" → ['***', '%%%']
        if (delimiter_matches.length > 0) {
            return delimiter_matches.map(m => m[1]);
        }

        // returns array with single-char delimiter (like `;` in `//;\n1;2`)
        return [delimiter_block];
    }
    
    /**
     * Gets the numbers portion of the input string.
     * If the input starts with a custom delimiter syntax (e.g., "//;\n1;2"),
     * it skips the delimiter declaration and returns only the number section.
     *
     * @param input - The raw input string.
     * @returns The substring containing only numbers and delimiters.
     */
    private _getNumbersSection(str: string): string {
        return str.startsWith(this._INPUT_STRING_PREFIX) ? str.slice(str.indexOf(this._NEW_LINE_DELIMITER) + 1) : str;
    }

    /**
     * Generates a regular expression from a list of delimiters.
     * This regex is used to split the input number string.
     *
     * @param delimiters - An array of delimiters to be used.
     * @param separator - Optional joiner (default: '|') for combining delimiters into regex OR pattern
     * @returns A RegExp
     */
    private _generateDelimiterRegex(delimiters: string[], separator = '|'): RegExp {
        const escaped = delimiters.map(this._parseRegex).join(separator);
        return new RegExp(escaped);
    }

    /**
     * Clears special characters in a delimiter to make it regex-safe.
     * Useful for symbols like '*', '+', '[', etc., that have special meaning in RegExp.
     *
     * @param str - A single delimiter string to escape.
     * @returns A regex-safe version of the input string.
     */
    private _parseRegex(str: string): string {
        return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
    
} // StringCalculator