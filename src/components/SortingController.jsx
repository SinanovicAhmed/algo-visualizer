/* eslint-disable react/prop-types */

const SortingController = ({
  algorithm,
  setAlgorithm,
  speed,
  setSpeed,
  arraySize,
  setArraySize,
  isSorting,
  startSorting,
}) => {
  const handleAlgorithmChange = (e) => {
    setAlgorithm(e.target.value);
  };

  return (
    <div className="w-full h-15 flex justify-center gap-4 my-5">
      <div className="flex flex-col justify-between">
        <label htmlFor="algorithm" className="text-gray-600 text-sm">
          Select Algorithm:
        </label>
        <select id="algorithm" value={algorithm} onChange={handleAlgorithmChange}>
          <option value="bubbleSort">Bubble Sort</option>
          <option value="selectionSort">Selection Sort</option>
          <option value="insertionSort">Insertion Sort</option>
        </select>
      </div>

      <div className="flex flex-col justify-between">
        <label htmlFor="speed" className="text-gray-600 text-sm">
          Sorting Speed:
        </label>
        <input
          type="range"
          id="speed"
          min="10"
          max="1000"
          value={speed}
          onChange={(e) => setSpeed(parseInt(e.target.value))}
        />
      </div>

      <div className="flex flex-col justify-between">
        <label htmlFor="arraySize" className="text-gray-600 text-sm">
          Array Size:
        </label>
        <input
          type="range"
          id="arraySize"
          min="10"
          max="50"
          value={arraySize}
          onChange={(e) => setArraySize(parseInt(e.target.value))}
        />
      </div>

      <button className="px-2 bg-blue-600 text-white rounded-lg" onClick={startSorting} disabled={isSorting}>
        {isSorting ? "Sorting..." : "Start Sorting"}
      </button>
    </div>
  );
};

export default SortingController;
