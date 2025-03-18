import { useContext } from "react"
import { Context } from "../utils/context"


export const Meanings = () => {

  const ctx = useContext(Context)

  // const meaning = ctx.wordData?.meanings.map((def, i) => <p key={i}>{def.definitions}</p>)

  return(
    <section className="mt-5">
      <h3 className="italic text-2xl font-bold after:border-[.5px] after:flex after:border-gray-200">noun</h3>
      {/* {meaning} */}
    </section>
  )
}