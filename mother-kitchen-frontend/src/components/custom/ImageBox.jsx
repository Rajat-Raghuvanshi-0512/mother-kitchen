const ImageBox = ({ image, className }) => {
  return (
    <div
      className={`relative -z-20 overflow-hidden rounded-xl border-2 border-black shadow-2xl before:absolute before:h-full before:w-full before:border before:border-white md:rounded-[2rem] md:border-4 md:border-b-8 md:border-r-8 before:md:rounded-[1.5rem] before:md:border-2 `}
    >
      <img src={image} alt="img" className={`h-full w-full object-contain ${className}`} />
    </div>
  )
}

export default ImageBox
