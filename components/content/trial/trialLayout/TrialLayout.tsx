import MainSection from "@components/common/mainSection";

import styles from "./TrialLayout.module.scss";

interface TrialProps {
  children: JSX.Element | JSX.Element[];
  puzzleSourceHref: string;
  puzzleTitle: string;
  puzzleType: string;
}

const TrialLayout = ({
                       children,
                       puzzleSourceHref,
                       puzzleTitle,
                       puzzleType
                     }: TrialProps) => {
  return (
    <MainSection>
      <header className={styles.header}>
        <h1 className={styles.headingOne}>{puzzleTitle}</h1>
        <a
          className={styles.type}
          href={puzzleSourceHref}
          rel="noreferrer"
          target="_blank"
        >
          {puzzleType}
        </a>
      </header>
      {children}
    </MainSection>
  );
};

export default TrialLayout;