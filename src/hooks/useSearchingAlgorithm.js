import { useEffect } from "react";
import { useState } from "react";
import { generateNumberArray } from "../utils/generateNumberArray";
import { linearSearch } from "../utils/searchingAlgorithms";

const useSearchingAlgorithm = (searchingAlgorithm, speed, arrayLength) => {
  const [array, setArray] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [isNumberFound, setIsNumberFound] = useState(false);
  const [checkedValue, setCheckedValue] = useState([]);
  const [target, setTarget] = useState(0);

  useEffect(() => {
    setArray(generateNumberArray(arrayLength));
    setIsNumberFound(false);
  }, [arrayLength]);

  const generateNewArray = () => {
    setArray(generateNumberArray(arrayLength));
    setIsNumberFound(false);
  };

  const startSearching = async () => {
    switch (searchingAlgorithm) {
      case "linearSearch":
        linearSearch(array, target, setIsSearching, setIsNumberFound, setCheckedValue, speed);
        break;

      default:
        break;
    }
  };

  return { array, target, setTarget, isSearching, isNumberFound, checkedValue, startSearching, generateNewArray };
};

export default useSearchingAlgorithm;
