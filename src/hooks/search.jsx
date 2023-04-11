import { createContext, useContext, useState } from 'react';

const SearchContext = createContext('');

function SearchProvider({ children }) {
  const [search, setSearch] = useState('');

  return <SearchContext.Provider value={{ setSearch, search }}>{children}</SearchContext.Provider>;
}

function useSearch() {
  const context = useContext(SearchContext);
  return context;
}

export { useSearch, SearchProvider };
