import { useContext, useEffect, useState } from "react"
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import { Context } from "../utils/context"

export const Search = () => {

  const ctx = useContext(Context)
  const [query, setQuery] = useState(localStorage.getItem('word')); // Temporary state for input field
  const [error, setError] = useState(false)

  useEffect(() => {
    localStorage.setItem('word', query);
}, [query]);

  const searchTerm = (e) => {
    setQuery(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(query === ""){
      setError(true)
    }else{
      setError(!error)
    ctx.setWord(query)
    }
  }

  return(
    <form id="search" className="relative mb-5" onSubmit={handleSubmit}>
      <input type="text" placeholder="Start typing any word" value={query} onChange={searchTerm} className="is-empty rounded-xl w-full my-10 py-5 px-5 bg-stone-100 font-bold text-black text-[1.25rem] focus:outline-none focus:ring-2 focus:ring-sky-500 placeholder-shown:focus:ring-pink-600 dark:text-white dark:bg-sky-950 peer"/>
      <MagnifyingGlassIcon className="w-6 absolute top-15 right-5 text-sky-500 peer-placeholder-shown:text-pink-600"/>
      <p className="hidden peer-placeholder-shown:block absolute left-5 top-30 text-pink-600 font-bold">Search can`t be empty</p>
    </form>
  )
}