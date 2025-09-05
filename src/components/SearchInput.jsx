import { useState, useRef, useEffect } from 'react';

const SearchInput = ({ onSearch }) => {

  const [query, setQuery] = useState('');
  const [inputWidth, setInputWidth] = useState(200);
  const spanRef = useRef(null);

  useEffect(() => {
    if (spanRef.current) {
      const width = spanRef.current.offsetWidth + 60;
      setInputWidth(Math.max(200, width));
    }
  }, [query]);

  const [isFocused, setIsFocused] = useState(false);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && query.trim() !== "") {
      // Здесь можно вызвать API, фильтровать данные и т.д.
      onSearch(query.trim());
    }
  };



  const lengthLimitText = 80;

  let warnings = {
    lengthText: [`Максимальная длина запроса - ${lengthLimitText} символов.`, ''],
  }
  
  const sharedStyles = "p-4 pl-[30px] pr-[30px] border-white rounded-full border-2";

  const smoothing = "transform transition-all duration-150"

  return (
    <div className="max-w-[90%] text-xl p-17 flex items-center justify-center">
      <div className="container relative flex items-center justify-center">
        <input type="text"
          value={query}
          onChange={(e) => {
            const value = e.target.value;
            if (value.length <= lengthLimitText) {
              setQuery(value);
            } else {
              setQuery(value.slice(0, lengthLimitText));
            }
          }
          }
          onKeyDown={handleKeyDown}
          placeholder='Search for reference...'
          className={`absolute bg-gradient-to-b from-white/10 to-neutral-900/10 ${sharedStyles} ${smoothing} bg-[#191919] text-center z-1 focus:outline-none`}
          style={{ width: `${inputWidth}px` }} />

        <span
          ref={spanRef}
          className={`invisible absolute whitespace-pre ${sharedStyles}`}>
          {query || 'Search for reference...'}
        </span>

        <div className={`absolute ${sharedStyles} ${smoothing} bg-white text-black text-right z-0 ${query!='' ? 'translate-x-[140px]' : 'translate-x-[0]'}`}
          style={{ width: `${inputWidth}px` }}>
          Enhance?
        </div>
      </div>
    </div>


  );
};

export default SearchInput;
