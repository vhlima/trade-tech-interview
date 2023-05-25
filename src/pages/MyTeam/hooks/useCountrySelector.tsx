import { type PropsWithChildren, createContext, useContext, useState } from "react";

import { useFetchFootballAPI } from "../../../hooks/useFetchFootballAPI";

export type Country = {
  name: string;
  code: string;
  flag: string;
}

type ChangeSelectedCountry = (countryId: string) => void;

interface CountrySelectorContextData {
  countriesResponse: {
    data: Country[];
    error?: string;
    isLoading: boolean;
  };
  selectedCountry?: Country;
  changeSelectedCountry: ChangeSelectedCountry;
}

const CountrySelectorContext = createContext({} as CountrySelectorContextData);

export const CountrySelectorProvider: React.FC<PropsWithChildren> = props => {
  const { children } = props;

  const [selectedCountry, setSelectedCountry] = useState<Country | undefined>(undefined);

  const countriesResponse = useFetchFootballAPI<Country[]>({
    route: '',
    mock: Array.from({ length: 10 }).map((_, index) => ({
      "name": `England ${index}`,
      "code": `GB${index}`,
      "flag": "https://media.api-sports.io/flags/gb.svg"
    }))
  });

  const changeSelectedCountry: ChangeSelectedCountry = countryId => {
    if(!countriesResponse.data) {
      return;
    }

    const countryFound = countriesResponse.data.find(country => country.name === countryId);
    
    if(countryFound) {
      setSelectedCountry(countryFound);
    }
  }

  return (
    <CountrySelectorContext.Provider value={{
      countriesResponse: {
        ...countriesResponse,
        data: countriesResponse.data || [],
      },
      selectedCountry,
      changeSelectedCountry,
    }}>
      {children}
    </CountrySelectorContext.Provider>
  )
}

export function useCountrySelector(): CountrySelectorContextData {
  const context = useContext(CountrySelectorContext);

  if(!context) {
    throw new Error('useCountrySelector must be used within an provider.');
  }

  return context;
}