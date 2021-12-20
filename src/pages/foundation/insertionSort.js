import Head from 'next/head';
import { useState } from 'react';

import FoundationLayout from '../../components/FoundationLayout';

import InsertionSortStyles from '../../styles/InsertionSort.module.scss';

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

const insertionSort = function (array) {
  const arrayLength = array.length;

  for (let i = 1; i < arrayLength; i++) {
    let n = i;
    while (n > 0 && array[n] < array[n - 1]) {
      [array[n - 1], array[n]] = [array[n], array[n - 1]];
      n--;
    }
  }
  return array;
};

const sortedArray = insertionSort(shuffledRange);

const summary =
  'Traverse given selection sequentially. In the midst of this initial traversal, loop through selection items. Within this loop, shift items and create space for sorted items. Progressively place individually sorted items into resulting sorted selection until all items have been processed. Return the sorted selection.';

const code = `// Generate array ranging 1-10
const orderedRange = Array.apply(0,new Array(10)).map(function(_,i){ return i+1 });

// Shuffle the array
const shuffledRange = orderedRange.sort(function (a, b) {
  return Math.random() > 0.5;
});

// Traverse array
// Progressively insert sorted items into proper position, while shifting other items
// Once selection values are successfully sorted in ascending order, return modified array
const insertionSort = function (array) {
  const arrayLength = array.length;

  for (let i = 1; i < arrayLength; i++) {
    let n = i;
    while (n > 0 && array[n] < array[n - 1]) {
      [array[n - 1], array[n]] = [array[n], array[n - 1]];
      n--;
    }
  }
  return array;
};

// Call function
insertionSort(shuffledRange);
`;

export default function InsertionSort() {
  const [renderResult, setRenderResult] = useState(false);

  const toggleState = function () {
    renderResult === false ? setRenderResult(true) : setRenderResult(false);
  };

  return (
    <FoundationLayout
      bestCase='&#937;(n)'
      editorCode={code}
      description={summary}
      foundationTitle='Insertion Sort'
      worstCase='O(n&#178;)'
    >
      <Head>
        <title>Foundation | Insertion Sort</title>
        <meta
          name='description'
          content='Algorithm Foundation; Insertion Sort'
        />
        <meta
          name='keywords'
          content='software development, foundation, algorithm, sort, Insertion Sort'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <section>
        <h2 className={InsertionSortStyles.headingTwo}>Sort the Array</h2>
        <div className={InsertionSortStyles.demoParameters}>
          <ul className={InsertionSortStyles.parameterList}>
            {shuffledParameterRange.map((number, index) => (
              <li key={index} suppressHydrationWarning>
                {number}
              </li>
            ))}
          </ul>
        </div>
        <div className={InsertionSortStyles.demoResults}>
          {renderResult ? (
            <ul className={InsertionSortStyles.resultList}>
              {sortedArray.map((number, index) => (
                <li className={InsertionSortStyles.solutionLi} key={index}>
                  {number}
                </li>
              ))}
            </ul>
          ) : (
            <p className={InsertionSortStyles.resultPlaceholder}>
              👇 click to solve
            </p>
          )}
        </div>
        <button
          className={InsertionSortStyles.solveButton}
          onClick={() => toggleState()}
        >
          solve
        </button>
      </section>
    </FoundationLayout>
  );
}
