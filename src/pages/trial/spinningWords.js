import { useState } from 'react';

import EditorInstance from '../../components/EditorInstance';
import TrialLayout from '../../components/TrialLayout';

import TrialStyles from '../../styles/Trial.module.scss';
import SpinningWordsStyles from '../../styles/SpinningWords.module.scss';

let spinWords = (words) => {
  return words.replace(/\w{5,}/g, function (w) {
    return w.split('').reverse().join('');
  });
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
      <section className={TrialStyles.report}>
        <h2 className={TrialStyles.headingTwo}>Description</h2>
        <p className={TrialStyles.reportContent}>
          Write a function that takes in a string of one or more words.
        </p>
        <p className={TrialStyles.reportContent}>Return the same string.</p>
        <p className={TrialStyles.reportContent}>
          All words with five or more letters within returned string should be
          reversed.
        </p>
        <p className={TrialStyles.reportContent}>
          Spaces will be included only when more than one word is present.
        </p>
        <h2 className={TrialStyles.headingTwo}>Initial strategy</h2>
        <p className={TrialStyles.reportContent}>
          Intial input will be a string of one or more words.
        </p>
        <p className={TrialStyles.reportContent}>
          Verify string input is not empty.
        </p>
        <p className={TrialStyles.reportContent}>
          Check each word or character in this string using an array.
        </p>
        <p className={TrialStyles.reportContent}>
          If string has contents, split individual items by space delimiters.
        </p>
        <p className={TrialStyles.reportContent}>
          Return an array wherein each of these items maintains positioning
          relative to that of the source string.
        </p>
        <p className={TrialStyles.reportContent}>
          If there is a single item within returned array, it can be reversed
          and returned.
        </p>
        <p className={TrialStyles.reportContent}>
          If that single item maintains a greater character length than four:
          split, reverse and rejoin.
        </p>
        <p className={TrialStyles.reportContent}>
          Returning the single-word reversed string.
        </p>
        <p className={TrialStyles.reportContent}>
          The same reversal process need now be executed for strings with
          multiple items.
        </p>
        <p className={TrialStyles.reportContent}>
          Iterate the array and perform the same process on each contained item.
        </p>
        <p className={TrialStyles.reportContent}>
          Append all items to a new array.
        </p>
        <p className={TrialStyles.reportContent}>
          In the newest array, items with character length of five or greater
          have now been reversed in place.
        </p>
        <p className={TrialStyles.reportContent}>
          Rejoin the array items into a string; return the string.
        </p>
        <h2 className={TrialStyles.headingTwo}>Improved Tactics</h2>
        <p className={TrialStyles.reportContent}>
          Intial input will be a string of one or more words.
        </p>
        <p className={TrialStyles.reportContent}>
          Return the passed string after following mutation.
        </p>
        <p className={TrialStyles.reportContent}>
          Split by space delimiters and check items has a character length of
          four or less.
        </p>
        <p className={TrialStyles.reportContent}>
          If item has character length greater than four: split, reverse and
          rejoin.
        </p>
        <p className={TrialStyles.reportContent}>
          If item has length of four or less, return item sans mutation.
        </p>
        <p className={TrialStyles.reportContent}>
          Once each item is .map(ped) into a new array, rejoin each modified
          item to create a single string.
        </p>
        <h2 className={TrialStyles.headingTwo}>Results</h2>
        <p className={TrialStyles.reportContent}>Three below approaches:</p>
        <ul className={TrialStyles.reportUl}>
          <li className={TrialStyles.reportLi}>The top Codewars submission</li>
          <li className={TrialStyles.reportLi}>A clever Codewars submission</li>
          <li className={TrialStyles.reportLi}>
            My initial Codewars submission
          </li>
        </ul>
      </section>
      <EditorInstance editorTitle='source' value={code} />
    </TrialLayout>
  );
}
