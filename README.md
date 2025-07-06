# TDD String Calculator (TypeScript)

A clean implementation of the **String Calculator Kata**, using **Test-Driven Development (TDD)** in **TypeScript**.

---

## Tech Stack

- TypeScript  
- Node.js  
- Jest (unit testing)

---

## TDD Workflow

1. **Red** – Write a failing test  
2. **Green** – Write minimal code to pass the test  
3. **Refactor** – Clean up the code  
4. **Commit** – After every successful test run  

---

## The Three Laws of TDD (by Uncle Bob)

1. Only write production code to make a failing test pass.  
2. Only write enough test code to fail.  
3. Only write enough production code to pass the test.

---

## Features

### Core Features
 
**1. Empty Input** – Return `0` for an empty string  
**2. Single Number** – Return the number itself  
**3. Two Numbers** – Return sum of two comma-separated numbers  
**4. Multiple Numbers** – Support unknown number of comma-separated values  
**5. Newlines as Delimiters** – Support `\n` as a valid delimiter  
**6. Custom Delimiter** – Format: `//[delimiter]\n[numbers...]`  
**7. Negative Numbers** – Throw error for any negative input  
   7.1 Combine multiple negatives in one message (example: `Negative numbers not allowed: -1, -4`)

### Additional Features  
**8. Track Method Calls** – Count how many times `add()` was called  
**9. Ignore Numbers > 1000** – example: `2 + 1001 = 2`  
**10. Delimiter of Any Length** – example: `//[***]\n1***2***3`  
**11. Multiple Single-Char Delimiters** – example: `//[*][%]\n1*2%3`  
**12. Multiple Multi-Char Delimiters with any length** – example: `//[***][%%%]\n1***2%%%3`  


---
## Edge Case Validations

All invalid or malformed number inputs throw descriptive errors.

| Case Type                 | Example Input     | Error Message                |
|--------------------------|-------------------|------------------------------|
| Non-numeric input        | `1,a,3`           | `Invalid number: "a"`        |
| Empty token              | `1,,2`            | `Invalid number: ""`         |
| Completely invalid input | `abc`             | `Invalid number: "abc"`      |
| Partial invalid token    | `4,5x`            | `Invalid number: "5x"`       |
| Mixed tokens             | `1,2a,3`          | `Invalid number: "2a"`       |

---
## Project Structure

```
tdd-string-calculator-ts-kata/
├── src/
│   ├── core/                  # Main class: StringCalculator
│   ├── helpers/               # Pure utility functions 
│
├── tests/                     # All test files
│   └── string-calculator.test.ts
│
├── CHANGELOG.md               # Manual changelog following commit messages
├── README.md                  # Project overview and setup
├── package.json               # Project dependencies and scripts
├── tsconfig.json              # TypeScript configuration
└── jest.config.ts             # Jest testing configuration

```
---

## How to Run

```bash
npm install
npm test
```

---





## Final Test Output (All Features & Validations Passed)


```
StringCalculator Test Suite
  Feature 1: Empty Input
    √ should return 0 for an empty string (8 ms)
  Feature 2: Single Number
    √ should return the number itself from the input string (2 ms)
  Feature 3: Two Numbers
    √ should return the sum of two comma-separated numbers input (2 ms)
  Feature 4: Multiple Numbers (handle unknown length of comma-separated numbers)
    √ should return the correct sum (3 ms)
  Feature 5: Newline Delimiter
    √ should return the correct sum for both newline and comma delimiter (1 ms)
  Feature 6: Custom Delimiter (support different single-character delimiter)
    √ should return correct sum with custom delimiter (2 ms)
  Feature 7: Negative Numbers - single
    √ Feature 7.0: should throw error with a single negative number (29 ms)
    √ Feature 7.1: should throw error with multiple negative numbers in message (3 ms)
  Feature 8: Track Add Method Calls
    √ should return the correct count of how many times add() was called (2 ms)
  Feature 9: Ignore numbers > 1000 (example 2 + 1001 = 2)
    √ should ignore numbers greater than 1000 (2 ms)
  Feature 10: Delimiter of Any Length (example: `//[***]\n1***2***3`)
    √ should return correct sum for custom delimiter of any length  (2 ms)
  Feature 11: Multiple Single-Char Delimiters (e.g., //[#][%]\n1#2%3)
    √ should return correct sum using multiple single-char delimiters (3 ms)
  Feature 12: Multiple Multi-Char Delimiters (Of Any Length) (e.g., //[***][%%%]\n1***2%%%3)
    √ should return correct sum using multiple multi-char delimiters (3 ms)
  Validation: invalid number input
    √ should throw error for non-numeric input like "1,a,3" (4 ms)
    √ should throw for empty value between delimiters (2 ms)
    √ should throw for completely non-numeric input (4 ms)
    √ should throw for partially valid multi-char string (2 ms)
    √ should throw error for mixed numeric and non-numeric token (2 ms)
```
---
## Coverage Summary

File                   | % Stmts | % Branch | % Funcs | % Lines
-----------------------|---------|----------|---------|---------
All files              |     100 |      100 |     100 |     100

---
## ✅ All 18 test cases passed with 100% coverage.  
This completes the TDD-driven String Calculator implementation.


