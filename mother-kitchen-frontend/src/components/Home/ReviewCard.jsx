import { AiFillStar } from 'react-icons/ai'
const ReviewCard = ({ name, profession, title, desc, bgColor, image }) => {
  return (
    <div
      className={`w-[250px] rounded-lg border-2 border-b-8 border-r-8 border-black font-lexend text-white shadow-xl  md:w-[370px] md:rounded-3xl md:border-4 md:border-b-[13px] md:border-r-[13px] md:p-4 ${bgColor} `}
    >
      <h5 className="mt-4 px-2 text-left text-sm font-bold md:text-base">{name}</h5>
      <h4 className="px-2  text-left text-[8px] font-semibold md:text-[10px]">{profession}</h4>
      <img
        loading="lazy"
        src={image}
        alt=""
        className="mx-auto h-16 w-12 rounded-full border-2 border-b-8 border-r-8 border-black object-contain md:w-16"
      />
      <div className="mt-2 flex items-center justify-center gap-1 md:gap-3">
        <AiFillStar className="h-3 w-3 text-yellow-500 drop-shadow-sm  md:h-6 md:w-6" />
        <AiFillStar className="h-3 w-3 text-yellow-500 drop-shadow-sm  md:h-6 md:w-6" />
        <AiFillStar className="h-3 w-3 text-yellow-500 drop-shadow-sm  md:h-6 md:w-6" />
        <AiFillStar className="h-3 w-3 text-yellow-500 drop-shadow-sm  md:h-6 md:w-6" />
        <AiFillStar className="h-3 w-3 text-yellow-500 drop-shadow-sm  md:h-6 md:w-6" />
      </div>
      <h3 className=" my-4 px-2 text-center text-sm font-bold drop-shadow-md md:text-xl">{title}</h3>
      <p className=" my-4 px-4 text-justify text-[9px] font-semibold drop-shadow-md md:text-xs">{desc}</p>
    </div>
  )
}

export default ReviewCard
