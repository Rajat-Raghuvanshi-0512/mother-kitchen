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

const WelcomeSm = () => {
  return (
    <section className="mt-40 px-5 ">
      <h3 className="font-gluten font-bold text-center text-4xl text-red-base">Welcome to Mother’s Kitchen</h3>
      <img src={KitchenBg} alt="bg" className="-z-30 absolute w-full left-0" />
      <div className="grid grid-cols-1 mt-24 gap-10">
        {KitchenItems.map((item) => (
          <KitchenCard key={item.smallHeading} largeHeading={item.largeHeading} color={item.color} image={item.image} />
        ))}
      </div>
      <KitchenMenu />
    </section>
  )
}
const WelcomeLg = () => {
  return (
    <section className="md:mt-40 px-5 lg:px-20 2xl:mx-56">
      <h3 className="font-gluten font-bold text-center text-5xl text-red-base">Welcome to Mother’s Kitchen</h3>
      <img src={KitchenBg} alt="bg" className="-z-30 absolute w-full left-0" />
      <div className="grid grid-cols-3 mt-24 gap-5 lg:gap-10">
        {KitchenItems.map((item) => (
          <KitchenCard key={item.smallHeading} {...item} />
        ))}
      </div>
      <KitchenMenu />
    </section>
  )
}

const Welcome = () => {
  return (
    <div>
      <div className="md:hidden ">
        {/*Small Screen*/}
        <WelcomeSm />
      </div>

      <div className="hidden md:block">
        {/*Large Screen*/}
        <WelcomeLg />
      </div>
    </div>
  )
}

export default Welcome
