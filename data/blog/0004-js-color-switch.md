---
alt_text: 'a whole fruit (orange) painted blue shown on the same blue-colored background'
author: 'Ty Malik'
cover_image: 'https://res.cloudinary.com/permalik/image/upload/v1638646470/article_0004_js_color_switch.png'
description: 'Build an interactive color switch'
excerpt: 'Building a color switch requires some form of user input'
tags:
  ['technology', 'web development', 'software engineering', 'javascript', 'css']
timestamp: '2021-05-09'
title: 'JavaScript Color Switch'
---

## Primary Outlook

Building a color switch requires some form of user input.

I chose to implement a math quiz to prompt for such input.

After accurately answering questions a series of color switches are produced.

These switches allow a user to momentarily paint the background of the viewport.

### Structure

The first section houses a div for containing my color switch interface.

Within this interface math questions are asked and answers are received.

Additionally, another section is used to insert the actual switch. This section enables user interactivity, displaying a message when the question is answered correctly.

### Functionality

The interface will be removed with each correct answer with the respective color switch being displayed.

After the interface is removed an animation will present with a clickable circle.

When the circle is clicked the background color will transition to and from the first "color switch".

Each round offers a new color for display. In preparation for this next round, the interactive control circle will automatically, randomly position itself.

This random positioning was made possible by utilizing `Math.round(Math.random() * n)`, `window.innerHeight`, `window.innerWidth` and other assistive logic.

### Style

Only a minimal amount of base styles are defined in a main style sheet.

The lion's share of style is enacted with `document.querySelector(arg)`, class selectors or `document.getElementById(arg)`.

## Final Thoughts

This project has made me comfortable with selecting HTML elements from the DOM and manipulating them based off user input.

Using if-else chains, I was able to successfully achieve functionality.

The random positioning of button switches helped me understand the concept of random number generation.

And writing functions for chronological user expectation, showed me how I should think about patterning my code.

Photo by <a href="https://unsplash.com/@davisuko?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">davisuko</a> on <a href="https://unsplash.com/s/photos/color-swap?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
