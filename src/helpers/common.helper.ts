// src/helpers/common.helper.ts

/**
 * Parses given string into a number 
 */
export function parseNumber(str: string): number {   
    return Number(str.trim()); 
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