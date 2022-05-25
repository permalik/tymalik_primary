import Head from 'next/head';
import { useState } from 'react';

import FoundationLayout from '../../components/FoundationLayout';

import styles from './SelectionSort.module.scss';

const orderedParameterRange = Array.apply(0, new Array(10)).map(function (
  _,
  i
) {
  return i + 1;
});

const orderedRange = Array.apply(0, new Array(10)).map(function (_, i) {
  return i + 1;
});

const shuffledParameterRange = orderedParameterRange.sort(function (a, b) {
  return Math.random() > 0.5;
});

const shuffledRange = orderedRange.sort(function (a, b) {
  return Math.random() > 0.5;
});

const selectionSort = function (array) {
  array.forEach((value, index, array) => {
    const lowestValue = Math.min(...array.slice(index));
    const lowestIndex = array.indexOf(lowestValue);

    if (array[index] > array[lowestIndex]) {
      const temporaryValue = array[index];
      array[index] = array[lowestIndex];
      array[lowestIndex] = temporaryValue;
    }
  });
  return array;
};

const sortedArray = selectionSort(shuffledRange);

const summary =
  'Traverse given selection. Progressively determine the lowest present value. Place such value at beginning of selection. Repeat, continually swapping current lowest value for sequentially unsorted value. Proceed until all values are sorted in ascending order.';

const code = `// Generate array ranging 1-10
const orderedRange = Array.apply(0,new Array(10)).map(function(_,i){ return i+1 });

// Shuffle the array
const shuffledRange = orderedRange.sort(function (a, b) {
  return Math.random() > 0.5;
});

// Traverse array
// Progressively swap lowest value with beginning unsorted value
// Once selection values are successfully sorted in ascending order, return modified array
const selectionSort = function (array) {
  const arrayLength = array.length - 1;

  for (let i = 0; i <= arrayLength; i++) {
    let lowestValue = i;

    for (let n = i; n <= arrayLength; n++) {
      if (array[n] < array[lowestValue]) {
        lowestValue = n;
      }
    }

    if (array[i] > array[lowestValue]) {
      let temporaryValue = array[i];
      array[i] = array[lowestValue];
      array[lowestValue] = temporaryValue;
    }
  }
  return array;
};

// Call function
selectionSort(shuffledRange);
`;

export default function SelectionSort() {
  const [renderResult, setRenderResult] = useState(false);

  const toggleState = function () {
    renderResult === false ? setRenderResult(true) : setRenderResult(false);
  };

  return (
    <FoundationLayout
      bestCase='&#937;(n&#178;)'
      editorCode={code}
      description={summary}
      foundationTitle='Selection Sort'
      worstCase='O(n&#178;)'
    >
      <Head>
        <title>Foundation | Selection Sort</title>
        <meta
          name='description'
          content='Algorithm Foundation; Selection Sort'
        />
        <meta
          name='keywords'
          content='software development, foundation, algorithm, sort, Selection Sort'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <section>
        <h2 className={styles.headingTwo}>Sort the Array</h2>
        <div className={styles.demoParameters}>
          <ul className={styles.parameterList}>
            {shuffledParameterRange.map((number, index) => (
              <li key={index} suppressHydrationWarning>
                {number}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.demoResults}>
          {renderResult ? (
            <ul className={styles.resultList}>
              {sortedArray.map((number, index) => (
                <li className={styles.solutionLi} key={index}>
                  {number}
                </li>
              ))}
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
