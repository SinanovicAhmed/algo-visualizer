/* eslint-disable react/prop-types */

const SortingController = ({ speed, setSpeed, arraySize, setArraySize, isSorting, startSorting }) => {
  return (
    <div className="w-full h-15 flex justify-center gap-4 my-5">
      <div className="flex flex-col justify-between">
        <label htmlFor="speed" className="text-gray-600 text-sm">
          Sorting Speed:
        </label>
        <input
          className="w-full"
          type="range"
          id="speed"
          min="10"
          max="1045"
          value={speed}
          disabled={isSorting}
          onChange={(e) => setSpeed(parseInt(e.target.value))}
        />
      </div>

      <div className="flex flex-col justify-between">
        <label htmlFor="arraySize" className="text-gray-600 text-sm">
          Array Size:
        </label>
        <input
          className="w-full"
          type="range"
          id="arraySize"
          min="10"
          max="100"
          disabled={isSorting}
          value={arraySize}
          onChange={(e) => setArraySize(parseInt(e.target.value))}
        />
      </div>

      <button
        className="px-2 py-1 bg-blue-600 text-white text-sm rounded-lg disabled:grayscale"
        onClick={startSorting}
        disabled={isSorting}
      >
        {isSorting ? "Sorting..." : "Sort"}
      </button>
    </div>
  );
};

export default SortingController;
