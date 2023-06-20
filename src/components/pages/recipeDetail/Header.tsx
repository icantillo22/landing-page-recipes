import HeartButton from "../../common/buttons/HeartButton"
import { ClockIcon } from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';
import getRandomNumber from "../../../utils/getRandomNumber";
import Rating from "../../common/Rating";

interface Props {
  title?: string
}

export default function Header ({ title }: Props) {  

  const [time, setTime] = useState<string>('00-00');

  useEffect(() => {
    const min = getRandomNumber({ min: 10, max: 60 });
    const max = getRandomNumber({ min: min, max: 60 });

    setTime(`${min}-${max}`);
  }, [])

  return (
    <section className="w-full flex flex-col gap-y-2">
      <aside className="flex items-center gap-2 text-gray-600">
        <ClockIcon className="h-4 w-4" />
        <span>{time} min</span>
      </aside>
      <aside className="flex justify-between">
        <div className="flex flex-col md:flex-row md:items-center gap-x-4">
          <h1 className="font-bold text-xl md:text-3xl text-custom-orange">{title}</h1>
          <Rating className="md:mt-2" />
        </div>
        <HeartButton className="h-8 w-8" />
      </aside>
      <aside></aside>
    </section>
  )
}