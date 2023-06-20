import { useParams } from "react-router-dom";
import useFetchRecipe from "./../hooks/useFetchRecipe";

import Hero from "../components/pages/recipeDetail/Hero";
import PageTemplate from "../templates/PageTemplate";
import Header from "../components/pages/recipeDetail/Header";
import Content from "../components/pages/recipeDetail/Content";


export default function RecipeDetail () {

const { id } = useParams();
const { recipe } = useFetchRecipe({ isRandom: false, id });

  return (
    <PageTemplate>
      <section className="flex flex-col gap-y-5">
        <Hero url={recipe?.strMealThumb} />
        <Header title={recipe?.strMeal} />
        <Content description={recipe?.strInstructions} />
      </section>
    </PageTemplate>
  )
}