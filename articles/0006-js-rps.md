---
alt_text: "close-up angle of a rock's grooves in complete darkness"
author: 'Ty Malik'
cover_image: 'https://res.cloudinary.com/permalik/image/upload/v1638255351/article_006_js_rps.jpg'
description: 'Build a classic game'
excerpt: 'Browsers are web interfaces built for purposeful user interaction'
tags: ['internet', 'technology']
timestamp: '2021-06-13'
title: 'JavaScript Rock Paper Scissors'
---

Primary Outlook

The concept of RPS is simple. Three options for play are available, where one wins against the next and another against the next. The challenge for this project is to create a working game of RPS with a computer player and any given human user. In addition to the game's functionality, I decided to use limited CSS styling. Rather spend too much time on the overall look of the interface, I wrote some jS which enables infinite random color flipping on the game title heading. Here I will outline some of the processes I used.

HTML

My document structure calls for multiple section elements for a page header, user move list, display area for each rounds' results/scores and a place where the game's winner will be announced. Additionally, I will need a play button used to trigger the main jS function.

CSS

There is nothing particularly special about this project's styling. One thing worth pointing out, however, is the user move options (rock, paper and scissors) have been given a display of none. By removing them from the page, I let the play button act as a toggle for revealing each move.

JavaScript

Two main goals are accomplished through my jS code. Most paramount is the actual functionality of the game and the other is making my game title flash random colors (kind of like an old-school arcade game.)

Game Logic

A human user will be pitted against the computer; I'll need some events to offer user interactivity, plus a way for the computer to randomly determine its move.

User Selection

The user will have an option of rock, paper or scissors from the respective HTML buttons. Such buttons are made operable by selecting classes from DOM with querySelectorAll. Now my buttons exists as a nodelist which I will then use a forEach loop to cycle through. As forEach loops, an addEventListener of click is instantiated. Any click of the possible move options will assign the chosen move to a variable and let me use it in combination with computer move options. Once the desired move is determined via the textContent property, the next step will be providing the computer's decision.

Computer Selection

I need to specify an array of move options, such that the computer can randomize a selection. A moves array is added with rock, paper and scissors. Then my computerPlay function uses ~~(Math.random() \* moves.length) to iterate the moves array and return compMove. We have now our two selected moves for this round. Next comes the task of using conditionals to determine the round's winner.

Determine Winner

A draw or tie between user and computer will first be checked. Using a loose equality operator, any draw will cause displayScores() and displayResult('DRAW') to fire.

Comparing the user move against the losing computer move can be done by saying if (userMove == 'rock' && compMove == 'scissors'). A sequence of these three conditions will be measured for validity. If any of these evaluate to true, then userScore will be incremented by one point. Additionally, displayScores() and displayResult('User Won') will both fire.

Alternatively, when the computer wins a round, the reverse of these results will be produced from a condition met within an else clause.

The game is intended to span five respective victories; so once the userScore or compScore reaches five, the game winner is rendered onscreen and a setTimeout refreshes the page and readies it for the next game.

Victory Notification

Multiple functions exist for tracking scores and commenting about the round winner and overall victor. All of these functions manipulate HTML elements' text with textContent, inserting appropriate text for each given circumstance

Infinite Color Flipper

As a bonus, I made the RPS title flash rainbow with an event listener which checks for window load.

The colorRandomizer function operates with a setInterval by calling the colorMetrics function repeatedly.

With the colorMetrics function, the game heading title is manipulated with style.color. An if...else chain is instantiated and calls the infiniteColor function.

The magic is done within this last function. It uses Math.floor and Math.random to assign a hex string to my randomColor variable. Another check is performed with an isolated if statement; this will complete any non-7 character hex code with zeros to fulfill proper hex format (of # + 6 hex.)

Lastly, randomColor is then injected into the game heading styling.

Final Thoughts

This project was a great exercise in conditional statements and traversing the DOM. Using multiple instances of random number generation has made me more confident in using such a process in the future. Modularization was also certainly a benefit in reading how things were being triggered from one set of functionality to the next

Photo by <a href="https://unsplash.com/@fabiankozdon?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Fabian Kozdon</a> on <a href="https://unsplash.com/s/photos/rock?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
