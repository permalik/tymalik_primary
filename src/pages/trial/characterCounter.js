import Head from 'next/head';
import { useState } from 'react';

import EditorInstance from '../../components/EditorInstance';
import TrialLayout from '../../components/TrialLayout';

import TrialStyles from '../../components/TrialLayout/Trial.module.scss';
import CharacterCounterStyles from './CharacterCounter.module.scss';

export default function WhoLikesit() {
  let defaultState = 'Sammamish';

  const [count, setCount] = useState(defaultState);

  function changeCount(state) {
    switch (state) {
      case defaultState:
        setCount('{S: 1, a: 2, m: 3, i: 1, s: 1, h: 1}');
        break;
      case '{S: 1, a: 2, m: 3, i: 1, s: 1, h: 1}':
        setCount(defaultState);
        break;
      default:
        setCount('{S: 1, a: 2, m: 3, i: 1, s: 1, h: 1}');
        defaultState = count;
        null;
    }
  }

  function resultsRenderer(results) {
    switch (results) {
      case defaultState:
        return 'Sammamish';
      case '{S: 1, a: 2, m: 3, i: 1, s: 1, h: 1}':
        return '{S: 1, a: 2, m: 3, i: 1, s: 1, h: 1}';
      default:
        return 'Sammamish';
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
      puzzleSourceHref='https://www.codewars.com/users/permalik'
      puzzleTitle='Character Counter'
      puzzleType='codewars'
    >
      <Head>
        <title>Codewars Trial | Character Counter</title>
        <meta name='description' content='Codewars trial; Character Counter' />
        <meta name='keywords' content='software development, javascript' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <p className={CharacterCounterStyles.demoParameters}>Sammamish</p>
      <button
        className={CharacterCounterStyles.demoButton}
        onClick={() => {
          changeCount(count);
        }}
      >
        {resultsRenderer(count)}
      </button>
      <section className={TrialStyles.report}>
        <h2 className={TrialStyles.headingTwo}>Description</h2>
        <p className={TrialStyles.reportContent}>Begin with a string.</p>
        <p className={TrialStyles.reportContent}>
          Count and return all the occurring characters in the string.
        </p>
        <p className={TrialStyles.reportContent}>
          If you have a string like aba, the result should be:
        </p>
        <ul className={TrialStyles.reportUl}>
          <li>{'{ a: 2, b: 1 }'}</li>
        </ul>
        <p className={TrialStyles.reportContent}>
          If the string is empty, the result should be an empty object literal:
        </p>
        <ul className={TrialStyles.reportUl}>
          <li>{'{}'}</li>
        </ul>
        <h2 className={TrialStyles.headingTwo}>Initial strategy</h2>

        <p className={TrialStyles.reportContent}>
          Input will be a given string.
        </p>
        <p className={TrialStyles.reportContent}>
          Return the result, post mutatation. Or return an empty object literal.
        </p>
        <p className={TrialStyles.reportContent}>Split string by characters.</p>
        <p className={TrialStyles.reportContent}>
          Return the list of accumulated totals by determining the frequency at
          which each occur.
        </p>

        <h2 className={TrialStyles.headingTwo}>Improved tactics</h2>
        <p className={TrialStyles.reportContent}>
          Input will be a given string.
        </p>
        <p className={TrialStyles.reportContent}>
          Instantiate a variable as an object literal.
        </p>
        <p className={TrialStyles.reportContent}>Split string by characters.</p>
        <p className={TrialStyles.reportContent}>
          Traverse each character, determining the frequency at which each
          occur.
        </p>
        <p className={TrialStyles.reportContent}>
          Return the result, post mutatation. Or return an empty object literal.
        </p>

        <h2 className={TrialStyles.headingTwo}>Results</h2>
        <p className={TrialStyles.reportContent}>Three below approaches:</p>
        <ul className={TrialStyles.reportUl}>
          <li className={TrialStyles.reportLi}>The top Codewars submission</li>
          <li className={TrialStyles.reportListItem}>
            A clever Codewars submission
          </li>
          <li className={TrialStyles.reportListItem}>
            My initial Codewars submission
          </li>
        </ul>
      </section>
      <h2 className={TrialStyles.editorHeading}>Source</h2>
      <EditorInstance editorTitle='source' tabIndex='-1' value={code} />
    </TrialLayout>
  );
}
