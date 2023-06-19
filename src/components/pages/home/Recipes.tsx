import { ChangeEvent, useContext } from "react";
import useFetchRecipeByCategory from "../../../hooks/useFetchRecipeByCategory"
import CardRecipe from "../../common/cards/CardRecipe";
import { FiltersContext } from "../../../context/filtersContext";
import CategoryList from "./CategoryList";

export default function Recipes () {
  const { filters, setFilters } = useContext(FiltersContext);
  const { isLoading, recipes } = useFetchRecipeByCategory({ category: filters.category });

  const clearSearch = () => {
    setFilters({...filters, search: ''})
  }
  const handelChangeInput = (e: ChangeEvent) => {    
    const target = e.target as HTMLInputElement; 

    if (!target.value.trim()) {
      clearSearch();
      return
    };

    setFilters({ ...filters, search: target.value });
  }

  const filterRecipes = () => {
    if (filters.search == '') return recipes;

    return recipes.filter(recipe => recipe.strMeal.toLocaleUpperCase().includes(filters.search.toLocaleUpperCase()))
  }

  return (
    <section className="flex flex-col gap-y-14">
      <aside className="flex flex-col sm:flex-row justify-between gap-y-2">
        <h2 className="font-bold text-3xl text-custom-red">Recetas</h2>
        <input 
          type="search" 
          placeholder="Buscar por nombre"
          className="max-w-xs rounded-3xl bg-gray-200 text-gray-500 placeholder:text-gray-500 px-3 py-2"
          onChange={(e) => handelChangeInput(e)}
          defaultValue={filters.search}
        />
      </aside>
      <CategoryList />
      <aside className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center">        
        {
          !isLoading &&
            <>
              {
                filterRecipes()?.map((recipe, idx) => (
                  <CardRecipe 
                    key={idx} 
                    id={recipe.idMeal} 
                    title={recipe.strMeal}
                    url={recipe.strMealThumb}
                  />
                ))
              }
            </>              
        }
        { isLoading && (<h2>Cargando...</h2>) }
      </aside>
    </section>
  )
}