export const algorithmDescriptions = {
  //sort
  bubbleSort: {
    header: "Bubble Sort",
    description:
      "Bubble sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.",
    steps: [
      "Start from the beginning of the list.",
      "Compare each pair of adjacent elements.,",
      "If the elements are in the wrong order, swap them.",
      "Repeat steps 1-3 until no swaps are needed, indicating that the list is sorted.",
    ],
    time_complexity: {
      best: "O(n) - When the list is already sorted.",
      average: " O(n^2) - When the elements are randomly ordered.",
      worst: "O(n^2) - When the elements are in reverse order.",
    },
    space_complexity: "O(1)",
  },
  insertionSort: {
    header: "Insertion Sort",
    description:
      "Insertion sort is a simple sorting algorithm that builds the final sorted array one item at a time. It iterates through the input elements and, at each iteration, it removes one element from the input data, finds the location it belongs within the sorted list, and inserts it there.",
    steps: [
      "Start from the second element (index 1) of the list.",
      "Compare the current element with the elements to its left.",
      "If the current element is smaller than the elements to its left, shift larger elements to the right to make space for the current element.",
      "Insert the current element into the correct position in the sorted portion of the list.",
      "Repeat steps 2-4 for each element in the list until the entire list is sorted.",
    ],
    time_complexity: {
      best: "O(n) - When the list is already sorted.",
      average: "O(n^2) - When the elements are randomly ordered.",
      worst: "O(n^2) - When the elements are in reverse order.",
    },
    space_complexity: "O(1)",
  },
  selectionSort: {
    header: "Selection Sort",
    description:
      "Selection sort is a simple sorting algorithm that divides the input list into two parts: a sorted subarray and an unsorted subarray. It repeatedly selects the smallest element from the unsorted subarray and moves it to the beginning of the sorted subarray.",
    steps: [
      "Initialize the index of the minimum element as the first element of the unsorted subarray.",
      "Iterate through the unsorted subarray, starting from the second element.",
      "Find the smallest element in the unsorted subarray.",
      "Swap the smallest element with the first element of the unsorted subarray.",
      "Move the boundary of the sorted subarray one element to the right.",
      "Repeat steps 2-5 until the entire array is sorted.",
    ],
    time_complexity: {
      best: "O(n^2) - Regardless of input.",
      average: "O(n^2) - Regardless of input.",
      worst: "O(n^2) - Regardless of input.",
    },
    space_complexity: "O(1)",
  },

  //search
  linearSearch: {
    header: "Linear Search",
    description:
      "Linear search is a simple search algorithm that sequentially checks each element in a list or array until the target element is found or the entire list has been traversed. It compares each element of the list with the target element to determine if they are equal.",
    steps: [
      "Start from the beginning of the list.",
      "Compare the target element with each element of the list sequentially.",
      "If the target element matches an element in the list, return the index of that element.",
      "If the target element is not found after checking all elements, return a special value (e.g., -1) to indicate that the element is not in the list.",
    ],
    time_complexity: {
      best: "O(1) - When the target element is found at the beginning of the list.",
      average: "O(n) - When the target element is randomly located in the list.",
      worst: "O(n) - When the target element is at the end of the list or not present in the list.",
    },
    space_complexity: "O(1)",
  },
};
