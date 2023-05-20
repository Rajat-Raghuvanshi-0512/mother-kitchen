import { AiFillStar } from 'react-icons/ai'
const ReviewCard = ({ name, profession, title, desc, bgColor, image }) => {
  return (
    <div
      className={`w-[300px] rounded-lg border-2 border-b-8 border-r-8 border-black font-lexend text-white shadow-xl  md:w-[400px] md:rounded-3xl md:border-4 md:border-b-[15px] md:border-r-[15px] md:p-4 ${bgColor} `}
    >
      <h5 className="mt-4 px-2 text-sm font-bold md:text-base">{name}</h5>
      <h4 className="px-2  text-[8px] font-semibold md:text-[10px]">{profession}</h4>
      <img src={image} alt="" className="mx-auto w-16 rounded-full border-2 border-b-8 border-r-8 border-black" />
      <div className="mt-2 flex items-center justify-center gap-3">
        <AiFillStar className="h-6 w-6  text-yellow-500 drop-shadow-sm" />
        <AiFillStar className="h-6 w-6  text-yellow-500 drop-shadow-sm" />
        <AiFillStar className="h-6 w-6  text-yellow-500 drop-shadow-sm" />
        <AiFillStar className="h-6 w-6  text-yellow-500 drop-shadow-sm" />
        <AiFillStar className="h-6 w-6  text-yellow-500 drop-shadow-sm" />
      </div>
      <h3 className=" my-4 text-center font-bold drop-shadow-md md:text-2xl">{title}</h3>
      <p className=" my-4 px-4 text-justify text-[10px] font-semibold drop-shadow-md md:text-sm">{desc}</p>
    </div>
  )
}

export default ReviewCard
