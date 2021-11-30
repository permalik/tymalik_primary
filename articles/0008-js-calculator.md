---
alt_text: 'calculator in focus on non-focused wooden-like surface'
author: 'Ty Malik'
cover_image: 'https://res.cloudinary.com/permalik/image/upload/v1638254904/article_008_js_calculator.jpg'
description: 'Build a basic calculator'
excerpt: 'Browsers are web interfaces built for purposeful user interaction'
tags: ['internet', 'technology']
timestamp: '2021-07-13'
title: 'JavaScript Calculator'
---

Primary Outlook

This is my process for constructing an interactive calculator with simple arithmetic operations. The intended functionality for this application includes: addition, subtraction, multiplication, division, positive/negative toggling and support for floats. The logic I used to create this project leverages DOM values, thus providing valid calculations.
HTML

Scaffolding is instantiated and a div is set which will serve as my page wrapper.

I insert a section with the class="calculator". This container will hold two other sections both with a shared class="calculator-module". The first "module" will supply an interface for displaying all operations, while the second boasts a keyboard enabling user input.

The interface works by offering an enclosed div whose contents may be altered via various JavaScript actions.

Additionally, the keyboard is utilized with multiple button elements. Each of these buttons has either a class property or data attribute (or both), such that each element may be selected with JavaScript.

The final HTML tag is a script tag, keeping everything running properly.

CSS(SCSS)

The styling is divided into three separate Sass documents. The first is a full CSS reset, the second provides global declarations (for variables, colors, font, etc.) and the last is a main stylesheet defining the layout (as in positioning, sizing and other container behavior like flex/grid.)

While the appearance of this project is important, it is after all -- still a calculator. I mean this to say, no elaborate styling has been instantiated. Therefore, I'll be keeping these descriptions rather terse. That being said...

Variables are created as CSS native variables.

All container and button elements are given border-radius="5px", save the interface "screen" which remains to have its sharp corners.

UX is maintained by leveraging hover and active. These styles adjust opacity, background(color), box-shadow and transform: translate; appropriately, thus making the buttons appear 'clicky' and overall more button-like.
JavaScript

My index.js file holds all JavaScript for the application. Within this document, stylesheets are imported, variables instantiated, event listeners defined and functions are added.

The first forEach loop iterates through each of the operand buttons (0-9) and listens for a 'click'. This calls setOperandOne(e.target.dataset.key) and appends the respective data-attribute's value to the interface screen. When the value is produced on-screen, it allows the user to view the input information. Simultaneously, the displayed value is used to set the operandOne variable which will serve as the initial number in the calculation.

Another forEach allows any of the arithmetic operators ( +, -, \*, / ) to be assigned to the corresponding variable. setOperation(operator) will store the chosen operator inside the variable (currentOperator) or call evaluate() if a calculation sequence of two-plus numbers is being performed.

The evaluate function completes a few tasks: it ensures nothing may be divided by zero (and resets the application if so,) it handles the next input operand by storing it inside the operandTwo variable and it resets all values thereby priming the calculator for subsequent operations.

Multiple functions exist which aid the main evaluate function. Those are as follows...

The function operate uses a switch statement to appropriately return a function which corresponds with input operators ( +, -, \*, / ).

In the same vein, four functions are provided (add, subtract, multiply, divide) which all take two parameters (numOne and numTwo). Within each of these functions, the actual calculations are performed then the result returned.

The remainder of my functions are very straightforward and mostly one-liners. round(number) rounds the result of any calculation to two decimal places. resetValues() removes any existing values from within either operand or the operator variable. clearScreen() clears the interface screen from any numbers or their results. posNeg() does as it suggests and toggles any on-screen value from positive to negative (or vice-versa.) And decimal() also is self-descriptive, wherein decimals may be inserted into operands (thereby creating floating-point numbers.)
Final Thoughts

Clear logic was essential in the process of building this application. I understand, after completion, that I was initially confused about where I needed to perform the calculations. It turned out, that utilizing the interface screen's div would enable the manipulation of my variables from one step to the next.

I honestly learned more over the course of this project than I assumed I would. This has been a pretty helpful experience. Again, I'm witnessing the prevalence and importance of simple switch statements.

Photo by <a href="https://unsplash.com/@stm_2790?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Sumudu Mohottige</a> on <a href="https://unsplash.com/s/photos/calculator?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
