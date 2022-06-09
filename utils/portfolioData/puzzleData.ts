const puzzleData: Array<{
  alt?: string | undefined,
  image?: string | undefined,
  language?: string | undefined,
  link?: string | undefined,
  timestamp?: string | undefined,
  title?: string | undefined,
  type?: string | undefined
}> = [];

interface Puzzle {
  alt?: string;
  image?: string;
  language?: string;
  link?: string;
  timestamp?: string;
  title?: string;
  type?: string;
}

const characterCounter: Puzzle = {
  alt: "Character Counter (project page)",
  image: "/images/trials/character_counter.png",
  language: "javascript",
  link: "/trial/characterCounter",
  timestamp: "2021-12-21",
  title: "Character Counter",
  type: "codewars"
};

const whoLikesIt: Puzzle = {
  alt: "Who Likes it (project page)",
  image: "/images/trials/skillset_trial_image.png",
  language: "javascript",
  link: "/trial/whoLikesIt",
  timestamp: "2021-10-28",
  title: "Who Likes It",
  type: "codewars"
};

const alphabetPosition: Puzzle = {
  language: "javascript",
  link: "/trial/alphabetPosition",
  timestamp: "2021-09-17",
  title: "Alphabet Position",
  type: "codewars"
};

const spinningWords: Puzzle = {
  language: "javascript",
  link: "/trial/spinningWords",
  title: "Spinning Words",
  timestamp: "2021-10-03",
  type: "codewars"
};

puzzleData.push(characterCounter);
puzzleData.push(whoLikesIt);
puzzleData.push(alphabetPosition);
puzzleData.push(spinningWords);

// {
//   result: '👉 sdroW gninnipS',
//   key: 'spinningWords',
//   pageLink: '/cwSpinningWords',
//   parameters: '"Spinning Words"',
//   title: 'Spinning Words',
//   type: 'codewars'
// },
// {
//   result: '👉 10 1 22 1 19 3 18 9 16 20',
//   key: 'alphabetPosition',
//   pageLink: '/cwAlphabetPosition',
//   parameters: '"javascript"',
//   title: 'Alphabet Position',
//   type: 'codewars'
// },
// {
//   result: '👉 <person/people> like(s) this',
//   key: 'whoLikesIt',
//   pageLink: '/cwWhoLikesIt',
//   parameters: 'Array of people who like an item',
//   title: 'Who Likes It',
//   type: 'codewars'
// }
// ];

export default puzzleData;