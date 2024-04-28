/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const SortingAlgorithmContext = createContext();

export const SortingAlgorithmProvider = ({ children }) => {
  const location = useLocation();
  const [algorithm, setAlgorithm] = useState("bubbleSort");
  const [algorithmType, setAlgorithmType] = useState("sorting");

  useEffect(() => {
    const { pathname } = location;

    if (pathname === "/searching") {
      setAlgorithmType("searching");
    } else {
      setAlgorithmType("sorting");
    }
  }, [location]);

  return (
    <SortingAlgorithmContext.Provider value={{ algorithm, setAlgorithm, algorithmType, setAlgorithmType }}>
      {children}
    </SortingAlgorithmContext.Provider>
  );
};

export const useSortingAlgorithmContext = () => useContext(SortingAlgorithmContext);
