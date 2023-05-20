import { GiPaperBagFolded } from 'react-icons/gi'
const ProductsCardSm = ({ image, price, quantity, title, desc, btnText, color, icon }) => {
  return (
    <div className={`relative my-10 rounded-3xl border-4 border-b-8 border-r-8 border-black p-3 font-lexend ${color}`}>
      <div className="flex h-[200px] items-center justify-center ">
        <img src={image} alt="x" className="h-full object-contain drop-shadow-lg" />
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
      <img src={icon} alt="icon" className="absolute -bottom-10 -right-10 w-20 " />
    </div>
  )
}
const ProductsCardMd = ({ image, price, quantity, title, desc, btnText, color, icon }) => {
  return (
    <div className={`relative my-10 rounded-3xl border-4 border-b-8 border-r-8 border-black p-3 font-lexend ${color}`}>
      <div className="flex h-[200px] items-center justify-center ">
        <img src={image} alt="x" className="h-full object-contain drop-shadow-lg" />
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
      <img src={icon} alt="icon" className="absolute -bottom-10 -right-10 w-20 " />
    </div>
  )
}
const ProductsCardLg = ({ image, price, quantity, title, desc, btnText, color, icon }) => {
  return (
    <div className={`relative my-10 rounded-3xl border-4 border-b-8 border-r-8 border-black p-3 font-lexend ${color}`}>
      <div className="flex h-[200px] items-center justify-center ">
        <img src={image} alt="x" className="h-full object-contain drop-shadow-lg" />
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
      <img src={icon} alt="icon" className="absolute -bottom-10 -right-10 w-20 " />
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
