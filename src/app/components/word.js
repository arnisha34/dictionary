import { useContext, useRef } from "react"
import { Context } from "../utils/context"
import { PlayCircleIcon } from "@heroicons/react/16/solid"


export const Word = () => {

  const ctx = useContext(Context)

  const audioRef = useRef(null)

  const phonetic = ctx.wordData?.phonetics?.find(p => p.text&&p.audio)

  return(
    <div className="flex justify-between">
      <div>
        <h1 className="font-bold text-6xl">{ctx.wordData?.word}</h1>
        <p className="font-medium text-3xl text-sky-500 my-2">{phonetic?.text}</p>
      </div>
      {phonetic?.audio?
      <>
      <button 
        type="button" className="w-[80px] cursor-pointer" onClick={() => audioRef.current?.play()}>
        <PlayCircleIcon className="text-sky-300 hover:text-sky-500 dark:text-sky-800"/>
      </button>
      <audio ref={audioRef} src={phonetic?.audio || null} type="audio/mpeg" /></>:null}
    </div>
  )
}