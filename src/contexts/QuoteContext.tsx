
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ProductQuoteData {
  productId: string;
  productName: string;
  category: string;
  specifications: string[];
}

interface QuoteContextType {
  selectedProduct: ProductQuoteData | null;
  setSelectedProduct: (product: ProductQuoteData | null) => void;
  scrollToQuote: () => void;
}

const QuoteContext = createContext<QuoteContextType | undefined>(undefined);

export const useQuote = () => {
  const context = useContext(QuoteContext);
  if (!context) {
    throw new Error('useQuote must be used within a QuoteProvider');
  }
  return context;
};

interface QuoteProviderProps {
  children: ReactNode;
}

export const QuoteProvider: React.FC<QuoteProviderProps> = ({ children }) => {
  const [selectedProduct, setSelectedProduct] = useState<ProductQuoteData | null>(null);

  const scrollToQuote = () => {
    const quoteSection = document.getElementById('quote');
    if (quoteSection) {
      quoteSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <QuoteContext.Provider value={{
      selectedProduct,
      setSelectedProduct,
      scrollToQuote
    }}>
      {children}
    </QuoteContext.Provider>
  );
};
