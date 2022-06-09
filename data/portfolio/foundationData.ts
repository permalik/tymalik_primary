const foundationData: Array<{
  alt?: string | undefined,
  image?: string | undefined,
  link?: string | undefined,
  timestamp?: string | undefined,
  title?: string | undefined,
  type?: string | undefined
}> = Array();

interface Foundation {
  alt?: string | undefined;
  image?: string | undefined;
  link?: string | undefined;
  timestamp?: string | undefined;
  title?: string | undefined;
  type?: string | undefined;
}

const bubbleSort: Foundation = {
  alt: "Bubble Sort (project page)",
  image: "/images/foundation/bubble_sort.png",
  link: "/foundation/bubbleSort",
  timestamp: "2021-12-20",
  title: "Bubble Sort",
  type: "Algorithm"
};

const insertionSort: Foundation = {
  alt: "Insertion Sort (project page)",
  image: "/images/foundation/insertion_sort.png",
  link: "/foundation/insertionSort",
  timestamp: "2021-12-20",
  title: "Insertion Sort",
  type: "Algorithm"
};

const selectionSort: Foundation = {
  alt: "Selection Sort (project page)",
  image: "/images/foundation/selection_sort.png",
  link: "/foundation/selectionSort",
  timestamp: "2021-12-19",
  title: "Selection Sort",
  type: "Algorithm"
};

const iterativeBinarySearch: Foundation = {
  alt: "Binary Search (project page)",
  image: "/images/foundation/iterative_binary_search.png",
  link: "/foundation/iterativeBinarySearch",
  timestamp: "2021-12-18",
  title: "Iterative Binary Search",
  type: "Algorithm"
};

const iterativeLinearSearch: Foundation = {
  alt: "Linear Search (project page)",
  image: "/images/foundation/linear_search.png",
  link: "/foundation/iterativeLinearSearch",
  timestamp: "2021-12-07",
  title: "Iterative Linear Search",
  type: "Algorithm"
};

foundationData.push(bubbleSort);
foundationData.push(insertionSort);
foundationData.push(selectionSort);
foundationData.push(iterativeBinarySearch);
foundationData.push(iterativeLinearSearch);

export default foundationData;
