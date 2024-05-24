import { useAlgorithmContext } from "../context/algorithmSelectionContext";
import SearchingDisplay from "../components/SearchingDisplay";
import AlgoDescription from "../components/AlgoDescription";

const SearchingPage = () => {
  const { algorithm } = useAlgorithmContext();
  return (
    <>
      <SearchingDisplay algorithm={algorithm} />;
      <AlgoDescription algorithm={algorithm} />
    </>
  );
};

export default SearchingPage;
