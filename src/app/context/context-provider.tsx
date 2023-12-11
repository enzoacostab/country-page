'use client'

import React, { useState } from "react";
import { context } from "./context";
import { Countries } from "../types";

export default function ContextProvider ({ children }: { children: React.ReactNode}) {
  const [status, setStatus] = useState<string>('')
  const [regions, setRegions] = useState<string[]>([])
  const [sortBy, setSortBy] = useState<string>('population')
  const [countries, setCountries] = useState<Countries>(null!)
  const [search, setSearch] = useState<string>('')
  const [countriesFound, setCountriesFound] = useState(0)

  const value = {
    status, setStatus,
    regions, setRegions,
    sortBy, setSortBy,
    countries, setCountries,
    search, setSearch,
    countriesFound, setCountriesFound
  }

  return (
    <context.Provider value={value}>
      {children}
    </context.Provider>
  )
}