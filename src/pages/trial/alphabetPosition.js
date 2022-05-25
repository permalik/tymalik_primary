import Head from 'next/head';
import { useState } from 'react';

import EditorInstance from '../../components/EditorInstance';
import TrialLayout from '../../components/TrialLayout';

import TrialStyles from '../../components/TrialLayout/Trial.module.scss';
import AlphabetPositionStyles from './AlphabetPosition.module.scss';

function alphabetPosition(text) {
  return text
    .toUpperCase()
    .match(/[a-z]/gi)
    .map((c) => c.charCodeAt() - 64)
    .join(' ');
}

export default function AlphabetPosition() {
  const [randomPhrase, setRandomPhrase] = useState('rassa collapse');

  const code = `// TOP SUBMISSION
function alphabetPosition(text) {
  return text
    .toUpperCase()
    .match(/[a-z]/gi)
    .map((c) => c.charCodeAt() - 64)
    .join(' ');
}

// ALTERNATIVE SUBMISSION
function alphabetPosition(text) {
  var result = '';
  for (var i = 0; i < text.length; i++) {
    var code = text
    .toUpperCase()
    .charCodeAt(i);
    if (code > 64 && code < 91) result += code - 64 + ' ';
  }

  return result.slice(0, result.length - 1);
}

// MY INITIAL SUBMISSION
function alphabetPosition(string) {
  const charArray = [];
  let codeArray = [];
  const codeToIndexAdjuster = 96;
  let indexArray = [];
  const regex = /[a-zA-Z]/;

  [...string].forEach((rawCharacter) => {
    if (regex.test(rawCharacter)) {
      charArray.push(rawCharacter.toLowerCase());
    }
  });

  const charToCodeConverter = (someArray) => {
    let initialCodeArray = [];
    for (char of someArray) {
      let rawCharCode = char.charCodeAt(0);
      initialCodeArray.push(rawCharCode);
    }
    return initialCodeArray;
  };

  codeArray = charToCodeConverter(charArray);

  const codeToIndexConverter = (someOtherArray) => {
    let initialIndexArray = [];
    for (code of someOtherArray) {
      let codeIndexPosition = code - codeToIndexAdjuster;
      initialIndexArray.push(codeIndexPosition);
    }
    return initialIndexArray;
  };

  indexArray = codeToIndexConverter(codeArray).join(' ');

  return indexArray;
}
  `;

  return (
    <TrialLayout
      puzzleSourceHref='https://www.codewars.com/users/permalik'
      puzzleTitle='Alphabet Position'
      puzzleType='codewars'
    >
      <Head>
        <title>Codewars Trial | Alphabet Position</title>
        <meta name='description' content='Codewars trial; Alphabet Position' />
        <meta name='keywords' content='software development, javascript' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <p className={AlphabetPositionStyles.demoParameters}>rassa collapse</p>
      <button
        className={AlphabetPositionStyles.demoButton}
        onClick={() => {
          setRandomPhrase(
            randomPhrase === 'rassa collapse'
              ? alphabetPosition(randomPhrase)
              : 'rassa collapse'
          );
        }}
        suppressHydrationWarning
      >
        {randomPhrase}
      </button>
      <section className={TrialStyles.report}>
        <h2 className={TrialStyles.headingTwo}>Description</h2>
        <p className={TrialStyles.reportContent}>Accept a string as input.</p>
        <p className={TrialStyles.reportContent}>
          Replace every letter with its proper alphabet position.
        </p>
        <p className={TrialStyles.reportContent}>
          Return a string of space-delimited integers.
        </p>
        <p className={TrialStyles.reportContent}>
          If a non-letter character is within the string, ignore it. Do not
          return it.
        </p>
        <h2 className={TrialStyles.headingTwo}>Initial strategy</h2>
        <p className={TrialStyles.reportContent}>
          Intial input will be a string of one or more words.
        </p>
        <p className={TrialStyles.reportContent}>
          Iterate the string using regex to determine what which are letters and
          not.
        </p>
        <p className={TrialStyles.reportContent}>
          Convert any letters to lower-case and push onto a new array.
        </p>
        <p className={TrialStyles.reportContent}>
          Iterate the lower-case letter array, consecutively converting letters
          to character codes.
        </p>
        <p className={TrialStyles.reportContent}>
          Push each character code onto a new array, returning the new array.
        </p>
        <p className={TrialStyles.reportContent}>
          Create a new array from my character code array, where each contained
          item represents a particular position in the alphabet.
        </p>
        <p className={TrialStyles.reportContent}>
          Iterate the character code array, performing calculations on each
          item.
        </p>
        <p className={TrialStyles.reportContent}>
          Such calculations should produce an alphabet position by determining
          the relational difference between unicode value and index value of the
          current array item.
        </p>
        <p className={TrialStyles.reportContent}>
          Return the calculations as yet another new array.
        </p>
        <p className={TrialStyles.reportContent}>
          This last array contains each appropriate alphabet position relative
          to the initial string input.
        </p>
        <p className={TrialStyles.reportContent}>
          Join the final array into a string, assign that string to a variable
          and return the string variable.
        </p>
        <h2 className={TrialStyles.headingTwo}>Improved tactics</h2>
        <p className={TrialStyles.reportContent}>
          Intial input will be a string of one or more words.
        </p>
        <p className={TrialStyles.reportContent}>
          Return the passed string after mutating.
        </p>
        <p className={TrialStyles.reportContent}>
          Send each character to uppercase or lowercase.
        </p>
        <p className={TrialStyles.reportContent}>
          Use regex to identify (case-agnostic) letters.
        </p>
        <p className={TrialStyles.reportContent}>
          .map through each character, converting the unicode value to the
          corresponding alphabet position.
        </p>
        <p className={TrialStyles.reportContent}>
          Join the items from the array into a string, then return the string.
        </p>
        <h2 className={TrialStyles.headingTwo}>Results</h2>
        <p className={TrialStyles.reportContent}>Three below approaches:</p>
        <ul className={TrialStyles.reportUl}>
          <li className={TrialStyles.reportli}>The top Codewars submission</li>
          <li className={TrialStyles.reportli}>
            The alternative Codewars submission
          </li>
          <li className={TrialStyles.reportli}>
            My initial Codewars submission
          </li>
        </ul>
      </section>
      <EditorInstance editorTitle='source' value={code} />
    </TrialLayout>
  );
}
