import EditorInstance from '../EditorInstance';
import PrimarySection from '../PrimarySection';

import styles from './FoundationLayout.module.scss';

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
      <header className={styles.header}>
        <h1 className={styles.headingOne}>{foundationTitle}</h1>
      </header>
      {children}
      <section className={styles.descriptionSection}>
        <h2 className={styles.headingTwo}>Description</h2>
        <p>{description}</p>
        <p className={styles.timeComplexity}>Time Complexity</p>
        <p className={styles.worstCase}>
          Worst Case: <span>{worstCase}</span>
        </p>
        <p className={styles.bestCase}>
          Best Case: <span>{bestCase}</span>
        </p>
      </section>
      <EditorInstance editorTitle='source' value={editorCode} />
    </PrimarySection>
  );
}
