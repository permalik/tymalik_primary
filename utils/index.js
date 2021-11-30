export const sortByDate = (a, b) => {
  return new Date(b.frontmatter.timestamp) - new Date(a.frontmatter.timestamp);
};

export const filterForCategory = () => {};
