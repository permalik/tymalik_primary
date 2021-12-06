export const sortByDate = (a, b) => {
  return new Date(b.frontmatter.timestamp) - new Date(a.frontmatter.timestamp);
};

export const sortById = (a, b) => {
  return b.id - a.id;
};
