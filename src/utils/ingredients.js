import { getIngredients } from "./api";

let ingredients = [];

export const fetchIngredients = async () => {
  try {
    const data = await getIngredients();
    ingredients = data;
  } catch (error) {
    console.error(error);
  }
};

export const getBunIngredients = () => ingredients.filter((ingredient) => ingredient.type === 'bun');
export const getSauceIngredients = () => ingredients.filter((ingredient) => ingredient.type === 'sauce');
export const getMainIngredients = () => ingredients.filter((ingredient) => ingredient.type === 'main');
