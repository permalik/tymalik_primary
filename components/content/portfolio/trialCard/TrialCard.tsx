import Link from "next/link";
import styled from "styled-components";

import styles from "./TrialCard.module.scss";

const StyledLink = styled.a`
  background: #1C182F;
  color: #FFF;
`;

const TrialCard = ({trial}: any) => {
  return (
    <li className={styles.card}>
      <Link href={`${trial.link}`} passHref>
        <StyledLink>
          <header className={styles.header}>
            <h3>
              {trial.title}
            </h3>
            <time dateTime={trial.timestamp}>
              {trial.timestamp}
            </time>
          </header>
          <p className={styles.description}>
            A {trial.type} challenge solved with {trial.language}
          </p>
        </StyledLink>
      </Link>
    </li>
  );
};

export default TrialCard;