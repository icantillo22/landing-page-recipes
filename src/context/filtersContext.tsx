import { createContext, useState, Dispatch, SetStateAction } from "react";

interface IFiltersContext {
  filters: IFilters;
  setFilters: Dispatch<SetStateAction<IFilters>>;
}

interface IFilters {
  category: string, 
  search: string
}

export const FiltersContext = createContext<IFiltersContext>({ 
  filters: { category: '', search: '' }, 
  setFilters: () => {},
});

export function FiltresProvider ({children}: { children: JSX.Element }) {
  const [filters, setFilters] = useState<{ category: string, search: string }>({ category: 'all', search: '' });
  
  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>
      {children}
    </FiltersContext.Provider>
  )
}