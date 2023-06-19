import { useEffect, useState } from "react";
import { getRandomRecipe } from "../services/getRecipes";
import { IRecipe } from "../interfaces/services/Recipe.interface";

export default function useFetchRandomRecipe () {  
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [recipe, setRecipe] = useState<IRecipe | null>(null);

  useEffect(() => {
    setIsLoading(true);
    getRandomRecipe()
      .then((res) => {
        if ( !Boolean(res.data) ) return
        setRecipe(res.data);
      })
      .catch((error: Error ) => console.log({ error }))
      .finally(() => setIsLoading(false));

  }, []) 
  
    return { isLoading, recipe }   
}