import AlgoSelection from "./AlgoSelection";

const Navbar = () => {
  return (
    <div className="flex justify-center items-center w-full min-h-10 bg-blue-500">
      <div className="flex justify-between items-center w-full max-w-[1200px] px-10">
        <p className="text-gray-800 font-bold text-xl">
          <span className="font-black text-xl text-white">Algo</span>Insight
        </p>
        <AlgoSelection />
      </div>
    </div>
  );
};

export default Navbar;
