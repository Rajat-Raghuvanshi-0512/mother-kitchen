import { GiPaperBagFolded } from 'react-icons/gi'
const ProductCard = ({ image, price, quantity, title, desc, btnText, color }) => {
  return (
    <div className={`border-4 border-r-8 border-b-8 border-black rounded-3xl p-3 min-w-[350px] font-lexend ${color}  `}>
      <div className="flex items-center justify-center h-[250px] ">
        <img src={image} alt="x" className="object-contain h-full drop-shadow-lg" />
      </div>
      <div className="flex px-1 drop-shadow-sm">
        <div className="flex-1">
          <div className="text-[15px] font-bold text-white">{price}</div>
          <div className="text-sm ">{quantity}</div>
          <button className="font-gluten border-2 border-b-4 border-r-4 px-3 py-1 rounded-lg border-black bg-[#039860] text-white mt-3 flex items-center justify-between">
            <span>{btnText}</span> <GiPaperBagFolded />
          </button>
        </div>
        <div className="flex-1">
          <h3 className="font-bold leading-5 text-[15px] tracking-[-0.1em]">{title}</h3>
          <h6 className="text-sm text-white font-gluten leading-3 mt-2 px-1">{desc}</h6>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
