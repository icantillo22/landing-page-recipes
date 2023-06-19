import { useEffect, useState } from "react";
import { IRecipeByCategory } from "../interfaces/services/RecipeByCategory.interface";
import { getRecipeByCategory } from "../services/getRecipes";

export default function useFetchRecipeByCategory ({ category }: { category: string }) {  
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [recipes, setRecipes] = useState<IRecipeByCategory[]>([]);

  useEffect(() => {
    setIsLoading(true);
    getRecipeByCategory(category)
      .then((res) => {
        if ( !Boolean(res.data) ) return
        setRecipes(res.data);
      })
      .catch((error: Error ) => console.log({ error }))
      .finally(() => setIsLoading(false));

  }, [category]) 
  
    return { isLoading, recipes }   
}