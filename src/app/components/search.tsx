'use client'

import Image from "next/image"
import { ChangeEvent, useContext } from "react"
import { context } from "../context/context"

export default function Search () {
  const { search, countries, countriesFound, setSearch } = useContext(context)
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setSearch(value)
  }
  
  return (
    <div className="flex justify-between items-center w-full overflow-hidden">
      <p className="text-md font-bold">{`Found ${countriesFound} countries`}</p>
      <div className="flex bg-[#282B30] p-2 rounded-xl w-fit gap-3">
        <Image width={30} height={30} src={'/Search.svg'} alt="Search image"/>
        <input value={search} onChange={handleChange} type="text" className="bg-transparent text-sm w-fit min-w-[280px] focus-visible:outline-none placeholder:text-[#6C727F] placeholder:font-bold" placeholder="Search by Name, Region, Subregion" />
      </div>
    </div>
  )
}