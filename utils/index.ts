export const sortByDate = ({a, b}: any) => {
  return +new Date(b.frontmatter.timestamp) - +new Date(a.frontmatter.timestamp);
};

export const sortById = ({a, b}: any) => {
  return b.id - a.id;
};
