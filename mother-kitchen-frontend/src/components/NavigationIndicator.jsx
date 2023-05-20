import { AiFillHome, AiOutlineRight } from 'react-icons/ai'
const NavigationIndicator = () => {
  return (
    <div className="relative hidden items-center gap-7 rounded-full bg-[#C40D4F] p-2 pr-28 font-lexend after:absolute after:left-1 after:top-1 after:-z-10 after:h-full after:w-full after:rounded-full after:bg-black md:flex">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFCD00]">
        <AiFillHome className="h-5 w-5 text-[#C40D4F] " />
      </div>
      <div className="font-bold text-[#ffcd00]">Home</div>
      <AiOutlineRight className="text-[#ffcd00]" />
      <div className="font-semibold text-white">Contact</div>
    </div>
  )
}

export default NavigationIndicator
