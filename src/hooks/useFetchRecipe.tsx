import { useEffect, useState } from "react";
import { getRecipe } from "../services/getRecipes";
import { IRecipe } from "../interfaces/services/Recipe.interface";

export default function useFetchRecipe ({ isRandom, id }: { isRandom: boolean, id?: string }) {  
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [recipe, setRecipe] = useState<IRecipe | null>(null);

  useEffect(() => {
    setIsLoading(true);
    getRecipe({isRandom, id})
      .then((res) => {
        if ( !Boolean(res.data) ) return
        setRecipe(res.data);
      })
      .catch((error: Error ) => console.log({ error }))
      .finally(() => setIsLoading(false));

  }, []) 
  
    return { isLoading, recipe }   
}