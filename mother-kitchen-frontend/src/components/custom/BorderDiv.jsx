const BorderDiv = ({ children, className }) => {
  return (
    <div
      className={`relative -z-20 rounded-[2rem] border-8 border-b-[16px] border-r-[16px] border-t-[16px] border-black shadow-2xl before:absolute before:left-[0.8px] before:top-[0.8px] before:h-full before:w-full before:rounded-xl before:border-[3px] before:border-white ${className}`}
    >
      {children}
    </div>
  )
}

export default BorderDiv
