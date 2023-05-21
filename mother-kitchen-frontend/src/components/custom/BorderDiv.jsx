const BorderDiv = ({ children, className }) => {
  return (
    <div
      className={`relative -z-20 rounded-2xl border-4 border-b-8 border-r-8 border-t-8 border-black shadow-2xl before:absolute before:left-[0.8px] before:top-[0.8px] before:h-full before:w-full before:rounded-xl before:border-[3px] before:border-white md:rounded-[2rem] md:border-8 md:border-r-[12px] md:border-t-[12px] ${className}`}
    >
      {children}
    </div>
  )
}

export default BorderDiv
