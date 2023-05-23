import { GiPaperBagFolded } from 'react-icons/gi'
import { AiFillHeart } from 'react-icons/ai'
const ProductsCardSm = ({ image, price, quantity, title, desc, btnText, color }) => {
  return (
    <div
      className={`relative my-10 h-[320px] w-[100%] rounded-3xl border-4 border-b-8 border-r-8 border-black p-3 font-lexend ${color}`}
    >
      <div className="flex h-[200px] items-center justify-center ">
        <img
          loading="lazy"
          src={image}
          alt="x"
          className={`h-full object-contain drop-shadow-3xl ${
            title === 'Green Mint Chutney' ? 'relative -top-10 scale-125' : ''
          } `}
        />
        <div className="absolute right-3 top-3">
          <AiFillHeart className="z-10 h-6 w-6 text-red-500 drop-shadow-lg" />
          <AiFillHeart className="absolute -left-[1.5px] -top-[1.5px] -z-[1] h-7 w-7 text-black drop-shadow-lg" />
        </div>
      </div>
      <div className="flex gap-2 px-1 text-left drop-shadow-sm">
        <div className="flex flex-1 flex-col items-start justify-start">
          <div className="text-[8px] font-bold text-white">{price}</div>
          <div className="text-[7px]">{quantity}</div>
          <button className="mt-3 flex items-center justify-between rounded-lg border-2 border-b-4 border-r-4 border-black bg-[#039860] px-2 py-1 font-gluten text-white">
            <span className="text-xs">{btnText}</span> <GiPaperBagFolded />
          </button>
        </div>
        <div className="relative flex-1">
          <h3 className="text-[10px] font-bold leading-3">{title}</h3>
          <h6 className="mt-2 px-1 pr-3 font-gluten text-[10px] leading-3 text-white">{desc}</h6>
        </div>
      </div>
    </div>
  )
}
const ProductsCardMd = ({ image, price, quantity, title, desc, btnText, color, icon }) => {
  return (
    <div
      className={`relative my-10 h-[380px] w-[310px] rounded-3xl border-4 border-b-8 border-r-8 border-black p-3 font-lexend ${color}`}
    >
      <div className="flex h-[200px] items-center justify-center ">
        <img loading="lazy" src={image} alt="x" className="h-full object-contain drop-shadow-lg" />
        <div className="absolute right-4 top-4">
          <AiFillHeart className="z-10 h-8 w-8 text-red-500 drop-shadow-lg" />
          <AiFillHeart className="absolute -left-[1.5px] -top-[1.5px] -z-[1] h-9 w-9 text-black drop-shadow-lg" />
        </div>
      </div>
      <div className="flex gap-10 px-1 drop-shadow-sm">
        <div className="flex-1">
          <div className="text-[15px] font-bold text-white">{price}</div>
          <div className="text-sm ">{quantity}</div>
          <button className="mt-3 flex items-center justify-between rounded-lg border-2 border-b-4 border-r-4 border-black bg-[#039860] px-3 py-1 font-gluten text-white">
            <span>{btnText}</span> <GiPaperBagFolded />
          </button>
        </div>
        <div className="relative flex-1">
          <h3 className="text-[15px] font-bold leading-5 tracking-[-0.1em]">{title}</h3>
          <h6 className="mt-2 px-1 pr-3 font-gluten text-sm leading-3 text-white">{desc}</h6>
        </div>
      </div>
      <img loading="lazy" src={icon} alt="icon" className="absolute -bottom-10 -right-10 w-20 " />
    </div>
  )
}
const ProductsCardLg = ({ image, price, quantity, title, desc, btnText, color, icon }) => {
  return (
    <div
      className={`relative z-[5] my-10 h-[380px] w-[310px] rounded-3xl border-4 border-b-8 border-r-8 border-black p-3 font-lexend ${color}`}
    >
      <div className="flex h-[230px] w-full items-center justify-center ">
        <img
          loading="lazy"
          src={image}
          alt="x"
          className={`h-full object-contain drop-shadow-3xl ${
            title === 'Green Mint Chutney' ? 'relative -top-10 scale-125' : ''
          } `}
        />
        <div className="absolute right-4 top-4">
          <AiFillHeart className="z-10 h-8 w-8 text-red-500 drop-shadow-lg" />
          <AiFillHeart className="absolute -left-[1.5px] -top-[1.5px] -z-[1] h-9 w-9 text-black drop-shadow-lg" />
        </div>
      </div>
      <div className="flex gap-10 px-1 drop-shadow-sm">
        <div className="flex-1">
          <div className="text-[15px] font-bold text-white">{price}</div>
          <div className="text-sm ">{quantity}</div>
          <button className="mt-3 flex items-center justify-between rounded-lg border-2 border-b-4 border-r-4 border-black bg-[#039860] px-3 py-1 font-gluten text-white">
            <span>{btnText}</span> <GiPaperBagFolded />
          </button>
        </div>
        <div className="relative flex-1">
          <h3 className="text-[13px] font-bold leading-4 tracking-[-0.1em]">{title}</h3>
          <h6 className="mt-2 pr-3 font-gluten text-xs leading-3 text-white">{desc}</h6>
        </div>
      </div>
      <img loading="lazy" src={icon} alt="icon" className="absolute -bottom-10 -right-10 w-20 " />
    </div>
  )
}
const ProductCard = (props) => {
  return (
    <div>
      <div className="md:hidden ">
        {/*Small Screen*/}
        <ProductsCardSm {...props} />
      </div>

      <div className="hidden md:block lg:hidden">
        {/*Medium Screen*/}
        <ProductsCardMd {...props} />
      </div>
      <div className="hidden lg:block">
        {/*Large Screen*/}
        <ProductsCardLg {...props} />
      </div>
    </div>
  )
}

export default ProductCard
