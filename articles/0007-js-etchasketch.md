---
alt_text: "a person sketching the profile of a person's face"
author: 'Ty Malik'
cover_image: 'https://res.cloudinary.com/permalik/image/upload/v1638254292/article_007_js_etchasketch.jpg'
description: 'Build a retro toy clone'
excerpt: 'Browsers are web interfaces built for purposeful user interaction'
tags: ['internet', 'technology']
timestamp: '2021-06-24'
title: 'JavaScript Etch-A-Sketch'
---

Primary Outlook

Color selection, interactive coloring/erasing and board resize/reset: this is the core functionality of my etch-a-sketch application. I gained some experience with DOM manipulation, switch statements, mouse events, CSS animations and more. This article will divulge several steps I took in bringing it all to life.

HTML

Start with basic scaffolding. Next, I insert a div with class:"page-wrap". This wrapper will contain three components: my application header, the container div which will act as the canvas of sorts (holding each "pixel" element) and a final div with class="control-console" boasting three section elements for various interactive controls. The last tag in my HTML is a script tag, sourcing my index.js file.

SCSS

The full structure of the application amounts to a text title, etch-a-sketch drawing canvas and six buttons in a flexbox with flex-direction: column;. Most other styles (it probably goes without saying) are very minimal, save a @keyframes at-rule.

The background property of my body element is set with linear-gradient. Three separate gradients comprise the total effect, using various deg to position the angles of each color. Each of the gradients are set with their own percentages which govern their respective lengths. Then both hsl() and rgba() are defined, such that all gradients will fade inward and leave the center of the page relatively light.

Back to @keyframes. This animation creates an effect to mimic the feature of the original, physical Etch-a-Sketch toy. If it's less than common knowledge, after drawing designs on an etch-a-sketch, the device is cleared by shaking. Percentages for each animated step are broken into thirds. 0% serves as the beginning and shifts are at 33.33%, 66.66% and finally 100%. The property transform is utilized in combination with the CSS function rotate(), which tilts the drawing canvas 3deg, -3deg, back to 3deg and resets it to its initial value.

JavaScript

My jS is formatted from top-to-bottom -- beginning with imports, declaring/initializing my variables, listing my eventListeners and adding each function.

Imports include both a reset.css and main.scss, as my project will be built to production using Parcel.

The first four variables are filled by selecting class and data attributes from the DOM. The elements in question are the drawing container, buttons for color option choices, the button to shake and clear the canvas and a final button which enables the user to resize the not-yet-instantiated grid dimensions. The remaining variables declare color and widthInput, such that the suggested values may be manipulated based upon user discretion.

Propagate the Grid

A window.addEventListener fires on page load, triggering the propagateGrid function. The function is passed an argument, widthInput, which is default set to 10 or may be altered via user input.

The propagateGrid function takes an arg gridWidth. This parameter says, input the desired width for this grid iteration and let's set a variable which will store the calculated area value; thus, a \*\* (square operator) is leveraged for such arithmetic.

Now that the grid size has been determined: a basic for-loop spawns an appropriate number of div elements, applies all sizing, styles the grid display, styles grid template columns/rows and appends each div to the parent container.

Before closing the function, pixels.forEach gets each of our newly created "pixels" and uses an eventListener to appropriately call the toggleColor function on mouseover.

User Input Grid Size

The initial grid begins as a 10x10 canvas of div elements. In order to work with external values, widthInput is set to the value of selectWidth()'s return. Inside the selectWidth function exists a do-while loop prompting the user for dimensions. Contained conditional statements ensure input is only accepted if it is between the numbers 1 and 100 inclusive.

The user's dimensions have now been collected. But, before a new grid can be formed, the grid must be reset from its previous incarnation. The resetGrid function takes each "pixel" div and uses removeChild to strip it from its parent container.

Varying Color Options

Another eventListener is instantiated which iterates through each button with class="color-option". When the user clicks on any respective option, selectColorPen() is triggered.

Using a switch statement, selectColorPen() leverages CSS data attributes and the previously mentioned color variable; such that, each case boasts a particular attributes' value which stores the corresponding value (inside the color variable) and breaks from the sequence.

This color-selection function works in conjunction with the aforementioned toggleColor function. Inside toggleColor() is a second switch statement built with the purpose of applying appropriate style.backgroundColor to each "pixel" div on mouseover.

The Shake-Clear Functionality

The last eventListener fires when the user clicks the corresponding "shake" button. The first function (addShakeAnimation) is responsible for adding the animation ('shake 1s linear') to the drawing canvas. When this animation is appended as a class property, the @keyframes from earlier fires and we get our side-to-side action as intended.

The remaining behavior inside the eventListener is governed by two setTimeouts which reset both the "pixel" background colors and the shakeAnimation function itself.

Final Thoughts

I really enjoyed this project. Something about the combination of logic to make design possible is certainly attractive. As an aside, writing technical articles also seems to be making more sense. Good stuff.

Photo by <a href="https://unsplash.com/@kipic?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Dusan Kipic</a> on <a href="https://unsplash.com/s/photos/sketch?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
