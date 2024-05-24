import AlgoDescription from "../components/AlgoDescription";
import SortingDisplay from "../components/SortingDisplay";
import { useAlgorithmContext } from "../context/algorithmSelectionContext";

const SortingPage = () => {
  const { algorithm } = useAlgorithmContext();
  return (
    <>
      <SortingDisplay algorithm={algorithm} />
      <AlgoDescription algorithm={algorithm} />
    </>
  );
};

export default SortingPage;
