import { useState } from "react";
import fetchByIngredients from "../lib/api";
import { useQuery } from "@tanstack/react-query";

function SearchByIngredients() {
  const [input, setInput] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["recipes", ingredients],
    queryFn: () => fetchByIngredients(ingredients),
    enabled: hasSearched && ingredients.length > 0,
  });

  function addIngredient() {
    const trimmed = input.trim().toLowerCase();
    if (!trimmed || ingredients.includes(trimmed)) return;
    setIngredients([...ingredients, trimmed]);
    setInput("");
  }

  function removeIngredient(item) {
    setIngredients(ingredients.filter((i) => i !== item));
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") addIngredient();
  }

  return (
    <div
      className={
        hasSearched
          ? "flex justify-center px-6 pt-28"
          : "min-h-screen flex flex-col justify-center items-center px-6 pt-28"
      }
    >
      <div className="bg-[#FFF8F0] rounded-2xl shadow-lg p-8 w-full max-w-xl">
        <h1
          className="text-2xl font-bold text-[#1A1A2E] mb-6"
          style={{ fontFamily: "Clash Display" }}
        >
          What's in your fridge?
        </h1>

        {/* Input row */}
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="e.g. eggs, tomato..."
            className="flex-1 border border-[#1A1A2E] rounded-full px-4 py-2 text-sm text-[#1A1A2E] outline-none focus:ring-2 focus:ring-[#FF8C69] bg-white"
          />
          <button
            onClick={addIngredient}
            className="px-5 py-2 rounded-full bg-[#FF8C69] text-[#1A1A2E] text-sm font-medium hover:bg-[#ff7a52] transition-colors cursor-pointer"
          >
            Add
          </button>
        </div>

        {/* Chips */}
        {ingredients.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {ingredients.map((item) => (
              <span
                key={item}
                className="flex items-center gap-1 px-3 py-1 rounded-full bg-[#FF8C69] text-[#1A1A2E] text-sm font-medium"
              >
                {item}
                <button
                  onClick={() => removeIngredient(item)}
                  className="ml-1 text-[#1A1A2E] hover:text-[#4ECDC4] transition-colors cursor-pointer"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        )}

        {/* Find Recipes button */}
        {ingredients.length > 0 && (
          <button
            onClick={() => {
              setHasSearched(true);
            }}
            className="mt-6 w-full py-3 rounded-full bg-[#1A1A2E] text-[#FFF8F0] font-medium hover:bg-[#2a2a4e] transition-colors cursor-pointer"
          >
            Find Recipes
          </button>
        )}
      </div>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Something went wrong.</p>}
      {data && <p>{data.length} recipes found</p>}
    </div>
  );
}

export default SearchByIngredients;
