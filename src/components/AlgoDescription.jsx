/* eslint-disable react/prop-types */
import { algorithmDescriptions } from "../constants/algorithmDescriptions";

const AlgoDescription = ({ algorithm }) => {
  const algorithmDescription = algorithmDescriptions[algorithm];

  return (
    <div className="mx-auto max-w-[1200px] px-10">
      <h2 className="text-center font-bold text-lg md:text-3xl text-gray-800 py-5">{algorithmDescription.header}</h2>
      <div className="flex justify-between flex-wrap">
        <div className="px-2 py-4">
          <h2 className="font-bold text-md md:text-xl text-gray-800">DESCRIPTION</h2>
          <p className="text-justify text-gray-600">{algorithmDescription.description}</p>
        </div>
        <div className="p-2 py-4">
          <h2 className="font-bold text-md md:text-xl text-gray-800">STEPS</h2>
          {algorithmDescription.steps.map((step, index) => {
            return <p key={step} className="text-gray-600">{`${index + 1}. ${step}`}</p>;
          })}
        </div>
        <div className="p-2 py-4">
          <h2 className="font-bold text-md md:text-xl text-gray-800">COMPLEXITY</h2>
          <p className="text-gray-600">Average complexity: {algorithmDescription.time_complexity.average}</p>
          <p className="text-gray-600">Best case: {algorithmDescription.time_complexity.best}</p>
          <p className="text-gray-600">Worst case: {algorithmDescription.time_complexity.worst}</p>
          <p className="text-gray-600">Space complexity: {algorithmDescription.space_complexity}</p>
        </div>
      </div>
    </div>
  );
};

export default AlgoDescription;
