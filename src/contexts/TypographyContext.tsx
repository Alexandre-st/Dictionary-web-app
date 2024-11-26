import { createContext, ReactNode, useContext, useState } from 'react';
import { TypographyTypes } from '../types/typographyTypes';

const TypographyContext = createContext<TypographyTypes | undefined>(undefined);

const TypographyProvider = ({ children }: { children: ReactNode }) => {
  const [typography, setTypography] = useState<string>(
    () => localStorage.getItem('typography') || 'sans-serif'
  );

  const updateTypograhy = (value: string) => {
    setTypography(value);
    localStorage.setItem('typography', value);
  };

  return (
    <TypographyContext.Provider value={{ typography, setTypography: updateTypograhy }}>
      {children}
    </TypographyContext.Provider>
  );
};

const useTypography = () => {
  const context = useContext(TypographyContext);
  if (!context) {
    throw new Error('useTypography must be used within a TypographyProvider');
  }
  return context;
};

export { TypographyProvider, useTypography };
