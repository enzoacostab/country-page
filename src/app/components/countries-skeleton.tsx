import React, { useContext, useEffect, useState } from "react"
import { context } from "../context/context"

export default function CountriesSkeleton ({ countriesToShow }: { countriesToShow: any }): React.JSX.Element {
  const { setCountriesFound } = useContext(context)
  const [countriesSkeleton, setCountriesSkeleton] = useState<number[]>(new Array(11).fill(0))

  useEffect(() => {
    const len = countriesToShow?.length
    setCountriesFound(len)
    if (len<11) {
      let arr = new Array(11-len).fill(0)
      setCountriesSkeleton(arr)
    }
  }, [setCountriesFound, countriesToShow])

  return (
    <>
      {countriesSkeleton.map((e: any, i: any) => 
        <tr className="h-14" key={i}>
          <td><div className="w-[60px] h-[40px] rounded-md bg-[#282B30]"></div></td>
          <td><div className="w-full h-3 rounded-xl bg-[#282B30]"></div></td>
          <td><div className="w-full h-3 rounded-xl bg-[#282B30]"></div></td>
          <td><div className="w-full h-3 rounded-xl bg-[#282B30]"></div></td>
        </tr>
      )}
    </>
  )
}