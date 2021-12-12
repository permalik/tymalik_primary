import Head from 'next/head';
import { useState } from 'react';

import FoundationLayout from '../../components/FoundationLayout';

import LinearSearchStyles from '../../styles/LinearSearch.module.scss';

const orderedRange = Array.apply(0, new Array(10)).map(function (_, i) {
  return i + 1;
});

const shuffledRange = orderedRange.sort(function (a, b) {
  return Math.random() > 0.5;
});

const randomNumber = ~~(Math.random() * 10) + 1;

const summary =
  'Sequentially iterate a given selection checking each individual item. Determine if current item meets expectation by measuring against preestablished criteria.';

const code = `// Generate array ranging 1-10
const orderedRange = Array.apply(0,new Array(10)).map(function(_,i){ return i+1 });

// Shuffle the array
const shuffledRange = orderedRange.sort(function (a, b) {
  return Math.random() > 0.5;
});

// Generate random number
const randomNumber = ~~(Math.random() * 10) + 1;

// Create variable for target value
let targetValue = 0;

// Create function to iterate array
// Assign targetValue the proper numeric value
const findRandomNumber = function (array) {
  array.forEach((number) => {
    if (number === randomNumber) {
      targetValue = number;
    } else {
      return "Not found";
    }
  });
};)

// Call function
findRandomNumber(shuffledRange);
`;

export default function LinearSearch() {
  const [renderResult, setRenderResult] = useState(false);

  const toggleState = function () {
    renderResult === false ? setRenderResult(true) : setRenderResult(false);
  };

  return (
    <FoundationLayout
      bestCase='O(1)'
      editorCode={code}
      description={summary}
      foundationTitle='Linear Search'
      worstCase='O(n)'
    >
      <Head>
        <title>Foundation | Linear Search</title>
        <meta
          name='description'
          content='Algorithm Foundation; Linear Search'
        />
        <meta
          name='keywords'
          content='software development, foundation, algorithm, search, linear search'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <section>
        <h2 className={LinearSearchStyles.headingTwo}>Find {randomNumber}</h2>
        <div className={LinearSearchStyles.demoParameters}>
          <ul className={LinearSearchStyles.parameterList}>
            {shuffledRange.map((number, index) => (
              <li key={index}>{number}</li>
            ))}
          </ul>
        </div>
        <div
          className={LinearSearchStyles.demoResults}
          suppressHydrationWarning
        >
          {renderResult ? (
            <ul className={LinearSearchStyles.resultList}>
              {shuffledRange.map((number, index) =>
                number === randomNumber ? (
                  <li className={LinearSearchStyles.solutionLi} key={index}>
                    {number}
                  </li>
                ) : (
                  <li className={LinearSearchStyles.standardLi} key={index}>
                    {number}
                  </li>
                )
              )}
            </ul>
          ) : (
            <p className={LinearSearchStyles.resultPlaceholder}>
              👇 click to solve
            </p>
          )}
        </div>
        <button
          className={LinearSearchStyles.solveButton}
          onClick={() => toggleState()}
        >
          solve
        </button>
      </section>
    </FoundationLayout>
  );
}
