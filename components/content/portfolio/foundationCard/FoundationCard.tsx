import Link from "next/link";

import styles from "./FoundationCard.module.scss";

const FoundationCard = ({foundation}: any) => {
  return (
    <li className={styles.card}>
      <Link href={`${foundation.link}`} passHref>
        <a>
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
        </a>
      </Link>
    </li>
  );
};

export default FoundationCard;