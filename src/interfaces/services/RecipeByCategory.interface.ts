export interface IResponseRecipesByCategory {
  data: IRecipeByCategory[];
}

export interface IRecipeByCategory {
  strMeal:      string;
  strMealThumb: string;
  idMeal:       string;
}