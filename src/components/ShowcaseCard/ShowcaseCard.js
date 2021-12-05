/* eslint-disable @next/next/no-img-element */
import React from 'react';
import ShowcaseCardStyles from '../../styles/ShowcaseCard.module.scss';

export default function ShowcaseCard(props) {
  const { caption, children, imgUrl, projectUrl, timestamp, title } = props;
  return (
    <article className={ShowcaseCardStyles.card}>
      <a href={projectUrl}>
        <img alt={caption} className={ShowcaseCardStyles.image} src={imgUrl} />
        <div className={ShowcaseCardStyles.contentWrapper}>
          <h3 className={ShowcaseCardStyles.title}>{title}</h3>
          <time dateTime={timestamp} className={ShowcaseCardStyles.timestamp}>
            {timestamp}
          </time>
          {children}
        </div>
      </a>
    </article>
  );
}
