const BorderDiv = ({ children, className }) => {
  return (
    <div
      className={`relative border-black border-8 before:border-white before:border-[3px] before:absolute before:w-full before:h-full before:rounded-xl border-t-[16px] border-b-[16px] border-r-[16px] rounded-[2rem] before:top-[0.8px] before:left-[0.8px] shadow-2xl -z-20 ${className}`}
    >
      {children}
    </div>
  )
}

export default BorderDiv
