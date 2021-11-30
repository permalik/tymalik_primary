---
alt_text: 'a whole fruit (orange) painted blue shown on the same color blue background'
author: 'Ty Malik'
cover_image: 'https://res.cloudinary.com/permalik/image/upload/v1638253430/article_004_js_color_switch.jpg'
description: 'Build an interactive color flipper'
excerpt: 'Browsers are web interfaces built for purposeful user interaction'
tags: ['internet', 'technology']
timestamp: '2021-05-09'
title: 'JavaScript Color Switch'
---

Primary Outlook

Building a color flipper requires some form of user input. I chose to use a math quiz to prompt for user input. After accurately answered questions a series of color switches are produced, which allow a user to momentarily paint the background of the viewport.

An empty Git repository is cloned from Github and the file structure is initialized in my chosen directory. In this project, I have used a main HTML, four CSS files (reset, color, font and main), a main JavaScript and lastly a README.md. Gulp will monitor and tidy my styling, leveraging PostCSS and Cssnano. Using Gulp as a taskrunner, I can easily apply autoprefixing and bundle together each of my CSS files.

HTML Structure

The HTML for this timer application is minimal. First, I insert a boilerplate. !DOCTYPE specifies my document as HTML. An html tag contains the remainder of my code, and the lang attribute is set to “en” for English. Next, a head element encloses meta, title and link tags.

My meta elements establish the usable character set, adjust HTTP response configuration and enable control over the viewports on which the application will be displayed.

The body tag encompasses the rest of my project’s structure; inside which, a main tag provides semantic meaning and wraps interior code.

I use a div as a page wrap to nest two sibling section elements. Inside these sections are where all the visible bits exist.

The first section element houses a div for containing my color switch interface. A culmination of tags (header, p, input and button) prompt the user to answer a math question, provide the initial question, give a place for user to input answers and create a button for checking such answers as being correct or not.

My second section element is used to insert the switch itself. Within this section is simply a button for user interactivity, and the button is a parent of a single span to display “: D” when the user succeeds in altering the color of the page background.

CSS Style

Browser CSS defaults are cleared with my reset.css file. I am using Eric Meyer’s v2 generic CSS reset.

The first goal is to center my switch console in the middle of the viewport. I make the b o d y element a flexbox and provide width and height dimensions of “100%” and “100vh”, respectively. These two dimensions will encourage stress-free sizing when it comes to any of my subsequent elements. Then, justify-content and align-items are set to center. My color switch now maintains a centered position in the viewport.

For page wrapping, I have a div with the class of .page-wrap. Some padding on the left and right will prevent my switch interface from contact with viewport sides. However, at small enough resolution, the interface will be too large for the screen and horizontal scroll will be made available. This is not currently a full production app, rather a learning experience, so I am more concerned with functionality and not exact responsiveness.

Button behaviors have been tweaked by adding cursor: pointer;. Also, the actual color button for switching and its container have been set to display: none;, such that render may be controlled by JavaScript (after correct user input). Majority of the remaining main CSS is written to apply subtle border-radius and a bit of padding/margin, to get the white space appropriate.

My color styling is straightforward. I’ve initially left the background transparent, to later be altered via JavaScript. I set color, background-color and box-shadow on the interface and button switch. Then, the button for submitting answers is animated with :hover pseudo class.

The body tag will be used to actually switch the background color with every correctly answered math question. Thus, by selecting the id of the body tag, css transition is applied. With this transition property, I prepare it for JavaScript manipulation; instantiated values include “background-color”, “1000ms” and “linear”.

Font styling for this project is very minimal. At the root, I have set font-size to “10px”; by using a round number, I will be able to better control “em” and “rem” units. In addition, font sizes and weights are adjusted.

JavaScript Behavior

Upon each correct answer input, the interface needs to be removed while the respective color switch is displayed. I select the answer button id and create a variable which can be used with the addEventListener method to respond when a user clicks by executing my “valQuestion” function.

The function “valQuestion” does just that, it fires when the corresponding question is matched with the valid user answer. Using an & statement, various other functions may then be called. The contained functions are designed to hide the switch activation interface, reveal the color switch, move the switch to a random position on the screen and increment the number of correct answers.

Randomly positioning the switch leverages Math.round and Math.random. The randomized values for viewport width and height are calculated from window.innerWidth/Height and clientWidth/Height. This process lets me get the inner viewport dimensions, subtract the dimensions of the color switch and add a bit of extra space to keep the color button from scraping the edges of the screen. Additionally, another event listener is used to appropriately position the switch if a user resizes the viewport. When on mobile devices, focusing on the answer input field automatically zooms. Thus, with the “resize” listener, color switches can still be set within the available bounds.

Incrementing the correct answer counter is valuable, as this is how each question in the math quiz is iteratively produced.

With every valid question input, ten color switches appear (each with different hues). The color of every switch corresponds with how the body background is styled and colorized.

A querySelector is used to select the button switch’s class. Then another event listener waits for the user to “click”. Upon user interactivity, the background transitions to the intended color and back to transparent while the button flashes black. Styling the button black allows it to contrast with the background, rather blending in and ultimately disappearing.

After each successful color switch, the button is prepared for the next color change and the user can attempt the next question.

Final Thoughts

Building this project has made me comfortable with selecting HTML elements from the DOM and manipulating them based off user input. Using if-else chains, I was able to successfully achieve functionality. The random positioning of button switches helped me understand the concept of random number generation. And writing functions for chronological user expectation, showed me how I should think about patterning my JavaScript source code.

I will be taking the knowledge from this project and utilizing it, such that I can add a theme switcher to my personal website/portfolio. This was my inspiration for creating this application from the beginning and I’m super excited to get this functionality added to my website.

Photo by <a href="https://unsplash.com/@davisuko?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">davisuko</a> on <a href="https://unsplash.com/s/photos/color-swap?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
