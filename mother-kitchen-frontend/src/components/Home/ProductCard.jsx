import { GiPaperBagFolded } from 'react-icons/gi'
import { AiFillHeart } from 'react-icons/ai'
import { Bag } from '../../assets'
const ProductsCardSm = ({ image, price1, price2, price3, quantity, title, desc, btnText, color }) => {
  return (
    <div
      className={`relative my-10 h-[300px] w-[100%] rounded-3xl border-4 border-b-8 border-r-8 border-black px-1 py-3 font-lexend ${color}`}
    >
      <div className="flex h-[200px] items-center justify-center ">
        <img
          loading="lazy"
          src={image}
          alt="x"
          className={`-mt-10 h-full  object-contain drop-shadow-3xl ${
            title === 'Finger Millets' ? 'scale-125' : 'scale-150'
          } `}
        />
        <div className="absolute right-3 top-3">
          <AiFillHeart className="z-10 h-6 w-6 text-red-500 drop-shadow-lg" />
          <AiFillHeart className="absolute -left-[1.5px] -top-[1.5px] -z-[1] h-7 w-7 text-black drop-shadow-lg" />
        </div>
      </div>
      <div className="flex gap-2 px-1 text-left drop-shadow-sm">
        <div className="flex flex-1 flex-col items-start justify-start">
          <div className="flex text-[10px] font-bold tracking-tighter">
            {price1} <span className="text-white">{price2}</span> <span>{price3}</span>
          </div>
          <div className="text-[7px] font-semibold">{quantity}</div>
          <button className="mt-3 flex w-full items-center justify-end gap-3 rounded-md border-2 border-b-4 border-r-4 border-black bg-[#039860] px-2 py-1 font-gluten text-white">
            <span className="black-shadow text-xs">{btnText}</span>
            <img src={Bag} alt="bag" className="h-4 w-4 object-contain" />
          </button>
        </div>
        <div className="relative flex-1">
          <h3 className="font-lexend text-[10px] font-bold leading-3 tracking-tighter">{title}</h3>
          <h6 className="mt-2 px-1 pr-3 font-gluten text-[9px] font-semibold leading-[9px] text-white">{desc}</h6>
        </div>
      </div>
    </div>
  )
}
const ProductsCardMd = ({ image, quantity, title, desc, btnText, color, icon }) => {
  return (
    <div
      className={`relative my-10 h-[350px] w-[270px] rounded-3xl border-4 border-b-8 border-r-8 border-black p-3 font-lexend ${color}`}
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
          <div className="flex text-[12px] font-bold text-white">{quantity}</div>
          <button className="mt-3 flex items-center justify-between rounded-lg border-2 border-b-4 border-r-4 border-black bg-[#039860] px-3 py-1 font-gluten text-white">
            <span className="text-xs">{btnText}</span> <GiPaperBagFolded />
          </button>
        </div>
        <div className="relative flex-1">
          <h3 className="text-[12px] font-bold leading-5 tracking-[-0.1em]">{title}</h3>
          <h6 className="mt-2 px-1 pr-3 font-gluten text-[10px] leading-3 text-white">{desc}</h6>
        </div>
      </div>
      <img loading="lazy" src={icon} alt="icon" className="absolute -bottom-10 -right-10 w-20 " />
    </div>
  )
}
const ProductsCardLg = ({ image, quantity, title, desc, btnText, color, icon }) => {
  return (
    <div
      className={`relative z-[5] mx-auto my-10 h-[360px] w-[310px] rounded-3xl border-4 border-b-8 border-r-8 border-black px-2 py-3 font-lexend ${color}`}
    >
      <div className="flex h-[230px] w-[280px] items-center justify-center ">
        <img
          loading="lazy"
          src={image}
          alt="x"
          className={`-mt-10 h-full
           w-full ${title === 'Finger Millets' ? 'scale-125' : 'scale-150'} object-contain object-top drop-shadow-3xl`}
        />
        <div className="absolute right-4 top-4">
          <AiFillHeart className="z-10 h-8 w-8 text-red-500 drop-shadow-lg" />
          <AiFillHeart className="absolute -left-[1.5px] -top-[1.5px] -z-[1] h-9 w-9 text-black drop-shadow-lg" />
        </div>
      </div>
      <div className="flex gap-5 px-1 drop-shadow-sm">
        <div className="flex-1">
          <div className="flex text-[15px] font-bold tracking-tighter">{quantity}</div>
          <button className="mt-3 flex w-full items-center justify-end gap-2 rounded-lg border-2 border-b-4 border-r-4 border-black bg-[#039860] px-3 py-1 font-gluten text-white">
            <span className="black-shadow-sm">{btnText}</span>
            <img src={Bag} alt="bag" className="h-4 w-4 object-contain" />
          </button>
        </div>
        <div className="relative flex-1">
          <h3 className="text-[14px] font-bold leading-4 tracking-[-0.1em]">{title}</h3>
          <h6 className="mt-2 pr-3 font-gluten text-[11px] font-semibold leading-3 text-white">{desc}</h6>
        </div>
      </div>
      <img loading="lazy" src={icon} alt="icon" className="absolute -bottom-7 -right-10 w-20 " />
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
