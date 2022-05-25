import Head from 'next/head';
import { useState } from 'react';

import FoundationLayout from '../../components/FoundationLayout';

import BubbleSortStyles from './BubbleSort.module.scss';

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

const bubbleSort = function (array) {
  const arrayLength = array.length;
  let swapValidation;

  do {
    swapValidation = false;

    for (let i = 0; i < arrayLength; i++) {
      if (array[i] > array[i + 1]) {
        let temporaryValue = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temporaryValue;
        swapValidation = true;
      }
    }
  } while (swapValidation);
  return array;
};

const sortedArray = bubbleSort(shuffledRange);

const summary =
  'Traverse given selection. Compare adjacent pairs. Swap values when first is greater than second. Leverage a swap validation variable to determine the final necessary sort process. Return the sorted selection.';

const code = `// Generate array ranging 1-10
const orderedRange = Array.apply(0,new Array(10)).map(function(_,i){ return i+1 });

// Shuffle the array
const shuffledRange = orderedRange.sort(function (a, b) {
  return Math.random() > 0.5;
});

// Traverse array
// Progressively compare values, swapping to properly sort.
// Once selection values are successfully sorted in ascending order, return modified array
const bubbleSort = function (array) {
  const arrayLength = array.length;
  let swapValidation;

  do {
    swapValidation = false;

    for (let i = 0; i < arrayLength; i++) {
      if (array[i] > array[i + 1]) {
        let temporaryValue = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temporaryValue;
        swapValidation = true;
      }
    }
  } while (swapValidation);
  return array;
};

// Call function
bubbleSort(shuffledRange);
`;

export default function BubbleSort() {
  const [renderResult, setRenderResult] = useState(false);

  const toggleState = function () {
    renderResult === false ? setRenderResult(true) : setRenderResult(false);
  };

  return (
    <FoundationLayout
      bestCase='&#937;(n)'
      editorCode={code}
      description={summary}
      foundationTitle='Bubble Sort'
      worstCase='O(n&#178;)'
    >
      <Head>
        <title>Foundation | Bubble Sort</title>
        <meta name='description' content='Algorithm Foundation; Bubble Sort' />
        <meta
          name='keywords'
          content='software development, foundation, algorithm, sort, Bubble Sort'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <section>
        <h2 className={BubbleSortStyles.headingTwo}>Sort the Array</h2>
        <div className={BubbleSortStyles.demoParameters}>
          <ul className={BubbleSortStyles.parameterList}>
            {shuffledParameterRange.map((number, index) => (
              <li key={index} suppressHydrationWarning>
                {number}
              </li>
            ))}
          </ul>
        </div>
        <div className={BubbleSortStyles.demoResults}>
          {renderResult ? (
            <ul className={BubbleSortStyles.resultList}>
              {sortedArray.map((number, index) => (
                <li className={BubbleSortStyles.solutionLi} key={index}>
                  {number}
                </li>
              ))}
            </ul>
          ) : (
            <p className={BubbleSortStyles.resultPlaceholder}>
              👇 click to solve
            </p>
          )}
        </div>
        <button
          className={BubbleSortStyles.solveButton}
          onClick={() => toggleState()}
        >
          solve
        </button>
      </section>
    </FoundationLayout>
  );
}
