import { useContext, useRef } from "react"
import { Context } from "../utils/context"
import { PlayCircleIcon } from "@heroicons/react/16/solid"
import { Meanings } from "./meanings"
import { Footer } from "./footer"
import { FaceFrownIcon } from "@heroicons/react/24/outline"

export const Word = () => {

  const ctx = useContext(Context)
  const audioRef = useRef(null)
  
  const phonetic = ctx.wordData?.phonetics?.find(p => p.text&&p.audio)

  return(
    <>
    {!ctx.wordData || !ctx.word?
      <div className="error text-center text-lg flex-column content-center justify-items-center">
          <FaceFrownIcon className="w-10 mb-5"/>
          <h5 className="font-bold">Word not found... and neither is this page.</h5>
          <p>Looks like you’ve stumbled into the void of lost definitions. Try searching again!</p>
        </div>:
        <>
      <div className="flex justify-between">
        <div>
          <h1 className="font-bold text-6xl">{ctx.word}</h1>
          <p className="font-medium text-3xl text-sky-500 my-2">{phonetic?.text}</p>
        </div>
        {phonetic?.audio?
          <>
          <button 
            type="button" className="w-[80px] cursor-pointer" onClick={() => audioRef.current?.play()}>
            <PlayCircleIcon className="text-sky-300 hover:text-sky-500 dark:text-sky-800"/>
          </button>
          <audio ref={audioRef} src={phonetic?.audio || null} type="audio/mpeg" /></>: null
        }
      </div>
      <Meanings />
      <Footer />
      </>
    }
    </>
  )
}