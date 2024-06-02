import { useAlgorithmContext } from "../context/algorithmSelectionContext";

const AlgoSelection = () => {
  const { algorithm, setAlgorithm, algorithmType, handleAlgorithmTypeChange } = useAlgorithmContext();

  return (
    <div className="flex flex-wrap justify-end gap-1 py-1">
      <select
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block"
        id="type-algorithm"
        value={algorithmType}
        onChange={(e) => handleAlgorithmTypeChange(e.target.value)}
      >
        <option value="sorting">Sorting Algos</option>
        <option value="searching">Searching Algos</option>
      </select>
      {algorithmType == "sorting" ? (
        <select
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block"
          id="algorithm"
          value={algorithm}
          onChange={(e) => setAlgorithm(e.target.value)}
        >
          <option value="bubbleSort">Bubble Sort</option>
          <option value="selectionSort">Selection Sort</option>
          <option value="insertionSort">Insertion Sort</option>
        </select>
      ) : (
        <select
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block"
          id="algorithm"
          value={algorithm}
          onChange={(e) => setAlgorithm(e.target.value)}
        >
          <option value="linearSearch">Linear Search</option>
          <option value="binarySearch">Binary Search</option>
          <option value="ternarySearch">Ternary Search</option>
        </select>
      )}
    </div>
  );
};

export default AlgoSelection;
