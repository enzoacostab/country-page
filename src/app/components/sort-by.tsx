'use client'

import { ChangeEvent, useContext } from "react"
import { context } from "../context/context"

export default function SortBy () {
  const { sortBy, setSortBy } = useContext(context)
  
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target
    setSortBy(value)
  }
  
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs font-bold">Sort by</p>
      <div className="relative after:content-[url('/Expand_down.svg')] after:absolute after:top-[50%] after:translate-y-[-50%] after:right-4">
        <select onChange={handleChange} className="py-2 px-3 text-[#D2D5DA] text-sm rounded-xl focus-visible:outline-none w-full bg-[#1B1D1F] border-2 border-[#282B30] appearance-none " name="" id="">
          <option className="w-fit text-sm" value="population">Population</option>
          <option className="w-fit text-sm" value="name">Name</option>
          <option className="w-fit text-sm" value="area">Area</option>
        </select>
      </div>
    </div>
  )
}