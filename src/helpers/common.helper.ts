// src/helpers/common.helper.ts

/**
 * Parses given string into a number 
 */
export function parseNumber(str: string): number { 
    const trimmed = str.trim();
    if (trimmed === '') {
        throw new Error(`Invalid number: ""`);
    }
    const parsed_num = Number(trimmed);
    if (isNaN(parsed_num)) {
        throw new Error(`Invalid number: "${trimmed}"`);
    } 
    return parsed_num;
}

/**
 * Checks if a number is ≤ max.
 */
export const isLessThanEqualTo = (max: number) => (n: number) => n <= max;

/**
 * Returns true if the number is negative.
 */
export function isNegative(num: number): boolean {
    return num < 0;
}

/**
 * Throws an error if the list contains negative numbers.
 */
export function throwNegativesError(nums: number[]): void {
    const numbers = nums.filter(isNegative);
    if (numbers.length > 0) {
        throw new Error(`Negative numbers not allowed: ${numbers.join(', ')}`);
    }
}