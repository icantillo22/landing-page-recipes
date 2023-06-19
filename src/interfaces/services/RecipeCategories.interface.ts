export interface IResponseRecipeCategories {
  data: ICategory[];
}

export interface ICategory {
  idCategory:             string;
  strCategory:            string;
  strCategoryThumb:       string;
  strCategoryDescription?: string;
}
