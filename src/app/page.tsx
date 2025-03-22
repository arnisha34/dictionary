'use client'
import { useEffect, useState } from 'react';
import { Header } from './components/header'
import { Search } from './components/search'
import { Word } from './components/word'
import { Context } from './utils/context'

export default function Home() {

  const [currFont, setCurrFont] = useState("")
  const [isChecked, setIsChecked] = useState(false)
  const [wordData, setWordData] = useState({})
  const [word, setWord] = useState(()=>{
    return localStorage.getItem("word") || "hello";
  })

    useEffect(() => {
      const savedWordData = localStorage.getItem("wordData");
      if (savedWordData) {
        setWordData(JSON.parse(savedWordData));
      }
    }, []);

    useEffect(() => {
      fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then(res => res.json())
        .then(data => {
          setWordData(data[0]);
          localStorage.setItem("word", word); 
          localStorage.setItem("wordData", JSON.stringify(data[0]));
        })
        .catch(error => console.error("Error fetching data:", error));
    }, [word]);


  return (
    <Context.Provider value={{currFont, setCurrFont, isChecked, setIsChecked, wordData, setWordData, word, setWord}}>
      <div id="wrapper" className={`${isChecked === true? "dark":""} min-h-screen dark:bg-slate-950 dark:text-white px-5 pb-20`}>
        <div className={`${currFont} max-w-3xl min-w-[320px] mx-auto pt-10`}>
          <Header />
          <Search />
          <Word />
        </div>
      </div>
    </Context.Provider>
  );
}
