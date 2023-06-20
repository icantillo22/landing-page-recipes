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

export const getRecipe = async ({ id, isRandom }: { isRandom: boolean, id?: string }): Promise<IResponseRecipe> => {
  
  let url = isRandom ? `${BASE_URL}/random.php` : `${BASE_URL}/lookup.php?i=${id}`;

  const req = await fetch(url)
  const res = await req.json();

  return {data: res.meals[0]}
}