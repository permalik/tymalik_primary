import MainSection from "@components/common/mainSection";
import EditorInstance from "../../../common/editorInstance";

import styles from "./FoundationLayout.module.scss";

interface FoundationProps {
  bestCase: string;
  children: JSX.Element | JSX.Element[];
  editorCode: string;
  description: string;
  foundationTitle: string;
  worstCase: string;
}

const FoundationLayout = ({
                            bestCase,
                            children,
                            editorCode,
                            description,
                            foundationTitle,
                            worstCase
                          }: FoundationProps) => {
  return (
    <MainSection>
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
      <EditorInstance value={editorCode}/>
    </MainSection>
  );
};

export default FoundationLayout;