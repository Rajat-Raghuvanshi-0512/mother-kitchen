const ImageBox = ({ image, className }) => {
  return (
    <div
      className={`relative border-black border-4 before:border-white before:border-2 before:absolute before:w-full before:h-full before:rounded-[1.5rem]  border-b-8 border-r-8 rounded-[2rem] shadow-2xl -z-20 overflow-hidden `}
    >
      <img src={image} alt="img" className={`w-full h-full object-contain ${className}`} />
    </div>
  )
}

export default ImageBox
