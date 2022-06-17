import Head from "next/head";
import {useState} from "react";

import EditorInstance from "../../components/common/editorInstance";
import TrialLayout from "../../components/content/trial/trialLayout";

import styles
  from "../../components/content/trial/trialLayout/TrialLayout.module.scss";
import instanceStyles from "../../styles/trial/WhoLikesIt.module.scss";

const WhoLikesit = () => {
  let defaultState = ["Luana", "Giovanni", "Tuyet"];

  const [likes, setLikes] = useState(defaultState!);

  function likesConverter(names: any) {
    names = names || [];
    switch (names.length) {
      case 0:
        return "no one likes this";
      case 1:
        return names[0] + " likes this";
      case 2:
        return names[0] + " and " + names[1] + " like this";
      case 3:
        return names[0] + ", " + names[1] + " and " + names[2] + " like this";
      default:
        return null;
    }
  }

  function changeLikes(state: any) {
    switch (state) {
      case defaultState:
        // @ts-ignore
        setLikes(likesConverter(likes));
        break;
      case "Luana, Giovanni and Tuyet like this":
        setLikes(defaultState);
        break;
      default:
        // @ts-ignore
        setLikes(likesConverter(likes));
        defaultState = likes;
        null;
    }
  }

  function resultsRenderer(results: any) {
    switch (results) {
      case defaultState:
        return (
          "['" +
          likes[0] +
          "', " +
          "'" +
          likes[1] +
          "', " +
          "'" +
          likes[2] +
          "']"
        );
      case "Luana, Giovanni and Tuyet like this":
        return "Luana, Giovanni and Tuyet like this";
      default:
        return (
          "['" +
          likes[0] +
          "', " +
          "'" +
          likes[1] +
          "', " +
          "'" +
          likes[2] +
          "']"
        );
    }
  }

  const code = `// TOP SUBMISSION
function likes(names) {
  names = names || [];
  switch (names.length) {
    case 0:
      return 'no one likes this';
      break;
    case 1:
      return names[0] + ' likes this';
      break;
    case 2:
      return names[0] + ' and ' + names[1] + ' like this';
      break;
    case 3:
      return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this';
      break;
    default:
      return (
        names[0] +
        ', ' +
        names[1] +
        ' and ' +
        (names.length - 2) +
        ' others like this'
      );
  }
}

// CLEVER SUBMISSION
function likes(names) {
  var templates = [
    'no one likes this',
    '{name} likes this',
    '{name} and {name} like this',
    '{name}, {name} and {name} like this',
    '{name}, {name} and {n} others like this'
  ];
  var idx = Math.min(names.length, 4);

  return templates[idx].replace(/{name}|{n}/g, function (val) {
    return val === '{name}' ? names.shift() : names.length;
  });
}

// MY INITIAL SUBMISSION
function likes(names) {
  let likesArray = names.length;
  let othersQuantity = likesArray - 2;

  switch (true) {
    case likesArray === 0:
      return 'no one likes this';
    case likesArray === 1:
      return \`$\{names[0]} likes this\`;
    case likesArray === 2:
      return \`$\{names[0]} and $\{names[1]} like this\`;
    case likesArray === 3:
      return \`$\{names[0]}, $\{names[1]} and $\{names[2]} like this\`;
    case likesArray > 3:
      return \`$\{names[0]}, $\{names[1]} and $\{othersQuantity} others like this\`;
  }
}
  `;

  return (
    <TrialLayout
      puzzleSourceHref="https://www.codewars.com/users/permalik"
      puzzleTitle="Who Likes It"
      puzzleType="codewars"
    >
      <Head>
        <title>Codewars Trial | Who Likes It</title>
        <meta name="description" content="Codewars trial; Who Likes It"/>
        <meta name="keywords" content="software development, javascript"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <p className={instanceStyles.demoParameters}>
        [&lsquo;Luana&rsquo;, &lsquo;Giovanni&rsquo;, &lsquo;Tuyet&rsquo;]
      </p>
      <button
        className={instanceStyles.demoButton}
        onClick={() => {
          changeLikes(likes);
        }}
      >
        {resultsRenderer(likes)}
      </button>
      <section className={styles.report}>
        <h2 className={styles.headingTwo}>Description</h2>
        <p className={styles.reportContent}>Begin with an array.</p>
        <p className={styles.reportContent}>
          Contained within the array are the names of people that like an item.
        </p>
        <p className={styles.reportContent}>
          Return the corresponding interpolated statement:
        </p>
        <ul className={styles.reportUl}>
          <li className={styles.reportLi}>
            &ldquo;No one likes this&rdquo;
          </li>
          <li className={styles.reportListItem}>
            &ldquo;&lt;person&#91;0&#93;&gt; likes this&rdquo;
          </li>
          <li className={styles.reportListItem}>
            &ldquo;&lt;person&#91;0&#93;&gt;, and &lt;person&#91;1&#93;&gt; like
            this&rdquo;
          </li>
          <li className={styles.reportListItem}>
            &ldquo;&lt;person&#91;0&#93;&gt;, &lt;person&#91;1&#93;&gt;, and
            &lt;person&#91;2&#93;&gt; like this&rdquo;
          </li>
          <li className={styles.reportListItem}>
            &ldquo;&lt;person&#91;0&#93;&gt;, &lt;person&#91;1&#93;&gt;, and
            &lt;n&gt; others like this&rdquo;
          </li>
        </ul>

        <h2 className={styles.headingTwo}>Initial strategy</h2>

        <p className={styles.reportContent}>
          Intial input will be an array containing the names of people.
        </p>
        <p className={styles.reportContent}>
          Create a variable to track the &ldquo;n others&ldquo; from the final
          statement.
        </p>
        <p className={styles.reportContent}>
          From the array of names I should determine which statement to utilize
          (via length of array.)
        </p>
        <p className={styles.reportContent}>
          Write a switch statement which compares the length of the array
          &#8212; returning the appropriate interpolated statement.
        </p>

        <h2 className={styles.headingTwo}>Improved tactics</h2>
        <p className={styles.reportContent}>
          Initial input will be an array containing the names of people.
        </p>
        <p className={styles.reportContent}>
          From the array of names I should determine which statement to utilize
          (via length of array.)
        </p>
        <p className={styles.reportContent}>
          Write a switch statement which compares the length of the array
          &#8212; returning the appropriate interpolated statement.
        </p>
        <p className={styles.reportContent}>
          Include the final statement in the default case.
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

export default WhoLikesit;