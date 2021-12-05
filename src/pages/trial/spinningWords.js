import { useState } from 'react';

import EditorInstance from '../../components/EditorInstance';
import TrialLayout from '../../components/TrialLayout';

import TrialStyles from '../../styles/Trial.module.scss';
import SpinningWordsStyles from '../../styles/SpinningWords.module.scss';

let spinWords = (words) => {
  return words
    .split(' ')
    .map(function (word) {
      return word.length > 4 ? word.split('').reverse().join('') : word;
    })
    .join(' ');
};

export default function SpinningWords() {
  const [phraseInput, setPhraseInput] = useState(
    'Some of these words are spun!'
  );

  const code = `// TOP SUBMISSION
function spinWords(words) {
  return words
    .split(' ')
    .map(function (word) {
      return word.length > 4
        ? word
          .split('')
          .reverse()
          .join('')
        : word;
    })
    .join(' ');
}

// CLEVER SUBMISSION
function spinWords(string) {
  return string.replace(/\w{5,}/g, function (w) {
    return w
      .split('')
      .reverse()
      .join('');
  });
}

// MY INITIAL SUBMISSION
function spinWords(string) {
  if (string === '') {
    return string;
  }

  const stringValidate = string.split(' ');

  if (stringValidate.length === 1) {
    if (string.length >= 5) {
      const splitString = string.split('');
      const reversedString = splitString.reverse();
      const joinedString = reversedString.join('');
      string = joinedString;
      return string;
    }

  } else if (stringValidate.length > 1) {
    const newReversedArray = [];

    stringValidate.forEach((stringWithin) => {
      if (stringWithin.length >= 5) {
        const splitStringWithin = stringWithin.split('');
        const reversedStringWithin = splitStringWithin.reverse();
        const joinedStringWithin = reversedStringWithin.join('');
        stringWithin = joinedStringWithin;
      }

      newReversedArray.push(stringWithin);
    });

    const newReversedString = newReversedArray.join(' ');

    return newReversedString;
  }
}
  `;

  return (
    <TrialLayout
      puzzleSourceHref='https://www.codewars.com/users/permalik'
      puzzleTitle='Spinning Words'
      puzzleType='codewars'
    >
      <p className={SpinningWordsStyles.demoParameters}>
        Some of these words are spun!
      </p>
      <button
        className={SpinningWordsStyles.demoButton}
        onClick={() =>
          setPhraseInput(
            phraseInput == 'Some of these words are spun!'
              ? spinWords('Some of these words are spun!')
              : 'Some of these words are spun!'
          )
        }
      >
        {phraseInput}
      </button>
      <section className={SpinningWordsStyles.report}>
        <h2 className={SpinningWordsStyles.headingTwo}>Description</h2>
        <p className={SpinningWordsStyles.description}>
          <span>
            Write a function that takes in a string of one or more words, and
            returns the same string, but with all five or more letter words
            reversed.
          </span>
          <span>
            Strings passed in will consist of only letters and spaces.
          </span>
          <span>
            Spaces will be included only when more than one word is present.
          </span>
        </p>
        <h2 className={SpinningWordsStyles.headingTwo}>Strategy</h2>
        <p className={SpinningWordsStyles.strategy}>
          <span>
            Intial input will be a string of one or more words
            <span className={SpinningWordsStyles.step}>
              Verify string input is not empty
            </span>
          </span>
          <span>
            I need to check each word or character in this string. An array
            should work
            <span className={SpinningWordsStyles.step}>
              If string has contents, split individual items by space delimiters
              &mdash; returning an array wherein each of these items maintains
              positioning relative to that of the source string
            </span>
          </span>
          <span>
            If there is a single item within returned array, it can be reversed
            and returned
            <span className={SpinningWordsStyles.step}>
              If that single item maintains a greater character length than
              four, then: split, reverse and rejoin it &mdash; returning a
              reversed string
            </span>
          </span>
          <span>
            Now I need to do the same reversal process for strings with multiple
            items
            <span className={SpinningWordsStyles.step}>
              Iterate the array and perform the prior process on each contained
              item. Append each item (reversal-agnostic) to a new array
            </span>
          </span>
          <span>
            In the most recent array, items with length of five or greater have
            been reversed in place. This array should be reassigned to a string
            <span className={SpinningWordsStyles.step}>
              Rejoin the array items into a string
            </span>
          </span>
        </p>
        <h2 className={SpinningWordsStyles.headingTwo}>Improved Tactics</h2>
        <p className={SpinningWordsStyles.tactics}>
          <span>
            Intial input will be a string of one or more words
            <span className={SpinningWordsStyles.step}>
              Return the passed string &mdash; but first: split by space
              delimiters, check if each item has a length of four or less
              <span className={SpinningWordsStyles.stepSpan}>
                If item has length greater than four, split item, reverse
                characters and rejoin
              </span>
              <span className={SpinningWordsStyles.stepSpan}>
                If item has length of four or less, return item sans
                modification
              </span>
              <span className={SpinningWordsStyles.stepSpan}>
                Once each item is .map(ped) into a new array, rejoin each
                modified item to create a single string
              </span>
            </span>
          </span>
        </p>
        <h2 className={SpinningWordsStyles.headingTwo}>Results</h2>
        <p className={SpinningWordsStyles.results}>
          <span>
            Three below approaches:
            <span className={SpinningWordsStyles.step}>
              The top Codewars submission
            </span>
            <span className={SpinningWordsStyles.step}>
              A clever Codewars submission
            </span>
            <span className={SpinningWordsStyles.step}>
              My initial Codewars submission
            </span>
          </span>
        </p>
      </section>
      <EditorInstance editorTitle='source' value={code} />
    </TrialLayout>
  );
}
