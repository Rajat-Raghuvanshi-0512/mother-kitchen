import { ReviewImg } from '../assets'

const ReviewCard = ({ name, profession, title, desc, bgColor }) => {
  return (
    <div
      className={` border-4 border-r-[15px] border-b-[15px] rounded-3xl border-black p-4 text-white font-lexend w-[400px] shadow-xl ${bgColor} `}
    >
      <h5 className="font-bold">{name}</h5>
      <h4 className="text-[10px] font-semibold py-1">{profession}</h4>
      <img src={ReviewImg} alt="" className="mx-auto border-2 border-black rounded-full border-r-8 border-b-8" />
      <h3 className="text-center my-4 font-bold text-2xl">{title}</h3>
      <p className="text-center my-4 px-4 font-bold text-sm">{desc}</p>
    </div>
  )
}

export default ReviewCard
