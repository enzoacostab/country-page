'use client'

import Image from "next/image";
import { Suspense, useContext, useEffect } from "react";
import { context } from "../context/context";
import { useRouter } from "next/navigation";
import CountriesSkeleton from "./countries-skeleton";
import { Country } from "../types";

export default function Countries () {
  const { status, regions, sortBy, countries, search, setCountries, setCountriesFound } = useContext(context)
  const router = useRouter()
  const countriesToShow = countries?.sort((a: Country, b: Country) => sortBy === 'name' ? a.name.common.localeCompare(b.name.common) : b[sortBy] - a[sortBy])
    .filter((country: Country) => regions.length > 0 ? regions.includes(country.region) : true)
    .filter((country: Country) => search ? country.name.common.toLowerCase().includes(search) : true)

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      fetch(`https://restcountries.com/v3.1/${status ? `independent?status=${status === 'ind' ? 'true&' : 'false&'}` : 'all?'}fields=region,name,flags,population,area`)
        .then(response => response.json())
        .then(data => {
          setCountries(data)
        })
        .catch(error => {
          console.log(error)
        })
    }
    fetchData()
  }, [setCountries, status])

  return (
    <div className="w-full max-h-[720px] overflow-y-auto">
      <table cellPadding={10} className="w-full text-xs text-left" >
        <tbody>
        <tr className="border-b sticky top-0 z-20 bg-[#1B1D1F] border-b-[#282B30] h-14">
          <th className="w-[25%]">Flag</th>
          <th className="w-[25%]">Name</th>
          <th className="w-[25%]">Population</th>
          <th className="w-[25%]">Area (km²)</th>
        </tr>
        <Suspense fallback={<CountriesSkeleton countriesToShow={countriesToShow}/>}>
          {countriesToShow?.map((country: Country) => (
            <tr onClick={() => router.push(`/${country.name.official}`)} key={country.name.common} className="h-14 w-full cursor-pointer transition-opacity hover:opacity-75 active:opacity-100">
              <td><Image className="rounded-md w-[60px] h-auto" width={0} height={0} src={country.flags.svg} alt="flag image"/></td>
              <td className="text-[#D2D5DA] text-sm">{country.name.common}</td>
              <td className="text-[#D2D5DA] text-sm">{country.population.toLocaleString('en')}</td>
              <td className="text-[#D2D5DA] text-sm">{country.area.toLocaleString('en')}</td>
            </tr>
          ))}
        </Suspense>
        <CountriesSkeleton countriesToShow={countriesToShow}/>
        </tbody>
      </table>
    </div>
  )
}