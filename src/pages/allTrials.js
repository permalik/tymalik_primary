import PuzzleCard from '../components/PuzzleCard';
import puzzleCardArray from '../../utils/puzzleCardArray';
import PrimarySection from '../components/PrimarySection';

import AllPuzzlesStyles from '../styles/AllPuzzles.module.scss';

export default function AllArticles() {
  return (
    <PrimarySection>
      <h1 className={AllPuzzlesStyles.headingOne}>All trials</h1>
      <ul className={AllPuzzlesStyles.puzzleList}>
        {puzzleCardArray.map((trial, index) => (
          <PuzzleCard key={index} trial={trial} />
        ))}
      </ul>
    </PrimarySection>
  );
}
