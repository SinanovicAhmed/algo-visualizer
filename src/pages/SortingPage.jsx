import AlgoDescription from "../components/AlgoDescription";
import SortingDisplay from "../components/SortingDisplay";
import { useSortingAlgorithmContext } from "../context/algorithmSelectionContext";

const SortingPage = () => {
  const { algorithm } = useSortingAlgorithmContext();
  return (
    <>
      <SortingDisplay algorithm={algorithm} />
      <AlgoDescription algorithm={algorithm} />
    </>
  );
};

export default SortingPage;
