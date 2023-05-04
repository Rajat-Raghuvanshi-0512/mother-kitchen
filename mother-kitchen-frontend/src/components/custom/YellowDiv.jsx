const YellowDiv = ({ children, className }) => {
  return (
    <div
      className={`border-4 relative border-black before:border-white before:border-[3px] before:absolute before:w-full before:h-full before:rounded-2xl before:rounded-tl-2xl border-b-[12px] border-r-[12px] rounded-3xl bg-yellow-dark before:top-[0.8px] before:left-[0.8px] shadow-2xl ${className}`}
    >
      {children}
    </div>
  )
}

export default YellowDiv
