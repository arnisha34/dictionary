import { useContext, useEffect, useState } from "react"
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import { Context } from "../utils/context"

export const Search = () => {

  const ctx = useContext(Context)
  const [query, setQuery] = useState(localStorage.getItem('word')); // Temporary state for input field

  useEffect(() => {
    localStorage.setItem('word', query);
}, [query]);

  const searchTerm = (e) => {
    setQuery(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    ctx.setWord(query)
  }

  return(
    <form id="search" className="relative" onSubmit={handleSubmit}>
      <input type="text" placeholder="Start typing any word" value={query} onChange={searchTerm} className="rounded-xl w-full my-10 py-5 px-5 bg-stone-100 font-bold text-black text-[1.25rem] focus:outline-none focus:ring-2 focus:ring-sky-500 dark:text-white dark:bg-sky-950"/>
      <MagnifyingGlassIcon className="w-6 absolute top-15 right-5 text-sky-500"/>
    </form>
  )
}