import { Star } from '../../assets'
const ReviewCard = ({ name, profession, title, desc, bgColor, image }) => {
  return (
    <div
      className={`h-[430px] rounded-lg border-2 border-b-8 border-r-8 border-black font-lexend text-white shadow-xl sm:h-auto  md:w-[370px] md:rounded-3xl md:border-4 md:border-b-[13px] md:border-r-[13px] md:p-4 ${bgColor} `}
    >
      <h5 className="mt-4 px-2 text-left text-sm font-bold md:text-base">{name}</h5>
      <h4 className="px-2  text-left text-[8px] font-semibold md:text-[10px]">{profession}</h4>
      <img
        loading="lazy"
        src={image}
        alt=""
        className="mx-auto h-12 w-12 rounded-full border-2 border-b-4 border-r-4 border-black object-contain md:h-16 md:w-16 md:border-b-8 md:border-r-8"
      />
      <div className="mt-2 flex items-center justify-center gap-1">
        <img src={Star} alt="star" className="h-5 w-5 object-contain md:h-8 md:w-8" />
        <img src={Star} alt="star" className="h-5 w-5 object-contain md:h-8 md:w-8" />
        <img src={Star} alt="star" className="h-5 w-5 object-contain md:h-8 md:w-8" />
        <img src={Star} alt="star" className="h-5 w-5 object-contain md:h-8 md:w-8" />
        <img src={Star} alt="star" className="h-5 w-5 object-contain md:h-8 md:w-8" />
      </div>
      <h3 className=" my-4 px-2 text-center text-sm font-bold drop-shadow-md md:text-xl">{title}</h3>
      <p className=" my-4 px-4 text-center text-[9px] font-semibold drop-shadow-md md:text-xs">{desc}</p>
    </div>
  )
}

export default ReviewCard
