/* eslint-disable react/prop-types */

const Bar = ({ isCompared, size }) => {
  const barColor = isCompared ? "bg-red-500" : "bg-blue-500";
  return <div style={{ height: size, flexGrow: 1, flexShrink: 0 }} className={`${barColor} transition-all`}></div>;
};

export default Bar;
