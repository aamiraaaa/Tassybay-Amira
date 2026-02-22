# Personal Assignment 1 Report Template

## 1. Project Overview

**Project Name:**  
(Savings Goal Calculator)

**What does your calculator do?**  
(This calculator helps users plan their savings for a personal goal. It calculates how much money they save per month based on their income and saving percentage, and how many months are needed to reach their goal. Users can set any target amount themselves, making it realistic and practical.)


---

## 2. Inputs

List and explain all inputs you used.

| Input Name | Unit | What it Represents |
|---|---|---|
| Example: Monthly Income | ₸ | Total income per month |
| Example: Savings Goal | ₸ | Desired amount to save (user-defined goal) |
| Example: Percentage Saved | % | Portion of income saved per month |

Explain in words:  
(These inputs represent the main financial planning variables: income determines the available money, percentage determines how much is actually saved, and goal defines the target.I also have poor financial literacy, and this calculator solves my problem.)

---

## 3. Process (Calculation Logic)

**Formula or Calculation Used:**  
(Monthly Savings = Income × (Percentage / 100)
Months Needed = Goal ÷ Monthly Savings)


**Steps:**
1.Take input from HTML fields.
2.Convert strings to numbers using parseFloat.
3.Calculate monthly savings.
4.Calculate months needed to reach goal using Math.ceil to round up.
5.Display results in the webpage. 

---

## 4. Conditional Logic (if / else)

Explain how your program interprets the result.


If income, percentage, or goal is empty or 0 → show error message.
Else → calculate monthly savings and months needed.

This prevents invalid calculations and ensures users enter meaningful data

---

## 5. Output

What does your program show to the user?

Monthly savings (₸)
Months needed to reach goal (rounded up)
Personalized message displaying results

---

## 6. Edge Cases / Unusual Inputs

What happens if:

- User enters zero?  
- User enters negative number?  
- User leaves input empty?  

Zero or empty input - shows error message
Negative numbers - calculation works mathematically but is logically incorrect
Non-numeric input - parseFloat returns NaN → caught by if (!income || !percent || !goal)

---

## 7. Optional Features (If You Added Any)

Rounded month using Math.ceil() 
Formatting money with 2 decimals using toFixed(2)
---

## 8. How to Run the Project

1.Place index.html, style.css, script.js in the same folder
2.Open index.html in browser
3.Enter Monthly Income, Percentage, and Goal
4.Click Calculate

---

## 9. AI Usage (If Used)

Did you use AI tools?  
(Yes / No)

Yes, AI helped write clean code and explanations. I modified code and now understand how it works

## 10. Reflection

What did you learn from this assignment?

(I did something myself for the first time using code. I figured out how and where to save codes.)
