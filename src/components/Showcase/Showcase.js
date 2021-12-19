import SectionTwo from '../SectionTwo';
import ShowcaseCard from '../ShowcaseCard';
import foundationCardArray from '../../../utils/foundationCardArray';
import puzzleCardArray from '../../../utils/puzzleCardArray';

import ShowcaseStyles from '../../styles/Showcase.module.scss';

export default function Showcase() {
  return (
    <SectionTwo heading='recent projects'>
      <div className={ShowcaseStyles.cardWrapper}>
        <ShowcaseCard
          alt={puzzleCardArray[0].alt}
          className={ShowcaseStyles.cardLink}
          imgUrl={puzzleCardArray[0].image}
          projectUrl={`https://tymalik.me${puzzleCardArray[0].link}`}
          timestamp={puzzleCardArray[0].timestamp}
          title={puzzleCardArray[0].title}
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
          alt={`React Todo App (homepage)`}
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
          alt={foundationCardArray[0].alt}
          className={ShowcaseStyles.cardLink}
          imgUrl={foundationCardArray[0].image}
          projectUrl={`https://tymalik.me${foundationCardArray[0].link}`}
          timestamp={foundationCardArray[0].timestamp}
          title={foundationCardArray[0].title}
        >
          <ul className={ShowcaseStyles.cardDescription}>
            <li>Traverse sorted selection</li>
            <li>Continually check center item</li>
            <li>Test each side of selection</li>
            <li>Return target value if contained</li>
            <li>Return -1 if target value is absent</li>
            <li>Best Case: O(1)</li>
            <li>Worst Case: O(log n)</li>
          </ul>
        </ShowcaseCard>
      </div>
    </SectionTwo>
  );
}
