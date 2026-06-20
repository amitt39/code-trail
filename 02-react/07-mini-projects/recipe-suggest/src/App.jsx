import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RecipeDetails from "./pages/RecipeDetails";
import Favorites from "./pages/Favorites";
import Navbar from "./components/ui/Navbar";
import SearchByIngredients from "./pages/SearchByIngredients";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/search-by-ingredients"
          element={<SearchByIngredients />}
        />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </>
  );
}

export default App;
