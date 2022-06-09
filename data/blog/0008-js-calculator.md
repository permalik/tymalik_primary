---
alt_text: 'calculator in focus on non-focused wooden-like surface'
author: 'Ty Malik'
cover_image: 'https://res.cloudinary.com/permalik/image/upload/v1638646638/article_0008_js_calculator.png'
description: 'Build a basic calculator'
excerpt: 'Browsers are web interfaces built for purposeful user interaction'
tags:
  ['technology', 'web development', 'software engineering', 'javascript', 'css']
timestamp: '2021-07-13'
title: 'JavaScript Calculator'
---

## Primary Outlook

This is my process for constructing an interactive calculator with simple arithmetic operations.

**Intended functionality for this application includes:**

- addition
- subtraction
- multiplication
- division
- positive/negative toggling
- support for floats

### Structure

Two primary sections are used to scaffold this application.

The first section maintains an input. This is where digits will render for calculation.

Another section houses the keyboard. Nested within this container are separate buttons which represent the keys on a standard calculator.

Each of these buttons has their own `data-` attribute, which is how they are selected via JavaScript.

### Functionality

The interactivity between a user and the application is handled mainly with `EventListener`.

Insofar as the calculation is concerned, multiple functions are implemented.

`function operate(operator, numOne, numTwo)` holds `switch(operator)` wherein each `case` represents an arithmetic operation and a `return`.

Each `return` is outfitted with an exterior function which correlates with the `case` operation.

The helper functions are much like the following: `function add(numOne, numTwo)`

Each of these functions takes two numbers as arguments. The result of the given operation is then returned.

### Style

All styling is applied in the effort to create a calculator design. For that reason, such styles are quite sparse.

Most of the interface is essentially comprised of `grid` and `border`.

## Final Thoughts

Piecing together logic for this calculator presented no major hurdles, as simple arithmetic operations are pretty common.

That said, it has been enjoyable constructing a project that needs varying applications of funtionality.

Throughout this build I have had an oppurtunity to tie together numerous concepts and was ultimately successful in producing a working calculator.

Photo by <a href="https://unsplash.com/@stm_2790?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Sumudu Mohottige</a> on <a href="https://unsplash.com/s/photos/calculator?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
