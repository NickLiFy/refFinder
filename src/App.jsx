import React, { useEffect, useRef } from 'react'
import { useState } from "react";
import Button from './components/Button';
import SearchInput from './components/SearchInput';
import { searchUnsplash } from './components/unsplashAPI';
import UnsplashImg from './components/APIs/UnsplashImg'

const App = () => {
  const [results, setResults] = useState([]);

  const handleSearch = async (query) => {
    const images = await searchUnsplash(query);
    setResults(images);
    console.log("Найденные изображения:", images);
  }

  return (
      <main className="flex flex-col w-screen h-screen bg-[#191919] text-white font-sans">
        <h1 className='py-4 text-3xl font-bold mx-10'> RefFinder</h1>
        <div className='flex items-end justify-center w-full h-full'>
          <h1 className='align-text-bottom text-6xl font-bold'>
            Look for reference
          </h1>
        </div>
        <div className='flex items-center justify-center w-screen'>
          <SearchInput onSearch={handleSearch} className='flex items-center w-screen h-screen' />
        </div>
        <div className='flex items-start justify-center w-full h-full'>
          <Button>MagicSearch</Button>
        </div>
        {/* <UnsplashImg results={results} /> */}
      </main>
  )
}

export default App