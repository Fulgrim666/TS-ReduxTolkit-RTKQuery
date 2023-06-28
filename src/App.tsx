import { Routes, Route } from "react-router-dom";
import { HomePage } from "./mainPage";
import { FavoritePages } from "./favoritePages";
import { Navigation } from "./components/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/favorite"} element={<FavoritePages />} />
      </Routes>
    </>
  );
}

export default App;
