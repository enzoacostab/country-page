'use client'

import Image from "next/image";
import { MouseEvent, useContext } from "react";
import { context } from "../context/context";

export default function Status () { 
  const {setStatus, status} = useContext(context)

  const handleClick = (e: MouseEvent<HTMLInputElement>) => {
    const { id } = e.target as HTMLInputElement
    setStatus(status === id ? '' : id)
  }
  
  return (
    <div className="flex flex-col gap-2">
      <p className="text-xs font-bold">Status</p>
      <label htmlFor="un" className="text-[#D2D5DA] w-fit text-sm flex gap-2 items-center">
        <div className="min-w-[28px] h-7 relative">
          <input onClick={handleClick} readOnly checked={status === "un" ? true : false} className="absolute appearance-none h-full w-full checked:bg-[#4E80EE] border-2 rounded-md border-[#6C727F] checked:border-[#4E80EE]" type="checkbox" id="un"/>
          <Image className={`${status != "un" ? 'hidden' : ''} absolute`} width={50} height={50} src="/Done_round.svg" alt="done image" />
        </div>
        <span>Member of the United Nations</span>
      </label>
      <label htmlFor="ind" className="text-[#D2D5DA] w-fit text-sm flex gap-2 items-center">
        <div className="min-w-[28px] h-7 relative">
          <input onClick={handleClick} readOnly checked={status === "ind" ? true : false} className="absolute appearance-none h-full w-full checked:bg-[#4E80EE] transition-all border-2 rounded-md border-[#6C727F] checked:border-[#4E80EE]" type="checkbox" value="ind" id="ind"/>
          <Image className={`${status != "ind" ? 'hidden' : ''} absolute`} width={50} height={50} src="/Done_round.svg" alt="done image" />
        </div>
        <span>Independent</span>
      </label>
    </div>
  )
}