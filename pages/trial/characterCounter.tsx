import Head from "next/head";
import {useState} from "react";

import EditorInstance from "../../components/common/editorInstance";
import TrialLayout from "../../components/content/trial/trialLayout";

import styles
  from "../../components/content/trial/trialLayout/TrialLayout.module.scss";
import instanceStyles from "../../styles/trial/CharacterCounter.module.scss";

const CharacterCounter = () => {
  let defaultState = "Sammamish";

  const [count, setCount] = useState(defaultState);

  function changeCount(state: any) {
    switch (state) {
      case defaultState:
        setCount("{S: 1, a: 2, m: 3, i: 1, s: 1, h: 1}");
        break;
      case "{S: 1, a: 2, m: 3, i: 1, s: 1, h: 1}":
        setCount(defaultState);
        break;
      default:
        setCount("{S: 1, a: 2, m: 3, i: 1, s: 1, h: 1}");
        defaultState = count;
        null;
    }
  }

  function resultsRenderer(results: any) {
    switch (results) {
      case defaultState:
        return "Sammamish";
      case "{S: 1, a: 2, m: 3, i: 1, s: 1, h: 1}":
        return "{S: 1, a: 2, m: 3, i: 1, s: 1, h: 1}";
      default:
        return "Sammamish";
    }
  }

  const code = `// TOP SUBMISSION
function count (string) {
  var count = {};
  string.split('').forEach(function(s) {
      count[s] ? count[s]++ : count[s] = 1;
  });
  return count;
}

// CLEVER SUBMISSION
const count = string =>
  [...string].reduce((pre, val) => (pre[val] = -~pre[val], pre), {});

// MY INITIAL SUBMISSION
function count (string) {
  return string.split('').reduce((characterList, char) => {
    characterList[char] ? characterList[char]++ : characterList[char] = 1;
    return characterList;
  }, {});
}
  `;

  return (
    <TrialLayout
      puzzleSourceHref="https://www.codewars.com/users/permalik"
      puzzleTitle="Character Counter"
      puzzleType="codewars"
    >
      <Head>
        <title>Codewars Trial | Character Counter</title>
        <meta name="description" content="Codewars trial; Character Counter"/>
        <meta name="keywords" content="software development, javascript"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <p className={instanceStyles.demoParameters}>Sammamish</p>
      <button
        className={instanceStyles.demoButton}
        onClick={() => {
          changeCount(count);
        }}
      >
        {resultsRenderer(count)}
      </button>
      <section className={styles.report}>
        <h2 className={styles.headingTwo}>Description</h2>
        <p className={styles.reportContent}>Begin with a string.</p>
        <p className={styles.reportContent}>
          Count and return all the occurring characters in the string.
        </p>
        <p className={styles.reportContent}>
          If you have a string like aba, the result should be:
        </p>
        <ul className={styles.reportUl}>
          <li>{"{ a: 2, b: 1 }"}</li>
        </ul>
        <p className={styles.reportContent}>
          If the string is empty, the result should be an empty object literal:
        </p>
        <ul className={styles.reportUl}>
          <li>{"{}"}</li>
        </ul>
        <h2 className={styles.headingTwo}>Initial strategy</h2>

        <p className={styles.reportContent}>
          Input will be a given string.
        </p>
        <p className={styles.reportContent}>
          Return the result, post mutatation. Or return an empty object literal.
        </p>
        <p className={styles.reportContent}>Split string by characters.</p>
        <p className={styles.reportContent}>
          Return the list of accumulated totals by determining the frequency at
          which each occur.
        </p>

        <h2 className={styles.headingTwo}>Improved tactics</h2>
        <p className={styles.reportContent}>
          Input will be a given string.
        </p>
        <p className={styles.reportContent}>
          Instantiate a variable as an object literal.
        </p>
        <p className={styles.reportContent}>Split string by characters.</p>
        <p className={styles.reportContent}>
          Traverse each character, determining the frequency at which each
          occur.
        </p>
        <p className={styles.reportContent}>
          Return the result, post mutatation. Or return an empty object literal.
        </p>

        <h2 className={styles.headingTwo}>Results</h2>
        <p className={styles.reportContent}>Three below approaches:</p>
        <ul className={styles.reportUl}>
          <li className={styles.reportLi}>The top Codewars submission</li>
          <li className={styles.reportListItem}>
            A clever Codewars submission
          </li>
          <li className={styles.reportListItem}>
            My initial Codewars submission
          </li>
        </ul>
      </section>
      <h2 className={styles.editorHeading}>Source</h2>
      <EditorInstance value={code}/>
    </TrialLayout>
  );
};

export default CharacterCounter;