import { useEffect, useState } from "react";
import { StarIcon, HeartIcon as HeartIconOn  } from "@heroicons/react/24/solid"
import { HeartIcon as HeartIconOf } from "@heroicons/react/24/outline"
import getRandomNumber from "../../../utils/getRandomNumber";
import ICardRecipe from "../../../interfaces/components/common/cards/CardRecipe.interface";
import { Link } from "react-router-dom";
 
export default function CardRecipe({ id, title, url }: ICardRecipe) {

  const [isFavorite, setIsFavorite] = useState<boolean>(false)
  const [reviews, setReviews] = useState<number>(0);
  const [qualification, setQualification] = useState<number>(0)
  const ratings = new Array(5).fill(null);
  
  const cutTitle = () => {
    const newTitle = title.split(' ');
    if( newTitle.length < 5 ) return title
    return `${newTitle.slice(0, 5).join(' ')}...`;
  }
  useEffect(() => {
    setReviews(getRandomNumber({min: 1, max: 100}))
    setQualification(getRandomNumber({ min: 3, max: 5 }));
  }, [])

  return (
    <div className="max-w-sm h-[18rem] w-full flex flex-col overflow-clip rounded-2xl border border-gray-300">
      <Link to={`/recipe/${id}`} className="h-[12rem] bg-black overflow-clip">
        <img 
          src={url}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </Link>
      <div className="flex flex-col p-4">
        <div className="flex items-center justify-between">
          <Link to={`/recipe/${id}`}>{cutTitle()}</Link>
          <button onClick={() => setIsFavorite(!isFavorite)}>
            {
              isFavorite ? <HeartIconOn className="h-7 w-7 text-red-600 cursor-pointer" /> : <HeartIconOf className="h-7 w-7 text-red-600 cursor-pointer" />
            }          
          </button>
        </div>
        <div className="flex gap-x-2">
          <div className="flex gap-x-4 items-center">
            <div className="flex gap-x-1">
              {
                ratings.map((_, idx: number) => (
                  <div key={`${id}-${idx}`}>
                    { idx < qualification ? <StarIcon className="w-4 h-5 text-custom-orange" /> : <StarIcon className="w-4 h-5 text-custom-orange text-opacity-40" /> }
                  </div>
                ))
              }            
            </div>
            {reviews} Reseñas
          </div>
        </div>
      </div>
    </div>
  )
}