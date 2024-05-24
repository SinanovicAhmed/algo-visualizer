/* eslint-disable react/prop-types */

const SearchingController = ({
  target,
  setTarget,
  isSearching,
  startSearching,
  setSpeed,
  speed,
  setArraySize,
  arraySize,
}) => {
  return (
    <div className="w-full h-15 flex justify-center gap-4 my-5">
      <div className="flex flex-col justify-between">
        <label htmlFor="speed" className="text-gray-600 text-sm">
          Searching Speed:
        </label>
        <input
          className="w-full"
          type="range"
          id="speed"
          min="10"
          max="1045"
          value={speed}
          disabled={isSearching}
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
          disabled={isSearching}
          value={arraySize}
          onChange={(e) => setArraySize(parseInt(e.target.value))}
        />
      </div>

      <div className="flex flex-col justify-between">
        <label htmlFor="target" className="text-gray-600 text-sm">
          Target value:
        </label>
        <input
          className="w-full"
          type="number"
          min="1"
          max="1000"
          id="target"
          disabled={isSearching}
          value={target}
          onChange={(e) => setTarget(parseInt(e.target.value))}
        />
      </div>

      <button
        className="px-2 py-1 bg-blue-600 text-white text-sm rounded-lg disabled:grayscale"
        onClick={startSearching}
        disabled={isSearching || target == 0}
      >
        {isSearching ? "Searching..." : "Search"}
      </button>
    </div>
  );
};

export default SearchingController;
