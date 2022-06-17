import Head from "next/head";
import {useState} from "react";

import FoundationLayout from "@components/content/foundation/foundationLayout";

import styles from "../../styles/foundation/IterativeLinearSearch.module.scss";

const orderedRange = Array.apply(0, new Array(10)).map(function (_, i) {
  return i + 1;
});

// @ts-ignore
const shuffledRange = orderedRange.sort(function (a, b) {
  return Math.random() > 0.5;
});

const randomNumber = ~~(Math.random() * 10) + 1;

const summary =
  "Sequentially iterate a given selection checking each individual item. Determine if current item meets expectation by measuring against preestablished criteria.";

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

// Create function to iterate selection
// Assign targetValue the proper numeric value
const iterativeLinearSearch = function (array) {
  array.forEach((number) => {
    if (number === randomNumber) {
      targetValue = number;
    } else {
      return "Not found";
    }
  });
};)

// Call function
iterativeLinearSearch(shuffledRange);
`;

const IterativeLinearSearch = () => {
  const [renderResult, setRenderResult] = useState(false);

  const toggleState = function () {
    !renderResult ? setRenderResult(true) : setRenderResult(false);
  };

  return (
    <FoundationLayout
      bestCase="&#937;(1)"
      editorCode={code}
      description={summary}
      foundationTitle="Iterative Linear Search"
      worstCase="O(n)"
    >
      <Head>
        <title>Foundation | Iterative Linear Search</title>
        <meta
          name="description"
          content="Algorithm Foundation; Iterative Linear Search"
        />
        <meta
          name="keywords"
          content="software development, foundation, algorithm, search, iterative linear search"
        />
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <section>
        <h2 className={styles.headingTwo}>
          Find {randomNumber}
        </h2>
        <div className={styles.demoParameters}>
          <ul className={styles.parameterList}>
            {shuffledRange.map((number, index) => (
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
              {shuffledRange.map((number, index) =>
                number === randomNumber ? (
                  <li
                    className={styles.solutionLi}
                    key={index}
                  >
                    {number}
                  </li>
                ) : (
                  <li
                    className={styles.standardLi}
                    key={index}
                  >
                    {number}
                  </li>
                )
              )}
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

export default IterativeLinearSearch;