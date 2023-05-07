const NavigationButton = ({ children, className }) => {
  return (
    <button
      className={`text-white  hover:scale-95 duration-300 px-8 py-3 rounded-md md:rounded-xl border-2 md:border-4 border-black
      border-b-4 border-l-4 md:border-b-8 md:border-l-8 font-lexend font-semibold ${className || ''}`}
    >
      {children}
    </button>
  )
}

export default NavigationButton
