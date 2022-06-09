---
alt_text: "a person sketching the profile of a person's face"
author: 'Ty Malik'
cover_image: 'https://res.cloudinary.com/permalik/image/upload/v1638646593/article_0007_js_etchasketch.png'
description: 'Build a retro toy clone'
excerpt: 'This clone will be built using event listeners'
tags:
  ['technology', 'web development', 'software engineering', 'javascript', 'css']
timestamp: '2021-06-24'
title: 'JavaScript Etch-A-Sketch'
---

## Primary Outlook

An traditional Etch-A-Sketch is a canvas of sorts. Within the canvas is a stylus which can be maneuvered, producing lineographic images from the displacement of a contained metallic powder.

Each Etch-A-Sketch is equipped with two knobs which control the inner stylus. Each respective knob moves either longitudinally or laterally.

This recreation will allow interactive drawing, board reset/"shake-to-erase" and controls for resizing the board itself.

### Structure

A `div` will serve as the canvas. This is where all drawing will conspire.

Three other sections are instantiated, each as control panels: color, erase and resize controls.

Within each of the aforementioned sections are various buttons or inputs for adjusting user preference.

### Functionality

Drawing capabilities are produced with numerous `querySelector` and `EventListener`.

A more specific drawing style will also be added. This will allow the user to draw with constantly cycling random colors.

Here's the logic for such colors: `'#' + Math.floor(Math.random() * 16777215).toString(16);`.

With this, a hash sign is appended to the front of a randomly generated number. Additionally, this code will always produce a valid hex digit.

JavaScript will also handle the canvas resize.

To execute, the user will be prompted (via `alert`) to enter a number between 1 and 100 inclusive. The chosen number will be used when reloading the new canvas.

Under the hood: the custom size is saved, the grid (canvas) is reset and a fresh grid is then rendered boasting the requested dimensions.

### Style

Base-style for this project is light.

The feature of my core styles might be the background gradient.

For this gradient I merged three colors from separate angles and faded them into one another at center.

The predominant styling is satisfied via JavaScript. And much of those styles are enacted at the behest of `n:hover {}`.

A `@keyframes` is instantiated within the main stylesheet. This will allow a slight "shake" of the canvas as the grid is reset.

JavaScript is used to select the canvas container by class then injects a CSS `animation` which corresponds with `@keyframes` and together they fire the "shake animation".

## Final Thoughts

This was a gratifying project, as there's a decent amount of visible interaction.

It's interesting to build a functional program which acts surprisingly in the same manner as that of the original Etch-A-Sketch device.

Photo by <a href="https://unsplash.com/@kipic?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Dusan Kipic</a> on <a href="https://unsplash.com/s/photos/sketch?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
