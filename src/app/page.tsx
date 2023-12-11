import Image from "next/image"
import Regions from "./components/regions"
import Status from "./components/status"
import Countries from "./components/countries"
import SortBy from "./components/sort-by"
import Search from "./components/search"

export default async function Home() {
  return (
    <main className="flex h-full w-full pt-[20%] text-[#6C727F] lg:px-7 justify-center">
      <div className="bg-[#1B1D1F] mb-[10%] gap-8 flex flex-col p-5 border-y lg:border lg:rounded-lg border-[#282B30] h-full w-full z-20">
        <Search/>
        <div className="flex w-full flex-col lg:flex-row gap-10">
          <div className="flex flex-col w-full lg:w-[30%] gap-6"> 
            <SortBy/>
            <Regions/>
            <Status/>
          </div>
          <Countries/>
        </div>
      </div>
    </main>
  )
}
