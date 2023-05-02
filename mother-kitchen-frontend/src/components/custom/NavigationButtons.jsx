const NavigationButton = ({ children, className }) => {
  return (
    <button
      className={`text-white  hover:scale-95 duration-300 px-8 py-3 rounded-xl border-4 border-black border-b-8 border-l-8 font-lexend font-semibold ${
        className || ''
      }`}
    >
      {children}
    </button>
  )
}

export default NavigationButton
