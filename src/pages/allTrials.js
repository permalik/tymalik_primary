import PuzzleCard from '../components/PuzzleCard';
import puzzleCardArray from '../../utils/puzzleCardArray';
import PrimarySection from '../components/PrimarySection';

import AllTrialStyles from '../styles/AllTrials.module.scss';

export default function AllArticles() {
  return (
    <PrimarySection>
      <h1 className={AllTrialStyles.headingOne}>all trials</h1>
      <ul className={AllTrialStyles.puzzleList}>
        {puzzleCardArray.map((trial, index) => (
          <PuzzleCard key={index} trial={trial} />
        ))}
      </ul>
    </PrimarySection>
  );
}
