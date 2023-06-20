import useFetchRecipe from "../../../hooks/useFetchRecipe";
import CardRecipe from "../../common/cards/CardRecipe";


export default function RecipeOfTheDay() {
  
  const { isLoading, recipe } = useFetchRecipe({ isRandom: true });

  return (
    <section className="flex flex-col">
      <section className="flex flex-col gap-y-7">
        <aside className="flex items-center justify-between gap-2">
          <h2 className="font-bold text-3xl text-custom-red">Receta del día</h2>
        </aside>
        <aside className="flex flex-col">        
          {
            !isLoading ?
              <CardRecipe
                id={recipe?.idMeal || ''}
                title={recipe?.strMeal || ''}
                url={recipe?.strMealThumb || ''}
              />                       
              : <h2>Cargando...</h2>
          }
        </aside>
      </section>
    </section>
  )
}