import Navbar from "./components/Navbar";
import { Route, Routes, Navigate } from "react-router-dom";
import SortingPage from "./pages/SortingPage";
import SearchingPage from "./pages/SearchingPage";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Navigate to="/sorting" />} />
        <Route path="/sorting" element={<SortingPage />} />
        <Route path="/searching" element={<SearchingPage />} />
      </Routes>
    </>
  );
};

export default App;
