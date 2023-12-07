import Row from "./components/row";
import { findCountry } from "country-code-info";
import Image from "next/image";

const fetchData = async (name: string) => {
  try {
    const data = await fetch(`https://restcountries.com/v3.1/name/${name}`)
    const country = await data.json()
    return country
  } catch(error) {
    console.error(error)
  }
}

export default async function CountryPage ({ params }: { params: { name: string }}) {
  const { name } = params
  const data: any[] = await fetchData(name)
  const currencies: string = Object.entries(data[0].currencies).map((e: any)=>e[1].name).join(', ')
  const langs: string = Object.values(data[0].languages).join(', ')
  const continents: string = Object.values(data[0].continents).join(', ')
  const borders = data[0]?.borders?.map((countryCode: string) => findCountry({fifa: countryCode})?.name)
  const neighborCountries: any[] = new Array(5).fill(null)
  
  const fetchFlags = async () => {
    for (const border of borders) {
      if (border) {
        const country: any[] = await fetchData(border.toLowerCase())
        neighborCountries.unshift({
          flag: country[0]?.flags.svg,
          name: country[0]?.name.common
        })
      }
    }
  }

  borders && await fetchFlags()
  
  return (
    <div className="h-full w-full lg:w-[55%] lg:z-20 pb-[5%] mt-[17%] lg:mt-[20%] lg:border lg:rounded-xl text-[#D2D5DA] bg-[#1c1d1f] text-sm mb-[10%] border-[#282B30] border-y">
      <div className="w-full lg:-mt-10 h-full gap-7 pb-10 border-b border-[#282B30] flex flex-col items-center justify-center">
        <Image className="z-20 rounded-xl" width={250} height={100} src={data[0].flags.svg || '/next.svg'} alt="flag" />
        <div>
          <h1 className="text-xl text-center">{data[0].name.common}</h1>
          <p>{data[0].name.official}</p>
        </div> 
        <div className="w-full flex justify-center gap-5">
          <div className="bg-[#282B30] px-2 py-2 rounded-xl flex">
            <span className="border-r pr-4 p-2 border-r-[#1B1D1F]">Population</span>
            <span className="py-2 pl-4">{data[0].population.toLocaleString()}</span>
          </div>
          <div className="bg-[#282B30] px-2 py-2 rounded-xl flex">
            <span className="border-r pr-4 p-2 border-r-[#1B1D1F]">Area (km²)</span>
            <span className="p-2 pl-4">{data[0].area.toLocaleString()}</span>
          </div>
        </div>
      </div>
      <Row text="Capital" value={data[0].capital}/>
      <Row text="Subregion" value={data[0].subregion}/>
      <Row text="Language" value={langs}/>
      <Row text="Currencies" value={currencies}/>
      <Row text="Continents" value={continents}/>
      <div className="p-5">
        <p className="text-[#6C727F] pb-5">Neighbouring Countries</p>
        <div className="flex gap-3 w-[80%]">
          {neighborCountries.slice(0, 5).map((country, i) => 
            country 
              ? <div className="w-[80px]" key={country.name}>
                  <Image className="rounded-md mb-2" src={country.flag} alt="neighboring country flag" width={80} height={0}/>
                  <p className="text-xs">{country.name}</p>
                </div>
              : <div className="w-[80px]" key={i}>
                  <div className="h-full max-h-[55px] rounded-md mb-2 bg-[#282B30]"></div>
                  <p className="h-3 bg-[#282B30] rounded-xl">{}</p>
                </div>
          )}
              
        </div>
      </div>
    </div>
  )
}