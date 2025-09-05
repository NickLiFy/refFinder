// components/Button.jsx
export default function Button({
  children,
  onClick,
  className = '',
  variant = 'main',
  checked = "off"
}) {

  const gradientDirection = {
    t: 'top',
    b: 'bottom',
    l: 'left',
    r: 'right'
  }

  const baseStyles = `w-fit text-white border-2 border-white rounded-full`

  const variants = {
    main: 'px-[30px] py-[12px]',
    sources: 'px-[25px] py-[10px]',
  }

  const gradientCheck = {
    off: 'b',
    on: 't'
  }

  return (
    <button
      onClick={onClick}
      className={`${variants[variant]} ${baseStyles} ${className}`}
      style={{
        background: `linear-gradient-to ${checked === "on"
            ? gradientDirection[gradientCheck.on]
            : gradientDirection[gradientCheck.off]
          }, rgba(255, 255, 255, 0.1), rgba(20, 20, 20, 0.1))`
      }
      }
    >
      {children}
    </button>
  );
}
// This is a reusable button component with hover effects.