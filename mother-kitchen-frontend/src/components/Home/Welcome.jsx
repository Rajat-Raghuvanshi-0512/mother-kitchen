import { KitchenBg, kitchen1, kitchen2, kitchen3 } from '../../assets'
import KitchenCard from './KitchenCard'
import KitchenMenu from './KitchenMenu'

const KitchenItems = [
  {
    largeHeading: 'Health in the Kitchen',
    smallHeading: 'Gravy By Mother’s Kitchen',
    image: kitchen1,
    color: 'bg-[#7B4512]',
  },
  {
    largeHeading: 'Health on the Go',
    smallHeading: 'Spreads By Mother’s Kitchen',
    image: kitchen2,
    color: 'bg-[#7B3212]',
  },
  {
    largeHeading: 'Health on the Table',
    smallHeading: 'Bites By Mother’s Kitchen',
    image: kitchen3,
    color: 'bg-[#DAA235]',
  },
]

const Welcome = () => {
  return (
    <section className="md:mt-40 px-20 ">
      <h3 className="font-gluten font-bold text-center text-5xl text-red-base">Welcome to Mother’s Kitchen</h3>
      <img src={KitchenBg} alt="bg" className="-z-30 absolute w-full left-0" />
      <div className="grid grid-cols-3 mt-24 gap-10">
        {KitchenItems.map((item) => (
          <KitchenCard key={item.smallHeading} {...item} />
        ))}
      </div>
      <KitchenMenu />
    </section>
  )
}

export default Welcome
