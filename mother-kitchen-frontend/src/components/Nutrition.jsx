import { Nutrition } from '../assets'
import NutritionDetails from './NutritionDetails'
import Button from './custom/Button'

const NutritionSection = () => {
  return (
    <>
      <section className="md:px-20">
        <div className="flex border-4 relative border-black before:border-white before:border-4 before:absolute before:w-full before:h-full before:rounded-2xl before:rounded-tl-3xl before:-z-20 border-b-8 border-r-8 rounded-3xl bg-yellow-dark">
          <div className="flex-1 relative">
            <img src={Nutrition} alt="nutrition" className="absolute -top-10" />
          </div>
          <div className="flex-1 p-5">
            <h3 className="font-lexend text-3xl font-semibold mb-5">
              Pouring nutrition <br />{' '}
              <span className="text-red-base font-gluten font-black text-4xl"> in your dish</span>
            </h3>
            <p className="text-justify pr-4 font-medium">
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
        </div>
      </section>
      <NutritionDetails />
    </>
  )
}

export default NutritionSection
