export default async function fetchByIngredients(ingredients) {
  console.log("fetchByIngredients called");
  console.log(ingredients);

  const response = await fetch(
    `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients.join(",")}&number=12&apiKey=${import.meta.env.VITE_SPOONACULAR_KEY}`,
  );

  const data = await response.json();
  console.log(data);
  return data;
}
