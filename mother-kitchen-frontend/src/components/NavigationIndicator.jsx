import { AiFillHome, AiOutlineRight } from 'react-icons/ai'
const NavigationIndicator = () => {
  return (
    <div className="bg-[#C40D4F] rounded-full p-2 hidden md:flex gap-7 items-center pr-28 relative after:absolute after:w-full after:h-full after:bg-black after:rounded-full after:top-1 after:left-1 after:-z-10 font-lexend">
      <div className="bg-[#FFCD00] rounded-full w-10 h-10 flex items-center justify-center">
        <AiFillHome className="w-5 h-5 text-[#C40D4F] " />
      </div>
      <div className="font-bold text-[#ffcd00]">Home</div>
      <AiOutlineRight className="text-[#ffcd00]" />
      <div className="text-white font-semibold">Contact</div>
    </div>
  )
}

export default NavigationIndicator
