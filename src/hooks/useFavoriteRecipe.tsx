import { useState } from 'react';

export default function useFavoriteRecipe () {
  const [isFavorite, setIsFavorite] = useState<boolean>(false)

  const toggleFavorite = () => setIsFavorite(!isFavorite);

  return { isFavorite, toggleFavorite }
}