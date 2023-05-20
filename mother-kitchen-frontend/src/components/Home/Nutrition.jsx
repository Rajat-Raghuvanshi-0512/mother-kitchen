import { Nutrition } from '../../assets'
import NutritionDetails from './NutritionDetails'
import Button from '../custom/Button'
import YellowDiv from '../custom/YellowDiv'

const NutritionSm = () => {
  return (
    <>
      <section className="my-20 px-5">
        <YellowDiv className="flex flex-col">
          <div className="relative flex-1">
            <img src={Nutrition} alt="nutrition" className="relative -top-6 w-[100%]" />
          </div>
          <div className="z-10 flex-1 px-5">
            <h3 className="mb-5 text-center font-lexend text-lg font-semibold">
              Pouring nutrition <br /> <span className="font-gluten font-black text-red-base"> in your dish</span>
            </h3>
            <p className="text-justify text-sm ">
              At Mother&rsquo;s Kitchen, love is always the first ingredient. Our top-quality ingredients and
              easy-to-use products make cooking a breeze, so you can spend more time with the people who matter most.
              From seasonings and spices to baking mixes and ready-to-eat meals, we&rsquo;ve got everything you need to
              whip up something delicious. Our recipes are passed down through generations of moms, ensuring that every
              meal is packed with warmth and nostalgia. So whether you&rsquo;re baking with your little ones or
              preparing dinner for the whole crew, Mother&rsquo;s Kitchen has got you covered. Come join us in the
              kitchen today and taste the love!
            </p>
            <div className="flex justify-end">
              <Button className="my-5">View More</Button>
            </div>
          </div>
        </YellowDiv>
      </section>
      <NutritionDetails />
    </>
  )
}

const NutritionMd = () => {
  return (
    <>
      <section className="md:mx-10">
        <YellowDiv className="flex">
          <div className="relative flex-1">
            <img
              src={Nutrition}
              alt="nutrition"
              className="absolute -top-10 h-full w-[100%] object-contain object-top"
            />
          </div>
          <div className="z-10 flex-1 p-5">
            <h3 className="mb-5 font-lexend text-2xl font-semibold">
              Pouring nutrition <br />{' '}
              <span className="font-gluten text-3xl font-black text-red-base"> in your dish</span>
            </h3>
            <p className="pr-4 text-justify text-xs font-medium">
              At Mother&rsquo;s Kitchen, love is always the first ingredient. Our top-quality ingredients and
              easy-to-use products make cooking a breeze, so you can spend more time with the people who matter most.
              From seasonings and spices to baking mixes and ready-to-eat meals, we&rsquo;ve got everything you need to
              whip up something delicious. Our recipes are passed down through generations of moms, ensuring that every
              meal is packed with warmth and nostalgia. So whether you&rsquo;re baking with your little ones or
              preparing dinner for the whole crew, Mother&rsquo;s Kitchen has got you covered. Come join us in the
              kitchen today and taste the love!
            </p>
            <Button className="mt-10">View More</Button>
          </div>
        </YellowDiv>
      </section>
      <NutritionDetails />
    </>
  )
}
const NutritionLg = () => {
  return (
    <>
      <section className="md:mx-20 2xl:mx-56">
        <YellowDiv className="flex">
          <div className="relative flex-1">
            <img
              src={Nutrition}
              alt="nutrition"
              className="absolute -top-10 h-full w-[100%] object-contain object-top"
            />
          </div>
          <div className="z-10 flex-1 p-5">
            <h3 className="mb-5 font-lexend text-3xl font-semibold">
              Pouring nutrition <br />{' '}
              <span className="font-gluten text-4xl font-black text-red-base"> in your dish</span>
            </h3>
            <p className="pr-4 text-justify font-medium">
              At Mother&rsquo;s Kitchen, love is always the first ingredient. Our top-quality ingredients and
              easy-to-use products make cooking a breeze, so you can spend more time with the people who matter most.
              From seasonings and spices to baking mixes and ready-to-eat meals, we&rsquo;ve got everything you need to
              whip up something delicious. Our recipes are passed down through generations of moms, ensuring that every
              meal is packed with warmth and nostalgia. So whether you&rsquo;re baking with your little ones or
              preparing dinner for the whole crew, Mother&rsquo;s Kitchen has got you covered. Come join us in the
              kitchen today and taste the love!
            </p>
            <Button className="mt-10">View More</Button>
          </div>
        </YellowDiv>
      </section>
      <NutritionDetails />
    </>
  )
}
const NutritionSection = () => {
  return (
    <div>
      <div className="md:hidden ">
        {/*Small Screen*/}
        <NutritionSm />
      </div>
      <div className="hidden md:block lg:hidden">
        {/*Medium Screen*/}
        <NutritionMd />
      </div>

      <div className="hidden lg:block">
        {/*Large Screen*/}
        <NutritionLg />
      </div>
    </div>
  )
}

export default NutritionSection
