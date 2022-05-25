import Head from 'next/head';
import { useState } from 'react';

import FoundationLayout from '../../components/FoundationLayout';

import styles from './IterativeBinarySearch.module.scss';

const orderedRange = Array.apply(0, new Array(10)).map(function (_, i) {
  return i + 1;
});

const randomNumber = ~~(Math.random() * 20) + 1;

let targetValue = 0;

const iterativeBinarySearch = function (array, targetValue) {
  let leftMostItem = 0;
  let rightMostItem = array.length - 1;
  let centerItem;

  while (rightMostItem >= leftMostItem) {
    centerItem = leftMostItem + Math.floor((rightMostItem - leftMostItem) / 2);

    if (array[centerItem] === targetValue) {
      return (
        <li className={styles.solutionLi} key={centerItem}>
          {centerItem + 1}
        </li>
      );
    } else if (array[centerItem] > targetValue) rightMostItem = centerItem - 1;
    else leftMostItem = centerItem + 1;
  }
  return (
    <li className={styles.solutionLi} key={-1}>
      -1
    </li>
  );
};

const summary =
  'Traverse the values of a selection by beginning search from the center index position. Progressively check left/right, determinant upon the relation of the search value in comparison to the selection elements.';

const code = `// Generate sorted array ranging 1-10
const orderedRange = Array.apply(0,new Array(10)).map(function(_,i){ return i+1 });

// Generate random number for search
const randomNumber = ~~(Math.random() * 20) + 1;

// Create function to iterate selection
// If value is successfully located, return value
// If value is not within selection, return -1
const iterativeBinarySearch = function (array, targetValue) {
  let leftMostItem = 0;
  let rightMostItem = array.length - 1;
  let centerItem;

  while (rightMostItem >= leftMostItem) {
  centerItem = leftMostItem + Math.floor((rightMostItem - leftMostItem) / 2);

  if (array[centerItem] == targetValue) return centerItem;
  if (array[centerItem] > targetValue) rightMostItem = centerItem - 1;
  else leftMostItem = centerItem + 1;
}
return -1;
};

// Call function
binarySearch(orderedRange, randomNumber);
`;

export default function IterativeBinarySearch() {
  const [renderResult, setRenderResult] = useState(false);

  const toggleState = function () {
    renderResult === false ? setRenderResult(true) : setRenderResult(false);
  };

  return (
    <FoundationLayout
      bestCase='&#937;(1)'
      editorCode={code}
      description={summary}
      foundationTitle='Iterative Binary Search'
      worstCase='O(log n)'
    >
      <Head>
        <title>Foundation | Iterative Binary Search</title>
        <meta
          name='description'
          content='Algorithm Foundation; Iterative Binary Search'
        />
        <meta
          name='keywords'
          content='software development, foundation, algorithm, search, linear search'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <section>
        <h2
          className={styles.headingTwo}
          suppressHydrationWarning
        >
          Find {randomNumber}
        </h2>
        <div className={styles.demoParameters}>
          <ul className={styles.parameterList}>
            {orderedRange.map((number, index) => (
              <li key={index}>{number}</li>
            ))}
          </ul>
        </div>
        <div
          className={styles.demoResults}
          suppressHydrationWarning
        >
          {renderResult ? (
            <ul className={styles.resultList}>
              {iterativeBinarySearch(orderedRange, randomNumber)}
              {/* {orderedRange.map((number, index) =>
                number === targetValue ? (
                  <li className={styles.solutionLi} key={index}>
                    {number}
                  </li>
                ) : (
                  <li className={styles.standardLi} key={index}>
                    {number}
                  </li>
                )
              )} */}
            </ul>
          ) : (
            <p className={styles.resultPlaceholder}>
              👇 click to solve
            </p>
          )}
        </div>
        <button
          className={styles.solveButton}
          onClick={() => toggleState()}
        >
          solve
        </button>
      </section>
    </FoundationLayout>
  );
}
