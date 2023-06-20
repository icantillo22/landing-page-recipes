import { StarIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import getRandomNumber from "../../utils/getRandomNumber";

interface Props {
  className?: string
}

export default function Rating ({ className }: Props) {
  const [qualification, setQualification] = useState<number>(0);
  const ratings = new Array(5).fill(null);

  useEffect(() => {
    setQualification(getRandomNumber({ min: 3, max: 5 }));
  }, [])

  return (
    <div className={`${className} flex gap-x-1`}>
      {
        ratings.map((_, idx: number) => (
          <div key={idx}>
            { idx < qualification ? <StarIcon className="w-4 h-5 text-custom-orange" /> : <StarIcon className="w-4 h-5 text-custom-orange text-opacity-40" /> }
          </div>
        ))
      }            
    </div>
  )
}