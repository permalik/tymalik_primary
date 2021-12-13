---
alt_text: 'multiple bell alarm clocks on a wooden surface in a dim environment'
author: 'Ty Malik'
cover_image: 'https://res.cloudinary.com/permalik/image/upload/v1639354153/article_0005_js_twentyfive_timer.jpg'
description: 'Build a basic timer application'
excerpt: 'A JavaScript timer can be built with setTimeout and event listeners.'
tags:
  [
    'technology',
    'web development',
    'software engineering',
    'javascript',
    'css',
    html
  ]
timestamp: '2021-05-23'
title: 'JavaScript Twenty-Five Minute Timer'
---

## Primary Outlook

A JavaScript timer can be built with setTimeout and event listeners.

The application will countdown for twenty-five minutes and conclude with a signaling alarm.

Audio from an external web address should be used for the final alarm.

### Structure

The timer interface will boast a readout message displaying "Time Remaining".

Minutes and seconds will be rendered on the clock within `input` elements.

Lastly, a `button` can be used to start the timer.

### Functionality

Minutes and second values should first calculated and assigned to respective variables.

A function will be utilized for clearing the clock interface (min/sec) on `onload`.

With a series of functions, decrement capabilities are added to enable countdown of the timer.

The completion alarm is created with the `Audio()` constructor, issuing a new `HTMLAudioElement` instance.

### Style

Layout is handled with `flex`.

`width` and `height` adjust the sizes of particular components.

The timer delimiter (:) is made to flash with `keyframes`.

## Final Thoughts

Leveraging the `Audio()` to instantiate the alarm taught me the concept behind constructors.

The other primary lesson gleaned was manipulating time and its render in HTML.

Photo by <a href="https://unsplash.com/@ahmadossayli?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ahmad Ossayli</a> on <a href="https://unsplash.com/s/photos/timer?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
