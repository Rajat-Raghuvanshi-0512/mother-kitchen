import { KitchenBg, KitchenCard1 } from '../assets'
import KitchenCard from './KitchenCard'
import KitchenMenu from './KitchenMenu'

const KitchenItems = [
  {
    largeHeading: 'Health in the Kitchen',
    smallHeading: 'Gravy By Mother’s Kitchen',
    image: KitchenCard1,
  },
  {
    largeHeading: 'Health in the Kitchen',
    smallHeading: 'Gravy By Mother’s Kitchen',
    image: KitchenCard1,
  },
  {
    largeHeading: 'Health in the Kitchen',
    smallHeading: 'Gravy By Mother’s Kitchen',
    image: KitchenCard1,
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
