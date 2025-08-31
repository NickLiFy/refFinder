// components/Button.jsx
export default function Button({ children, onClick, className = '' }) {
  return (
    <button
      onClick={onClick}
      className={`w-fit px-[30px] py-[12px] text-white border-2 border-white rounded-full hover:bg-white hover:text-black transition ${className} translate-y-[-25px]`}
    >
      {children}
    </button>
  );
}
// This is a reusable button component with hover effects.