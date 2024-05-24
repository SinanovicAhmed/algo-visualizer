/* eslint-disable react/prop-types */

const Element = ({ isNumberFound, isCompared, number }) => {
  const barColor = isNumberFound
    ? "bg-green-400 transition all duration-700"
    : isCompared
    ? "bg-red-500"
    : "bg-blue-500";

  return <div className={`${barColor} w-10 h-10 text-white flex justify-center items-center`}>{number}</div>;
};

export default Element;
