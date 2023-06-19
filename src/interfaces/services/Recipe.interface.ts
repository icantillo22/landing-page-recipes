export interface IResponseRecipe {
  data: IRecipe;
}

export interface IRecipe {
  idMeal:                      string;
  strMeal:                     string;
  strDrinkAlternate:           null;
  strCategory:                 string;
  strArea:                     string;
  strInstructions:             string;
  strMealThumb:                string;
  strYoutube:                  string;
  strSource:                   string;
  strImageSource:              null;
  strCreativeCommonsConfirmed: null;
  dateModified:                null;
}
