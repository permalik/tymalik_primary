import React from "react";
import {BlogPostsProps} from "../../../../types/blog";

import Card from "../card";

import styles from "./List.module.scss";

const List = ({posts}: BlogPostsProps) => {
  return (
    <React.Fragment>
      {!posts && <div>No posts!</div>}
      <ul className={styles.list}>
        {posts &&
          posts
            .sort(
              (a, b) =>
                new Date(b.frontMatter.timestamp).getTime() - new Date(a.frontMatter.timestamp).getTime(),
            )
            .map((post, index) => {
              return (
                <Card
                  key={index}
                  post={post}
                />
              );
            })}
      </ul>
    </React.Fragment>
  );
};

export default List;