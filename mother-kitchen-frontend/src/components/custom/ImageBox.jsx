const ImageBox = ({ image, className }) => {
  return (
    <div
      className={`relative border-black border-2 md:border-4 before:border-white before:border before:md:border-2 before:absolute before:w-full before:h-full before:md:rounded-[1.5rem]  md:border-b-8 md:border-r-8 rounded md:rounded-[2rem] shadow-2xl -z-20 overflow-hidden `}
    >
      <img src={image} alt="img" className={`w-full h-full object-contain ${className}`} />
    </div>
  )
}

export default ImageBox
