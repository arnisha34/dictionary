"use client"
import { useContext, useState } from "react"
import {fontNames} from '../utils/fontNames'
import { Context } from '../utils/context'
import { ChevronDownIcon } from "@heroicons/react/24/outline"

export const Fonts = () => {

  const ctx = useContext(Context)
  
  const [isOpen, setisOpen] = useState(false)
  const [fontName, setFontName] = useState('Sans Serif')

  const listItems = Object.entries(fontNames).map(([key,value]) => <li key={key} value={value} className={`${value} capitalize hover:text-sky-600`} onClick={() => [ctx.setCurrFont(value), setFontName(key), handleClick()]}>{key}</li>)

  const handleClick = () => {
    setisOpen(!isOpen)
  }

  return(
    <div id="fontOptions" className="text-md font-bold pr-5 self-center relative min-w-[175px]">
      <button type="button" id="current-font" className="flex justify-end items-center cursor-pointer capitalize border-r-gray-300 border-r-1 w-full pr-5" onClick={handleClick}><span>{fontName}</span><ChevronDownIcon className="w-4 ml-4 text-sky-600"/></button>
      <ul className={`${isOpen===false?'hidden':''} transition-all transition-discrete duration-300 font-option flex flex-col gap-4 bg-white mt-3 pl-5 pr-10 py-5 rounded-2xl drop-shadow-lg cursor-pointer hover:sky-600 absolute`}>
      {listItems}
      </ul>
    </div>
  )
}