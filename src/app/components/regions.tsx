'use client'

import { ChangeEvent, useContext, useEffect } from "react"
import { context } from "../context/context"

export default function Regions () {
  const { regions, setRegions } = useContext(context)
  
  const handleRegionChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setRegions(regions.includes(value)
      ? regions.filter(region => region != value)
      : regions.concat(value))
  }

  const regionChecked = (region: string) => {
    return regions.includes(region)
      ? "bg-[#282B30] text-[#D2D5DA]"
      : ""
  }

  return (
    <div>
      <p className="text-xs font-bold">Region</p>
      <input onChange={handleRegionChange} className="hidden" type="checkbox" name="c" id="am" value="Americas"/>
      <input onChange={handleRegionChange} className="hidden" type="checkbox" name="c" id="an" value="Antartic"/>
      <input onChange={handleRegionChange} className="hidden" type="checkbox" name="c" id="af" value="Africa"/>
      <input onChange={handleRegionChange} className="hidden" type="checkbox" name="c" id="as" value="Asia"/>
      <input onChange={handleRegionChange} className="hidden" type="checkbox" name="c" id="eu" value="Europe"/>
      <input onChange={handleRegionChange} className="hidden" type="checkbox" name="c" id="oc" value="Oceania"/>
      <div className="w-full flex-wrap flex gap-2">
        <label className={`${regionChecked('Americas')} cursor-pointer transition-all rounded-2xl p-3`} htmlFor="am">Americas</label>
        <label className={`${regionChecked('Antartic')} cursor-pointer transition-all rounded-2xl p-3`} htmlFor="an">Antartic</label>
        <label className={`${regionChecked('Africa')} cursor-pointer transition-all rounded-2xl p-3`} htmlFor="af">Africa</label>
        <label className={`${regionChecked('Asia')} cursor-pointer transition-all rounded-2xl p-3`} htmlFor="as">Asia</label>
        <label className={`${regionChecked('Europe')} cursor-pointer transition-all rounded-2xl p-3`} htmlFor="eu">Europe</label>
        <label className={`${regionChecked('Oceania')} cursor-pointer transition-all rounded-2xl p-3`} htmlFor="oc">Oceania</label>
      </div>
    </div>
  )
}