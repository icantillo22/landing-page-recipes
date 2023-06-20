import { HeartIcon as HeartIconOn } from '@heroicons/react/24/solid';
import { HeartIcon as HeartIconOf } from '@heroicons/react/24/outline';
import useFavoriteRecipe from '../../../hooks/useFavoriteRecipe';


interface Props {
  className?: string
}

export default function HeartButton ({ className }: Props) {

  const { isFavorite, toggleFavorite } = useFavoriteRecipe()

  return (
    <button onClick={toggleFavorite}>
      {
        isFavorite ? <HeartIconOn className={`${className} text-red-600 cursor-pointer`} /> : <HeartIconOf className={`${className} text-red-600 cursor-pointer`} />
      }          
    </button>
  )
}