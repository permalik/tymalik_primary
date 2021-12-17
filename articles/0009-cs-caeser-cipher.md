---
alt_text: 'Various scattered keyboard keys and an open pad lock on a dark surface with dim red-tinted lighting'
author: 'Ty Malik'
cover_image: 'https://res.cloudinary.com/permalik/image/upload/v1639691049/article_0009_cs_caeser_cipher.jpg'
description: 'Build a Caeser Cipher Encryptor and Decryptor'
excerpt: 'Encrypt/Decrypt individual characters via (alphabet position) shift value'
tags: ['technology', 'software engineering', 'csharp']
timestamp: '2021-12-16'
title: 'C# Caeser Cipher'
---

## Primary Outlook

This is the first project I have built with C#.

The scope of this article will thereby touch on the construction the Cipher, as well as some particulars related to C# development.

**Intended functionality for this application includes:**

- Accept textual user input
- Account for both single word and multi-word strings
- Encrypt/Decrypt individual characters via (alphabet position) shift value
- Output respective values subsequent to intended mutation

### Logic

I will be writing two programs intended for execution via CLI.

Such programs will be able to run side-by-side, allowing both encryption and decryption.

As previously mentioned, user input will be accepted and will serve as the text for encryption.

Input can be both prompted for and received by leveraging `Console.WriteLine();` and `Console.ReadLine();`.

Any code meant to handle user interactivity will exist within the driver code block.

`public static StringBuilder Encrypt(String text, int shift)` will allow me to both construct a new `StringBuilder` instance and mutate the user input with a certain `shift`.

`public` creates a class which may be accessed from other points within the code.

`static` indicates the class as being of its own inception. Alternatively, an instance class is that which is derived from another parent class.

Decryption uses the same method. However, the difference is a necessity to ensure shifts do not exceed the alphabet range. Without this added functionality some shifts will improperly return symbols.

The logic for shifting characters is comprised of multiple `if () {}` `else () {}` conditions and standard `for () {}` loops.

First I determine the quantity of words in the given string.

If but one word is provided for encryption, it is simply passed through a loop and appropriately shifted N number of positions (thus reassigning the proper value.)

When working with a multi-word string, the string is converted to an array and an extra loop is instantiated so each word may be properly manipulated.

The output for each loop will be an encrypted charcter which is appended to the (to-be) returned result.

When handling multi-word strings, there again is an extra step. The following covers how I handle this final process.

Once the single encrypted word is returned, it is then appended to another `StringBuilder` instance. This latest instance will will leverage the initial instances, convert them `ToString()` and append them appropriately.

The driver code will then wait for such calculations and return the encrpyted/decrypted message.

## Final Thoughts

Having never implemented encryption, this project was exciting. The Caeser Cipher technique is straightforward and simply understood from both the development and end-user perspective.

That said, the most interesting piece of information I learned through this process was in regard to the fingerprint of a language.

Such a fingerprint can be defined as the frequency at which any given letter occurs in speech or text.

Measuring the fingerprint against a cipher can be useful in decryption.

If a given set of characters occur at N frequencies, each of said N frequencies can be compared with those of the language fingerprint.

By accurately determining the relationship between frequencies, the cipher may be decrypted.

On programming in C#, I was able to better familiarize myself with constructors and the concept of driver code. Apart from the numerous similarities to JavaScript, these two concepts are less common.

Photo by <a href="https://unsplash.com/@flyd2069?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">FLY:D</a> on <a href="https://unsplash.com/s/photos/lock?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
