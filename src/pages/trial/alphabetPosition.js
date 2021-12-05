import { useState } from 'react';

import EditorInstance from '../../components/EditorInstance';
import TrialLayout from '../../components/TrialLayout';

import TrialStyles from '../../styles/Trial.module.scss';
import AlphabetPositionStyles from '../../styles/AlphabetPosition.module.scss';

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
      <section className={AlphabetPositionStyles.report}>
        <h2 className={AlphabetPositionStyles.headingTwo}>Description</h2>
        <p className={AlphabetPositionStyles.description}>
          <span>Take a string</span>
          <span>
            Replace every letter with its position in the alphabet &mdash;
            return a string of space-delimited integers
          </span>
          <span>
            If a non-letter character is found in the string, ignore it and do
            not return it
          </span>
        </p>
        <h2 className={AlphabetPositionStyles.headingTwo}>Strategy</h2>
        <p className={AlphabetPositionStyles.strategy}>
          <span>
            Intial input will be a string of one or more words
            <span className={AlphabetPositionStyles.step}>
              Iterate the string, using regex to determine what is and is not a
              letter
              <span className={AlphabetPositionStyles.stepSpan}>
                Convert any letters to lower-case and push onto a new array
              </span>
            </span>
          </span>
          <span>
            I have a newly-populated array of lower-case letters. Each item in
            the array needs be converted to its respective character code
            <span className={AlphabetPositionStyles.step}>
              Iterate the lower-case letter array, consecutively converting one
              letter at a time into character code
              <span className={AlphabetPositionStyles.stepSpan}>
                Push each character code onto a new array &mdash; returning the
                new array
              </span>
            </span>
          </span>
          <span>
            Next I should create a new array from my character code array, where
            each contained item represents a particular position in the alphabet
            <span className={AlphabetPositionStyles.step}>
              Iterate the character code array and perform a calculation on each
              item
              <span className={AlphabetPositionStyles.stepSpan}>
                Such calculation should derive an alphabet position by
                determining the relational difference between unicode value and
                index value of the current array
              </span>
              <span className={AlphabetPositionStyles.stepSpan}>
                Return the calculations as yet another array
              </span>
            </span>
          </span>
          <span>
            The last array contains each appropriate alphabet position relative
            to the initial string input. All that&rsquo;s left is converting the
            array back into a string
            <span className={AlphabetPositionStyles.step}>
              With the final array, assign the joined array or string value to a
              new variable &mdash; return the string
            </span>
          </span>
        </p>
        <h2 className={AlphabetPositionStyles.headingTwo}>Improved Tactics</h2>
        <p className={AlphabetPositionStyles.tactics}>
          <span>
            Intial input will be a string of one or more words
            <span className={AlphabetPositionStyles.step}>
              Return the passed string &mdash; but first: send each character to
              uppercase (or lowercase), then use regex to match any letter
              (case-agnostic)
              <span className={AlphabetPositionStyles.stepSpan}>
                .map through each character, converting the unicode value to the
                corresponding alphabet position
              </span>
              <span className={AlphabetPositionStyles.stepSpan}>
                Join the items from the array into a string
              </span>
            </span>
          </span>
        </p>
        <h2 className={AlphabetPositionStyles.headingTwo}>Results</h2>
        <p className={AlphabetPositionStyles.results}>
          <span>
            Three below approaches:
            <span className={AlphabetPositionStyles.step}>
              The top Codewars submission
            </span>
            <span className={AlphabetPositionStyles.step}>
              The alternative Codewars submission
            </span>
            <span className={AlphabetPositionStyles.step}>
              My initial Codewars submission
            </span>
          </span>
        </p>
      </section>
      <EditorInstance editorTitle='source' value={code} />
    </TrialLayout>
  );
}
