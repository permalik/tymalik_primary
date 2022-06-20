import Head from "next/head";
import {useState} from "react";

import FoundationLayout
  from "@components/content/foundation/foundationLayout/FoundationLayout";

import styles from "../../styles/foundation/BubbleSort.module.scss";

const orderedParameterRange = Array.apply(0, new Array(10)).map(function (
  _,
  i
) {
  return i + 1;
});

const orderedRange = Array.apply(0, new Array(10)).map(function (_, i) {
  return i + 1;
});

// @ts-ignore
const shuffledParameterRange = orderedParameterRange.slice().sort(function (a, b) {
  return Math.random() - 0.5;
});

// @ts-ignore
const shuffledRange = orderedRange.sort(function (a, b) {
  return Math.random() > 0.5;
});

const bubbleSort = function (array: number[]) {
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
  "Traverse given selection. Compare adjacent pairs. Swap values when first is greater than second. Leverage a swap validation variable to determine the final necessary sort process. Return the sorted selection.";

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

const BubbleSort = () => {
  const [renderResult, setRenderResult] = useState(false);

  const toggleState = function () {
    !renderResult ? setRenderResult(true) : setRenderResult(false);
  };

  return (
    <FoundationLayout
      bestCase="&#937;(n)"
      editorCode={code}
      description={summary}
      foundationTitle="Bubble Sort"
      worstCase="O(n&#178;)"
    >
      <Head>
        <title>Foundation | Bubble Sort</title>
        <meta name="description" content="Algorithm Foundation; Bubble Sort"/>
        <meta
          name="keywords"
          content="software development, foundation, algorithm, sort, Bubble Sort"
        />
        <link rel="icon" href="/favicon.ico"/>
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
};

export default BubbleSort;