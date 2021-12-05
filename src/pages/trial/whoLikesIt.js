import { useState } from 'react';

import EditorInstance from '../../components/EditorInstance';
import TrialLayout from '../../components/TrialLayout';

import TrialStyles from '../../styles/Trial.module.scss';
import WhoLikesItStyles from '../../styles/WhoLikesIt.module.scss';

export default function WhoLikesit() {
  let defaultState = ['Luana', 'Giovanni', 'Tuyet'];

  const [likes, setLikes] = useState(defaultState);

  function likesConverter(names) {
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
        return null;
    }
  }

  function changeLikes(state) {
    switch (state) {
      case defaultState:
        setLikes(likesConverter(likes));
        break;
      case 'Luana, Giovanni and Tuyet like this':
        setLikes(defaultState);
        break;
      default:
        setLikes(likesConverter(likes));
        defaultState = likes;
        null;
    }
  }

  function resultsRenderer(results) {
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
        break;
      case 'Luana, Giovanni and Tuyet like this':
        return 'Luana, Giovanni and Tuyet like this';
        break;
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

  const code = `//TOP SUBMISSION
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
      puzzleSourceHref='https://www.codewars.com/users/permalik'
      puzzleTitle='Who Likes It'
      puzzleType='codewars'
    >
      <p className={WhoLikesItStyles.demoParameters}>
        [&lsquo;Luana&rsquo;, &lsquo;Giovanni&rsquo;, &lsquo;Tuyet&rsquo;]
      </p>
      <button
        className={WhoLikesItStyles.demoButton}
        onClick={() => {
          changeLikes(likes);
        }}
      >
        {resultsRenderer(likes)}
      </button>
      <section className={WhoLikesItStyles.report}>
        <h2 className={WhoLikesItStyles.headingTwo}>Description</h2>
        <p className={WhoLikesItStyles.description}>
          <span>Begin with an array</span>
          <span>
            Contained within the array are the names of people that like an item
          </span>
          <span>Return the corresponding interpolated statement:</span>
          <span className={WhoLikesItStyles.step}>
            &ldquo;No one likes this&rdquo;
          </span>
          <span className={WhoLikesItStyles.step}>
            &ldquo;&lt;person&#91;0&#93;&gt; likes this&rdquo;
          </span>
          <span className={WhoLikesItStyles.step}>
            &ldquo;&lt;person&#91;0&#93;&gt;, and &lt;person&#91;1&#93;&gt; like
            this&rdquo;
          </span>
          <span className={WhoLikesItStyles.step}>
            &ldquo;&lt;person&#91;0&#93;&gt;, &lt;person&#91;1&#93;&gt;, and
            &lt;person&#91;2&#93;&gt; like this&rdquo;
          </span>
          <span className={WhoLikesItStyles.step}>
            &ldquo;&lt;person&#91;0&#93;&gt;, &lt;person&#91;1&#93;&gt;, and
            &lt;n&gt; others like this&rdquo;
          </span>
        </p>
        <h2 className={WhoLikesItStyles.headingTwo}>Strategy</h2>
        <p className={WhoLikesItStyles.strategy}>
          <span>
            Intial input will be an array containing the names of people
            <span className={WhoLikesItStyles.step}>
              Create a variable to track the &ldquo;n others&ldquo; from the
              final statement
            </span>
          </span>
          <span>
            From the array of names I should determine which statement to
            utilize (via length of array)
            <span className={WhoLikesItStyles.step}>
              Write a switch statement which compares the length of the array
              &#8212; returning the appropriate interpolated statement
            </span>
          </span>
        </p>
        <h2 className={WhoLikesItStyles.headingTwo}>Improved Tactics</h2>
        <p className={WhoLikesItStyles.tactics}>
          <span>
            Intial input will be an array containing the names of people
          </span>
          <span>
            From the array of names I should determine which statement to
            utilize (via length of array)
            <span className={WhoLikesItStyles.step}>
              Write a switch statement which compares the length of the array
              &#8212; returning the appropriate interpolated statement
              <span className={WhoLikesItStyles.stepSpan}>
                Include the final statement in the default case
              </span>
            </span>
          </span>
        </p>
        <h2 className={WhoLikesItStyles.headingTwo}>Results</h2>
        <p className={WhoLikesItStyles.results}>
          <span>
            Three below approaches:
            <span className={WhoLikesItStyles.step}>
              The top Codewars submission
            </span>
            <span className={WhoLikesItStyles.step}>
              A clever Codewars submission
            </span>
            <span className={WhoLikesItStyles.step}>
              My initial Codewars submission
            </span>
          </span>
        </p>
      </section>
      <EditorInstance editorTitle='source' value={code} />
    </TrialLayout>
  );
}
