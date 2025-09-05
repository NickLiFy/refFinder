import { useState } from 'react';

export default function CheckBox({
  onClick,
  checked = 'off',
  className = ''
}) {
  const wh = 1.5;

  return (
    <button
      onClick={onClick}
      style={{ width: `${wh}rem`, height: `${wh}rem` }}
      className={`border-2 border-white ${checked === 'on'
        ? 'bg-yellow-500'
        : 'bg-gray-500/5 backdrop-blur-[5px] hover:bg-gray-200/25'
        } rounded-[10px] ${className} transition-all duration-200`}
    >
    </button>
  );
}
// This is a reusable button component with hover effects.