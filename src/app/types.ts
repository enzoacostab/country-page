import SortBy from "./components/sort-by"

export type Countries = Country[]

export interface Country {
  area: number,
  flags: Flags,
  name: Names,
  population: number,
  region: string,
  [sortBy: string]: any
}

interface Flags {
  alt: string,
  png: string,
  svg: string
}

interface Names {
  common: string,
  nativeName: any,
  official: string
}
