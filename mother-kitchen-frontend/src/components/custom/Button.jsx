const Button = ({ children, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`text-white bg-red-base hover:bg-green-base duration-300  px-5 pt-2 pb-1 rounded-full border border-black border-b-2 border-r-2 md:border-b-4 md:border-r-4 font-gluten ${
        className || ''
      }`}
    >
      {children}
    </button>
  )
}

export default Button
