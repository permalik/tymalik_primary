import SectionTwo from '../SectionTwo';

import ShowcaseStyles from '../../styles/Showcase.module.scss';

export default function Showcase() {
  return (
    <SectionTwo>
      <h2 className={ShowcaseStyles.headingTwo}>recent projects</h2>
      <div className={ShowcaseStyles.showcase}>
        Here are some recent projects
      </div>
    </SectionTwo>
  );
}
