import Head from "next/head";
import {useState} from "react";

import EditorInstance from "../../components/common/editorInstance";
import TrialLayout from "../../components/content/trial/trialLayout";

import styles
  from "../../components/content/trial/trialLayout/TrialLayout.module.scss";
import instanceStyles from "../../styles/trial/SpinningWords.module.scss";

let spinWords = (words: any) => {
  return words.replace(/\w{5,}/g, function (w: string) {
    return w.split("").reverse().join("");
  });
};

const SpinningWords = () => {
  const [phraseInput, setPhraseInput] = useState(
    "Some of these words are spun!"
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
      puzzleSourceHref="https://www.codewars.com/users/permalik"
      puzzleTitle="Spinning Words"
      puzzleType="codewars"
    >
      <Head>
        <title>Codewars Trial | Spinning Words</title>
        <meta name="description" content="Codewars trial; Spinning Words"/>
        <meta name="keywords" content="software development, javascript"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <p className={instanceStyles.demoParameters}>
        Some of these words are spun!
      </p>
      <button
        className={instanceStyles.demoButton}
        onClick={() =>
          setPhraseInput(
            phraseInput == "Some of these words are spun!"
              ? spinWords("Some of these words are spun!")
              : "Some of these words are spun!"
          )
        }
      >
        {phraseInput}
      </button>
      <section className={styles.report}>
        <h2 className={styles.headingTwo}>Description</h2>
        <p className={styles.reportContent}>
          Write a function that takes in a string of one or more words.
        </p>
        <p className={styles.reportContent}>Return the same string.</p>
        <p className={styles.reportContent}>
          All words with five or more letters within returned string should be
          reversed.
        </p>
        <p className={styles.reportContent}>
          Spaces will be included only when more than one word is present.
        </p>
        <h2 className={styles.headingTwo}>Initial strategy</h2>
        <p className={styles.reportContent}>
          Intial input will be a string of one or more words.
        </p>
        <p className={styles.reportContent}>
          Verify string input is not empty.
        </p>
        <p className={styles.reportContent}>
          Check each word or character in this string using an array.
        </p>
        <p className={styles.reportContent}>
          If string has contents, split individual items by space delimiters.
        </p>
        <p className={styles.reportContent}>
          Return an array wherein each of these items maintains positioning
          relative to that of the source string.
        </p>
        <p className={styles.reportContent}>
          If there is a single item within returned array, it can be reversed
          and returned.
        </p>
        <p className={styles.reportContent}>
          If that single item maintains a greater character length than four:
          split, reverse and rejoin.
        </p>
        <p className={styles.reportContent}>
          Returning the single-word reversed string.
        </p>
        <p className={styles.reportContent}>
          The same reversal process need now be executed for strings with
          multiple items.
        </p>
        <p className={styles.reportContent}>
          Iterate the array and perform the same process on each contained item.
        </p>
        <p className={styles.reportContent}>
          Append all items to a new array.
        </p>
        <p className={styles.reportContent}>
          In the newest array, items with character length of five or greater
          have now been reversed in place.
        </p>
        <p className={styles.reportContent}>
          Rejoin the array items into a string; return the string.
        </p>
        <h2 className={styles.headingTwo}>Improved Tactics</h2>
        <p className={styles.reportContent}>
          Intial input will be a string of one or more words.
        </p>
        <p className={styles.reportContent}>
          Return the passed string after following mutation.
        </p>
        <p className={styles.reportContent}>
          Split by space delimiters and check items has a character length of
          four or less.
        </p>
        <p className={styles.reportContent}>
          If item has character length greater than four: split, reverse and
          rejoin.
        </p>
        <p className={styles.reportContent}>
          If item has length of four or less, return item sans mutation.
        </p>
        <p className={styles.reportContent}>
          Once each item is .map(ped) into a new array, rejoin each modified
          item to create a single string.
        </p>
        <h2 className={styles.headingTwo}>Results</h2>
        <p className={styles.reportContent}>Three below approaches:</p>
        <ul className={styles.reportUl}>
          <li className={styles.reportLi}>The top Codewars submission</li>
          <li className={styles.reportLi}>A clever Codewars submission</li>
          <li className={styles.reportLi}>
            My initial Codewars submission
          </li>
        </ul>
      </section>
      <EditorInstance value={code}/>
    </TrialLayout>
  );
};

export default SpinningWords;