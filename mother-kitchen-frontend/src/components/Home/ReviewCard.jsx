import { AiFillStar } from 'react-icons/ai'
const ReviewCard = ({ name, profession, title, desc, bgColor, image }) => {
  return (
    <div
      className={`border-2 md:border-4 border-r-8 md:border-r-[15px] border-b-8 md:border-b-[15px] rounded-lg md:rounded-3xl border-black  md:p-4 text-white font-lexend w-[300px] md:w-[400px] shadow-xl ${bgColor} `}
    >
      <h5 className="font-bold text-sm md:text-base mt-4 px-2">{name}</h5>
      <h4 className="text-[8px]  md:text-[10px] font-semibold px-2">{profession}</h4>
      <img src={image} alt="" className="mx-auto border-2 border-black w-16 rounded-full border-r-8 border-b-8" />
      <div className="flex gap-3 items-center justify-center mt-2">
        <AiFillStar className="w-6 h-6  text-yellow-500 drop-shadow-sm" />
        <AiFillStar className="w-6 h-6  text-yellow-500 drop-shadow-sm" />
        <AiFillStar className="w-6 h-6  text-yellow-500 drop-shadow-sm" />
        <AiFillStar className="w-6 h-6  text-yellow-500 drop-shadow-sm" />
        <AiFillStar className="w-6 h-6  text-yellow-500 drop-shadow-sm" />
      </div>
      <h3 className=" my-4 font-bold md:text-2xl drop-shadow-md text-center">{title}</h3>
      <p className=" my-4 px-4 font-semibold text-[10px] md:text-sm drop-shadow-md text-justify">{desc}</p>
    </div>
  )
}

export default ReviewCard
