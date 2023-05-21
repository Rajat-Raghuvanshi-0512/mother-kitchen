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
    <section className="mt-20 px-5 ">
      <h3 className="text-center font-gluten text-4xl font-bold text-red-base">Welcome to Mother’s Kitchen</h3>
      <img src={KitchenBg} alt="bg" className="absolute left-0 -z-30 w-full" />
      <div className="mt-24 grid grid-cols-1 gap-10">
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
    <section className="px-5 md:mt-40 lg:px-20 2xl:mx-56">
      <h3 className="text-center font-gluten text-5xl font-bold text-red-base">Welcome to Mother’s Kitchen</h3>
      <img
        src={KitchenBg}
        alt="bg"
        className="absolute left-0 -z-30 w-full 2xl:left-[50%] 2xl:w-[75%] 2xl:translate-x-[-50%]"
      />
      <div className="mt-24 grid grid-cols-3 gap-5 lg:gap-10">
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
