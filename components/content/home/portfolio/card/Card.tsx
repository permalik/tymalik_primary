import styles from "./Card.module.scss";

interface CardProps {
  alt: string | undefined;
  children?: JSX.Element | undefined;
  imgUrl: string | undefined;
  projectUrl: string | undefined;
  timestamp: string | undefined;
  title: string | undefined;
}

const Card = (
  {
    alt,
    children,
    imgUrl,
    projectUrl,
    timestamp,
    title
  }: CardProps
) => {
  return (
    <article className={styles.card}>
      <a href={projectUrl}>
        <img alt={alt} className={styles.image} src={imgUrl}/>
        <div className={styles.container}>
          <h3>{title}</h3>
          <time dateTime={timestamp}>
            {timestamp}
          </time>
          {children}
        </div>
      </a>
    </article>
  );
};

export default Card;