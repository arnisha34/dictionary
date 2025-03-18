'use client'
import { useEffect, useState } from 'react';
import { Header } from './components/header'
import { Search } from './components/search'
import { Word } from './components/word'
import { Meanings } from './components/meanings'
import { Context } from './utils/context'

export default function Home() {

  const [currFont, setCurrFont] = useState("")
  const [isChecked, setIsChecked] = useState(false)
  const [wordData, setWordData] = useState(null)
  const [word, setWord] = useState('hello')
  // const [meaning, setMeaning] = useState('')

  useEffect(() => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then(res => res.json())
    .then(data => setWordData(data[0]))
    .catch(error => console.error("Error fetching data:", error));
  },[word])

  console.log(wordData)

  return (
    <Context.Provider value={{currFont, setCurrFont, isChecked, setIsChecked, wordData, setWordData, word, setWord}}>
      <div className={`wrapper ${isChecked === true? "dark":""}`}>
        <div className={`${currFont} max-w-3xl min-w-[320px] mx-auto pt-10`}>
          <Header />
          <Search />
          <Word />
          <Meanings />
        </div>
      </div>
    </Context.Provider>
  );
}
