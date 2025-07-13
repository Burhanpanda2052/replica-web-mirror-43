
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

interface SearchContextType {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  performSearch: (query: string) => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const performSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim()) {
      navigate(`/products-services?search=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery, performSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};
