import Link from "next/link";
import styled from "styled-components";

import styles from "./FoundationCard.module.scss";

const StyledLink = styled.a`
  background: #1C182F;
  color: #FFF;
`

const FoundationCard = ({foundation}: any) => {
  return (
    <li className={styles.card}>
      <Link href={`${foundation.link}`} passHref>
        <StyledLink>
          <header className={styles.header}>
            <h3>
              {foundation.title}
            </h3>
            <time dateTime={foundation.timestamp}>
              {foundation.timestamp}
            </time>
          </header>
          <p className={styles.description}>
            {foundation.type}
          </p>
        </StyledLink>
      </Link>
    </li>
  );
};

export default FoundationCard;