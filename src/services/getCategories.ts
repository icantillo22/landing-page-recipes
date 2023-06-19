import { IResponseRecipeCategories } from "../interfaces/services/RecipeCategories.interface";

const BASE_URL = import.meta.env.VITE_BASE_URL

export const getCategories = async (): Promise<IResponseRecipeCategories> => {
  const req = await fetch(`${BASE_URL}/categories.php`)
  const res = await req.json();

  return {data: res.categories}
}