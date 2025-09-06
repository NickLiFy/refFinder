import React, { useEffect, useRef } from 'react'
import { useState } from "react";
import Button from './components/Button';
import SearchInput from './components/SearchInput';
import { searchUnsplash } from './components/unsplashAPI';
import UnsplashImg from './components/APIs/UnsplashImg';
import SourcePrefs from './components/SourcePrefs';
import Settings from './components/Settings';

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
      <div>
        <Settings></Settings>
      </div>
      <div className='flex items-end justify-center w-full h-full'>
        <h1 className='text-6xl font-bold'>
          Look for reference
        </h1>
      </div>

      <div className='flex items-center justify-center w-screen h-fit'>
        <SearchInput onSearch={handleSearch} className='flex items-center w-screen h-screen' />
      </div>

      <div className='flex items-start justify-center w-full h-full'>
        <Button>MagicSearch</Button>
      </div>
      <div className=' w-full h-fit flex items-center justify-center'>
        <div className='flex items-center justify-center gap-5 px-7 py-5 w-fit rounded-full border-1 border-white'>
          <SourcePrefs sourceName={'Unsplash'} />
          <SourcePrefs sourceName={'Pixabay'} />
          <SourcePrefs sourceName={'Pexels'} />
          <SourcePrefs sourceName={'Videvo'} />
          <SourcePrefs sourceName={'Coverr'} />
          <SourcePrefs sourceName={'Mixkit'} />
        </div>
      </div>
      <UnsplashImg results={results} />
    </main>
  )
}

export default App