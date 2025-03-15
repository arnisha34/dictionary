import { useContext, useState } from "react"
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import { Context } from "../utils/context"

export const Search = () => {

  const ctx = useContext(Context)

  const searchTerm = (e) => {
    const searchWord = e.target.value
    
    ctx.setWord(searchWord)


  }

  return(
    <div id="search" className="relative">
      <input type="text" placeholder="Start typing any word" value={ctx.word} onChange={searchTerm} className="rounded-xl w-full my-10 py-5 px-5 bg-stone-100 font-bold text-black text-[1.25rem] focus:outline-sky-500"/>
      <MagnifyingGlassIcon className="w-6 absolute top-15 right-5 text-sky-500"/>
    </div>
  )
}