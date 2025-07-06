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

