import SectionTwo from '../SectionTwo';

import ArticleFeedStyles from '../../styles/ArticleFeed.module.scss';

export default function ArticleFeed() {
  return (
    <SectionTwo>
      <h2 className={ArticleFeedStyles.headingTwo}>latest articles</h2>
      <div className={ArticleFeedStyles.feed}>and some articles</div>
    </SectionTwo>
  );
}
