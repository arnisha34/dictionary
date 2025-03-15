import { useContext } from "react"
import { Context } from "../utils/context"


export const Word = () => {

  const ctx = useContext(Context)

  console.log(ctx.result)

  const phonetic = ctx.result.phonetics?.map(info => info.text)

  return(
    <div>
      <h1 className="font-bold text-7xl">{ctx.result.word}</h1>
      <p className="text-sky-500 text-2xl font-medium">{phonetic}</p>
    </div>
  )
}