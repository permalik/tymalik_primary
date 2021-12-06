---
alt_text: "close-up angle of a rock's grooves in complete darkness"
author: 'Ty Malik'
cover_image: 'https://res.cloudinary.com/permalik/image/upload/v1638646547/article_0006_js_rps.png'
description: 'Build a classic game'
excerpt: 'Conditional statements can be leveraged to determine the victor'
tags:
  ['technology', 'web development', 'software engineering', 'javascript', 'css']
timestamp: '2021-06-13'
title: 'JavaScript Rock Paper Scissors'
---

## Primary Outlook

The concept of RPS is dead simple.

Three options: rock, paper or scissors.

Two parties choose an option and pit them against one another.

Building this game as a web application requires user input and DOM traversal.

Conditional statements can be leveraged to determine the victor.

### Structure

A section will be devoted to the user move list.

There will be a display area for each rounds' scores.

Finally will be a place for announcing winners.

### Functionality

The user will have an option of rock, paper or scissors from the respective HTML buttons. Clicking an option will solidify the user move.

A random computer move will be selected via `moves[~~(Math.random() * moves.length)];`, where _moves_ is an array of the available play options.

Though basic, this is really about all requisite logic.

Much of the remaining code only intends to toggle `n.style.display` (reveal/remove element) or `n.textContent` (replace/insert a given string).

### Style

The base-styles are minimal. However, I decided to make the game title flash random colors like that of old-school arcade games.

The random color generator is built with event listeners.

Upon window load, a `colorRandomizer()` function will quickly alternate the colors displayed in the header.

## Final Thoughts

This project was a great exercise in conditional statements and DOM traversal.

Leveraging random number generation has made me more confident in using such processes going forward.

Modularization also proved paramount in distinguishing which logic was firing and where.

Photo by <a href="https://unsplash.com/@fabiankozdon?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Fabian Kozdon</a> on <a href="https://unsplash.com/s/photos/rock?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
