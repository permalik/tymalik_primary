import styles from "./RepoCard.module.scss";

const RepoCard = ({data}: any) => {
  return (
    <li className={styles.card}>
      <a href={data.html_url}>
        <h3>
          {data.name.replace(/_/g, " ")}
        </h3>
        <p>
          {data.description}
        </p>
      </a>
      <div className={styles.container}>
        {data.homepage ? (
          <a href={data.homepage}>
            View Site
          </a>
        ) : null}
      </div>
    </li>
  );
};

export default RepoCard;