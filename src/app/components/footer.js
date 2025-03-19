import { useContext } from "react"
import { Context } from "../utils/context"
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline" 

export const Footer = ()  => {

  const ctx = useContext(Context)

  return(
    <footer className="border-t-1 border-gray-200 flex text-sm gap-2 my-5 py-5">
      <p className="text-gray-500">Source</p>
      <a href={`https://api.dictionaryapi.dev/api/v2/entries/en/${ctx.word}`} rel="noreferrer noopener" target="_blank" className="dark:text-white flex text-gray-800 underline">https://api.dictionaryapi.dev/api/v2/entries/en/{ctx.word} <ArrowTopRightOnSquareIcon className="text-gray-500 w-4 ml-2"/></a>
    </footer>
  )
}