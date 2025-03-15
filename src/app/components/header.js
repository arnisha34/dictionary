import { useContext } from 'react'
import { Fonts } from './fonts'
import { BookOpenIcon } from "@heroicons/react/24/outline"
import { MoonIcon } from "@heroicons/react/24/outline"
import { Context } from '../utils/context'

export const Header = () => {

  const ctx = useContext(Context)

  const handleCheck = () => {
    ctx.setIsChecked(!ctx.isChecked)
  }
  
  return(
    <header className="flex justify-between text-[1.125rem] relative z-1">
      <BookOpenIcon className="logo h-10 w-10"/>
      <div className="flex">
        <Fonts />
        <div className="pl-3 flex items-center">
          <div className="pr-5">
            <label className="cursor-pointer">
              <input type="checkbox" value="" id="toggle-mode" className="sr-only peer" checked={ctx.isChecked} onChange={handleCheck}/>
              <span className="relative inline-block w-10 h-5 bg-gray-500 rounded-full dark:bg-gray-700 peer-checked:after:translate-x-full after:absolute after:top-[4px] after:start-[5px] after:end-[10px] after:bg-white after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-sky-500"></span>
            </label>
          </div>
          <div className="moon-icon self-start pt-1"><MoonIcon className="h-[1.5rem] text-gray-500"/></div>
        </div>
      </div>
    </header>
  )
}