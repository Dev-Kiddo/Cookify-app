import * as model from "./modal.js";

import recipeView from "./views/recipeView.js";

// import icons from "../img/icons.svg";// Parcel 1
import icons from "url:../img/icons.svg"; //Parcel 2

// the below two imports are polyfill
import "core-js/stable"; // polyfill everything
import "regenerator-runtime/runtime"; // polyfilling async/await

// importing API_URL Variable
// import * as './config';

import { API_URL } from "./config";

// console.log(icons);

const recipeContainer = document.querySelector(".recipe");

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// NEW API URL (instead of the one shown in the video)
//https://forkify-api.jonas.io/

///////////////////////////////////////

const controlRecipes = async function () {
  // Loading Recipe
  try {
    const recipeId = window.location.hash.slice(1);

    if (!recipeId) return;

    recipeView.renderSpinner();

    // this will call the model loadRecipe Function
    await model.loadRecipe(recipeId);

    const { recipe } = model.state;

    // console.log("Res:", res);
    // console.log("Data:", data);

    // Rendering Recipe
    recipeView.render(model.state.recipe);
  } catch (error) {
    alert(`Something Went Wrong:${error});
    }`);
  }
};

// showRecipe();

["hashchange", "load"].forEach((ev) => window.addEventListener(ev, controlRecipes));
// window.addEventListener("hashchange", showRecipe);
// window.addEventListener("load", showRecipe);
