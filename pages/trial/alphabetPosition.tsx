import Head from "next/head";
import {useState} from "react";

import EditorInstance from "@components/common/editorInstance";
import TrialLayout from "@components/content/trial/trialLayout";

import styles
  from "../../components/content/trial/trialLayout/TrialLayout.module.scss";
import instanceStyles
  from "../../styles/trial/AlphabetPosition.module.scss";

function alphabetPosition(text: any) {
  return text
    .toUpperCase()
    .match(/[a-z]/gi)
    .map((c: string) => c.charCodeAt(0) - 64)
    .join(",");
}

const AlphabetPosition = () => {
  const [randomPhrase, setRandomPhrase] = useState("rassa collapse");

  let code = `// TOP SUBMISSION
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
      puzzleSourceHref="https://www.codewars.com/users/permalik"
      puzzleTitle="Alphabet Position"
      puzzleType="codewars"
    >
      <Head>
        <title>Codewars Trial | Alphabet Position</title>
        <meta name="description" content="Codewars trial; Alphabet Position"/>
        <meta name="keywords" content="software development, javascript"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <p className={instanceStyles.demoParameters}>rassa collapse</p>
      <button
        className={instanceStyles.demoButton}
        onClick={() => {
          setRandomPhrase(
            randomPhrase === "rassa collapse"
              ? alphabetPosition(randomPhrase)
              : "rassa collapse"
          );
        }}
        suppressHydrationWarning
      >
        {randomPhrase}
      </button>
      <section className={styles.report}>
        <h2 className={styles.headingTwo}>Description</h2>
        <p className={styles.reportContent}>Accept a string as input.</p>
        <p className={styles.reportContent}>
          Replace every letter with its proper alphabet position.
        </p>
        <p className={styles.reportContent}>
          Return a string of space-delimited integers.
        </p>
        <p className={styles.reportContent}>
          If a non-letter character is within the string, ignore it. Do not
          return it.
        </p>
        <h2 className={styles.headingTwo}>Initial strategy</h2>
        <p className={styles.reportContent}>
          Intial input will be a string of one or more words.
        </p>
        <p className={styles.reportContent}>
          Iterate the string using regex to determine what which are letters and
          not.
        </p>
        <p className={styles.reportContent}>
          Convert any letters to lower-case and push onto a new array.
        </p>
        <p className={styles.reportContent}>
          Iterate the lower-case letter array, consecutively converting letters
          to character codes.
        </p>
        <p className={styles.reportContent}>
          Push each character code onto a new array, returning the new array.
        </p>
        <p className={styles.reportContent}>
          Create a new array from my character code array, where each contained
          item represents a particular position in the alphabet.
        </p>
        <p className={styles.reportContent}>
          Iterate the character code array, performing calculations on each
          item.
        </p>
        <p className={styles.reportContent}>
          Such calculations should produce an alphabet position by determining
          the relational difference between unicode value and index value of the
          current array item.
        </p>
        <p className={styles.reportContent}>
          Return the calculations as yet another new array.
        </p>
        <p className={styles.reportContent}>
          This last array contains each appropriate alphabet position relative
          to the initial string input.
        </p>
        <p className={styles.reportContent}>
          Join the final array into a string, assign that string to a variable
          and return the string variable.
        </p>
        <h2 className={styles.headingTwo}>Improved tactics</h2>
        <p className={styles.reportContent}>
          Intial input will be a string of one or more words.
        </p>
        <p className={styles.reportContent}>
          Return the passed string after mutating.
        </p>
        <p className={styles.reportContent}>
          Send each character to uppercase or lowercase.
        </p>
        <p className={styles.reportContent}>
          Use regex to identify (case-agnostic) letters.
        </p>
        <p className={styles.reportContent}>
          .map through each character, converting the unicode value to the
          corresponding alphabet position.
        </p>
        <p className={styles.reportContent}>
          Join the items from the array into a string, then return the string.
        </p>
        <h2 className={styles.headingTwo}>Results</h2>
        <p className={styles.reportContent}>Three below approaches:</p>
        <ul className={styles.reportUl}>
          <li className={styles.reportli}>The top Codewars submission</li>
          <li className={styles.reportli}>
            The alternative Codewars submission
          </li>
          <li className={styles.reportli}>
            My initial Codewars submission
          </li>
        </ul>
      </section>
      <EditorInstance value={code}/>
    </TrialLayout>
  );
};

export default AlphabetPosition;