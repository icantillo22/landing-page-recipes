import { IResponseRecipe } from "../interfaces/services/Recipe.interface";
import { IResponseRecipesByCategory } from "../interfaces/services/RecipeByCategory.interface";

const BASE_URL = import.meta.env.VITE_BASE_URL

export const getRecipeByCategory = async (category: string): Promise<IResponseRecipesByCategory> => {
  let newCategory = category;
  if (category == 'all') newCategory = 'Beef'

  const req = await fetch(`${BASE_URL}/filter.php?c=${newCategory}`)
  const res = await req.json();

  return {data: res.meals}
}

export const getRandomRecipe = async (): Promise<IResponseRecipe> => {
  
  const req = await fetch(`${BASE_URL}/random.php`)
  const res = await req.json();

  return {data: res.meals[0]}
}