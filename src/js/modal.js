import { API_URL } from "./config";

export const state = {
  recipe: {},
};

// This function is the responsible for fetching the recipe data from API:

// this function will not return anything - it will change the state object
export const loadRecipe = async function (recipeId) {
  try {
    const res = await fetch(`${API_URL}/${recipeId}`);

    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);

    const { recipe } = data.data;

    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };

    // console.log("recipe:", state.recipe);
  } catch (error) {
    alert(error);
    console.error(error);
  }
};
