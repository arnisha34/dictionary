import { useContext } from "react"
import { Context } from "../utils/context"


export const Meanings = () => {

  const ctx = useContext(Context)

  return(
    ctx.wordData?.meanings?.map((def, i) => {
      return(
        <section key={i} className="mt-5">
          <div className="flex items-center gap-3">
            <h3 className="italic relative text-2xl font-bold my-5">{def?.partOfSpeech}</h3>
            <hr className="w-full border-gray-200"></hr>
          </div>
          {def.definitions.length?
          <div key={i} id="meaning" className="">
           <h5 className="font-medium text-xl text-gray-500">Meaning</h5>
           <ul className="font-medium list-disc marker:text-sky-500 pl-10 text-lg">
            {def.definitions.map((d, i) => d.definition.length > 1 ? <li key={i} className="mt-[0.825em]">{d.definition}</li>: <p key={i}>{d.definition}</p>)}
           </ul>
          </div>:""}
          {def.synonyms.length?
          <div key={i+1} id="synonyms" className="flex my-10 items-center">
          <h5 className="font-medium text-xl text-gray-500">Synonyms</h5>
          <ul className="flex flex-wrap font-bold gap-x-4 pl-5 text-lg text-sky-500">
            {def?.synonyms?.map((s, i) => s.length > 1 ? <li key={i}>{s}</li>: <p key={i}>{s}</p>)}
           </ul>
          </div>:""}
        </section>
      )
    })
  )
}