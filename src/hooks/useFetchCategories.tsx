import { useEffect, useState } from "react";
import { ICategory } from "../interfaces/services/RecipeCategories.interface";
import { getCategories } from "../services/getCategories";

export default function useFetchCategories () {  
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [categories, setCategories] = useState<ICategory[] | null>(null);

  useEffect(() => {
    setIsLoading(true);
    getCategories()
      .then((res) => {
        if ( !Boolean(res.data) ) return
        setCategories(res.data);
      })
      .catch((error: Error ) => console.log({ error }))
      .finally(() => setIsLoading(false));

  }, []) 
  
    return { isLoading, categories }   
}