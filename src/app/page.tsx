'use client'
import { SetStateAction, use, useEffect, useState } from 'react';
import { Header } from './components/header'
import { Search } from './components/search'
import { Word } from './components/word'
import { Context } from './utils/context'

export default function Home() {

  const [currFont, setCurrFont] = useState("")
  const [isChecked, setIsChecked] = useState(false)
  const [result, setResult] = useState({})
  const [word, setWord] = useState('hello')
  // const [meaning, setMeaning] = useState('')

  useEffect(() => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then(res => res.json())
    .then(data => {setResult(data[0])})
  },[])

  return (
    <Context.Provider value={{currFont, setCurrFont, isChecked, setIsChecked, result, setResult, word, setWord}}>
      <div className={`${currFont} w-3xl mx-auto pt-10 ${isChecked === true? "dark:black":""}`}>
        <Header />
        <Search />
        <Word />
      </div>
    </Context.Provider>
  );
}
