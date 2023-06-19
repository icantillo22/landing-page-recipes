import useFetchCategories from "../../../hooks/useFetchCategories";
import CategoryItem from "./CategoryItem";

export default function CategoryList() {
  const { isLoading, categories } = useFetchCategories();

  return (
    <div className="w-full overflow-x-auto flex gap-x-3 scrollbar-none">
      { isLoading && (<h2>Cargando...</h2>) }
      { !isLoading && 
        (<>
          <CategoryItem 
            idCategory="all"
            strCategory="Todas"
            strCategoryThumb=""
          />
          { 
            categories?.map(category => (
              <CategoryItem 
                key={category.idCategory} 
                idCategory={category.idCategory}
                strCategory={category.strCategory}
                strCategoryThumb={category.strCategoryThumb}
              />
            ))
          }
        </>) 
      }
    </div>
  )
}