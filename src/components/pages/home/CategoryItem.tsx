import { useContext, useEffect, useState } from "react"
import { FiltersContext } from "../../../context/filtersContext";
import { ICategory } from "../../../interfaces/services/RecipeCategories.interface";

export default function CategoryItem({ idCategory, strCategory, strCategoryThumb }: ICategory) {
  
  const { filters, setFilters } = useContext(FiltersContext);
  const [reactiveStyles, setReactiveStyles] = useState<string>('');

  const toggleReactiveStyles = ({ isActive }: {isActive: boolean}) => {
    if ( !isActive ) {
      setReactiveStyles('bg-gray-200 text-gray-500')
      return
    }

    setReactiveStyles('bg-custom-orange text-white');
  }
  
  useEffect(() => {

    if (strCategory == 'Todas' && filters.category == 'all') {
      toggleReactiveStyles({ isActive: true })
      return
    }

    if( filters.category != strCategory ) {
      toggleReactiveStyles({ isActive: false })
      return
    };

    toggleReactiveStyles({ isActive: true })
  }, [filters.category])

  const setCategory = () => setFilters({ ...filters, category: strCategory });

  return (
    <div 
      className={`min-w-fit flex items-center gap-x-3 px-4 py-2 rounded-3xl font-semibold cursor-pointer ${reactiveStyles}`}
      onClick={setCategory}
    >      
      {
        strCategoryThumb && (
          <img 
            className="h-8 w-8 object-cover rounded-full" 
            loading="lazy"
            src={strCategoryThumb} 
            alt={`Image Category - ${idCategory}`}
          />
        )
      }
      <span className="">{strCategory}</span>
    </div>
  )
}