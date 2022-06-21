import Link from "next/link";
import styles from "./RepoCard.module.scss";

const RepoCard = ({data}: any) => {
  return (
    <li className={styles.card}>
      <Link href={data.html_url}>
        <a>
          <div>
            <h3>
              {data.name.replace(/_/g, " ")}
            </h3>
            <p>
              {data.description}
            </p>
          </div>
          <div className={styles.container}>
            {data.homepage ? (
              <Link href={data.homepage}>
                <button>View Site</button>
              </Link>
            ) : null}
          </div>
        </a>
      </Link>
    </li>
  );
};

export default RepoCard;