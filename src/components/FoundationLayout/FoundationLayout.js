import EditorInstance from '../EditorInstance';
import PrimarySection from '../PrimarySection';

import FoundationLayoutStyles from './FoundationLayout.module.scss';

export default function FoundationLayout({
  bestCase,
  children,
  editorCode,
  description,
  foundationTitle,
  worstCase
}) {
  return (
    <PrimarySection>
      <header className={FoundationLayoutStyles.header}>
        <h1 className={FoundationLayoutStyles.headingOne}>{foundationTitle}</h1>
      </header>
      {children}
      <section className={FoundationLayoutStyles.descriptionSection}>
        <h2 className={FoundationLayoutStyles.headingTwo}>Description</h2>
        <p>{description}</p>
        <p className={FoundationLayoutStyles.timeComplexity}>Time Complexity</p>
        <p className={FoundationLayoutStyles.worstCase}>
          Worst Case: <span>{worstCase}</span>
        </p>
        <p className={FoundationLayoutStyles.bestCase}>
          Best Case: <span>{bestCase}</span>
        </p>
      </section>
      <EditorInstance editorTitle='source' value={editorCode} />
    </PrimarySection>
  );
}
