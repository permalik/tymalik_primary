/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from './ShowcaseCard.module.scss';

export default function ShowcaseCard(props) {
  const { alt, children, imgUrl, projectUrl, timestamp, title } = props;
  return (
    <article className={styles.card}>
      <a href={projectUrl}>
        <img alt={alt} className={styles.image} src={imgUrl} />
        <div className={styles.contentWrapper}>
          <h3 className={styles.title}>{title}</h3>
          <time dateTime={timestamp} className={styles.timestamp}>
            {timestamp}
          </time>
          {children}
        </div>
      </a>
    </article>
  );
}
