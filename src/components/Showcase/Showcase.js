import puzzleCardArray from '../../../utils/puzzleCardArray';
import SectionTwo from '../SectionTwo';
import ShowcaseCard from '../ShowcaseCard';

import ShowcaseStyles from '../../styles/Showcase.module.scss';

export default function Showcase() {
  return (
    <SectionTwo heading='recent projects'>
      <div className={ShowcaseStyles.cardWrapper}>
        <ShowcaseCard
          className={ShowcaseStyles.cardLink}
          imgUrl={`/images/trials/skillset_trial_image.png`}
          projectUrl={`https://tymalik.me/trial/whoLikesIt`}
          timestamp={puzzleCardArray[0].timestamp}
          title={'Who Likes It'}
        >
          <ul className={ShowcaseStyles.cardDescription}>
            <li>Get data from a given array</li>
            <li>
              Return an interpolated string about &ldquo;liked posts&rdquo;
            </li>
            <li>A Codewars challenge written in JavaScript</li>
          </ul>
        </ShowcaseCard>
        <ShowcaseCard
          className={ShowcaseStyles.cardLink}
          imgUrl={`/images/trials/skillset_image_github.png`}
          projectUrl={`https://reacttaskapplication.netlify.app/`}
          timestamp={`2021-07-08`}
          title={'React Todo App'}
        >
          <ul className={ShowcaseStyles.cardDescription}>
            <li>Create and display tasks in the DOM</li>
            <li>Toggle task priority</li>
            <li>Save tasks to local storage</li>
            <li>Built with React and CSS</li>
          </ul>
        </ShowcaseCard>
        <ShowcaseCard
          className={ShowcaseStyles.cardLink}
          imgUrl={`/images/foundation/linear_search.png`}
          projectUrl={`https://tymalik.me/foundation/linearSearch`}
          timestamp={`2021-12-07`}
          title={'Algorithm'}
        >
          <ul className={ShowcaseStyles.cardDescription}>
            <li>Iterate selection</li>
            <li>Check each item</li>
            <li>Test for certain criteria</li>
            <li>Utilize result</li>
            <li>Best Case: O(1)</li>
            <li>Worst Case: O(n)</li>
          </ul>
        </ShowcaseCard>
      </div>
    </SectionTwo>
  );
}
