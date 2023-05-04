import { AiFillStar } from 'react-icons/ai'
const ReviewCard = ({ name, profession, title, desc, bgColor, image }) => {
  return (
    <div
      className={` border-4 border-r-[15px] border-b-[15px] rounded-3xl border-black p-4 text-white font-lexend w-[400px] shadow-xl ${bgColor} `}
    >
      <h5 className="font-bold">{name}</h5>
      <h4 className="text-[10px] font-semibold py-1">{profession}</h4>
      <img src={image} alt="" className="mx-auto border-2 border-black w-16 rounded-full border-r-8 border-b-8" />
      <div className="flex gap-3 items-center justify-center mt-2">
        <AiFillStar className="w-6 h-6  text-yellow-500 drop-shadow-sm" />
        <AiFillStar className="w-6 h-6  text-yellow-500 drop-shadow-sm" />
        <AiFillStar className="w-6 h-6  text-yellow-500 drop-shadow-sm" />
        <AiFillStar className="w-6 h-6  text-yellow-500 drop-shadow-sm" />
        <AiFillStar className="w-6 h-6  text-yellow-500 drop-shadow-sm" />
      </div>
      <h3 className=" my-4 font-bold text-2xl drop-shadow-md text-center">{title}</h3>
      <p className=" my-4 px-4 font-semibold text-sm drop-shadow-md text-justify">{desc}</p>
    </div>
  )
}

export default ReviewCard
