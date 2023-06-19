import Hero from "../components/pages/home/Hero";
import RecipeOfTheDay from "../components/pages/home/RecipeOfTheDay";
import Recipes from "../components/pages/home/Recipes";
import PageTemplate from "../templates/PageTemplate";

export default function Home () {
  return (
    <PageTemplate>
      <section className="flex flex-col gap-y-5">
        <Hero />
        <RecipeOfTheDay />
        <Recipes />
      </section>
    </PageTemplate>
  )
}