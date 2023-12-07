import { Dispatch, SetStateAction, createContext } from "react";

interface Context {
  status: string,
  setStatus: Dispatch<SetStateAction<string>>,
  regions: string[]
  setRegions: Dispatch<SetStateAction<string[]>>,
  sortBy: string,
  setSortBy: Dispatch<SetStateAction<string>>,
  countries: any,
  setCountries: Dispatch<SetStateAction<any>>,
  search: string, 
  setSearch: Dispatch<SetStateAction<string>>,
  countriesFound: number
  setCountriesFound: Dispatch<SetStateAction<number>>

}

export const context = createContext<Context>(null!)