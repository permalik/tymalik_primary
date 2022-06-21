import Link from "next/link";
import styled from "styled-components";

import styles from "./RepoCard.module.scss";

const StyledLink = styled.a`
  background: #1C182F;
  color: #FFF;
`;

const RepoCard = ({data}: any) => {
  return (
    <li className={styles.card}>
      <Link href={data.html_url}>
        <StyledLink>
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
        </StyledLink>
      </Link>
    </li>
  );
};

export default RepoCard;