import React, { useEffect, useRef } from 'react'
import { useState } from "react";
import Button from './components/Button';
import SearchInput from './components/SearchInput';
import { searchUnsplash } from './components/unsplashAPI';

const App = () => {
  const [results, setResults] = useState([]);

  const handleSearch = async (query) => {
    const images = await searchUnsplash(query);
    setResults(images);
    console.log("Найденные изображения:", images);
  }

  return (
    <div className='min-h-screen min-w-screen bg-[#191919] text-white font-sans'>
      <header className='flex items-center justify-between py-4'>
        <h1 className='text-3xl font-bold mx-10'> RefFinder</h1>
      </header>
      <main className="flex items-center justify-center min-h-[60vh] flex-col">
        <SearchInput onSearch={handleSearch}/>
        <Button>MagicSearch</Button>
      </main>

      <div className='p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {results.map((url, index) => (
          <img key={index} src={url} alt={`Result ${index}`} className="w-full h-auto rounded-lg shadow-md" />
        ))}
      </div>
    </div>
  )
}

export default App