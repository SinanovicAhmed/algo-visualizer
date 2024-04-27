import { useState } from "react";
import useSortingAlgorithm from "../hooks/useSortingAlgorithm";
import Bar from "./Bar";
import SortingController from "./SortingController";

/* eslint-disable react/prop-types */
const SortingDisplay = () => {
  const [algorithm, setAlgorithm] = useState("bubbleSort");
  const [speed, setSpeed] = useState(500);
  const [arraySize, setArraySize] = useState(25);

  const { array, isSorting, comparedValues, startSorting } = useSortingAlgorithm(algorithm, speed, arraySize);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-end">
      <div className="flex w-full px-5 gap-1 justify-center items-end mb-40">
        {array.map((number, index) => {
          return <Bar key={number} isCompared={comparedValues.includes(index)} size={number}></Bar>;
        })}
      </div>
      <SortingController
        isSorting={isSorting}
        startSorting={startSorting}
        setAlgorithm={setAlgorithm}
        setSpeed={setSpeed}
        speed={speed}
        setArraySize={setArraySize}
        arraySize={arraySize}
      />
    </div>
  );
};

export default SortingDisplay;
