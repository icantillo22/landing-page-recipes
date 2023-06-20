import { useEffect, useState } from "react";
import getRandomNumber from "../../../utils/getRandomNumber";
import ICardRecipe from "../../../interfaces/components/common/cards/CardRecipe.interface";
import { Link } from "react-router-dom";
import HeartButton from "../buttons/HeartButton";
import Rating from "../Rating";
 
export default function CardRecipe({ id, title, url }: ICardRecipe) {

  const [reviews, setReviews] = useState<number>(0);
  
  const cutTitle = () => {
    const newTitle = title.split(' ');
    if( newTitle.length < 5 ) return title
    return `${newTitle.slice(0, 5).join(' ')}...`;
  }
  useEffect(() => {
    setReviews(getRandomNumber({min: 1, max: 100}))
  }, [])

  return (
    <div className="max-w-sm h-[18rem] w-full flex flex-col overflow-clip rounded-2xl border border-gray-300">
      <Link to={`/recipe/${id}`} className="h-[12rem] bg-gray-300 overflow-clip">
        <img 
          src={url}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </Link>
      <div className="flex flex-col p-4">
        <div className="flex items-center justify-between">
          <Link to={`/recipe/${id}`} className="font-semibold text-custom-orange">{cutTitle()}</Link>
          <HeartButton className="h-7 w-7" />
        </div>
        <div className="flex gap-x-2">
          <div className="flex gap-x-4 items-center">
            <Rating />
            {reviews} Reseñas
          </div>
        </div>
      </div>
    </div>
  )
}