import { GreenYellowBg, Rocket, SuperWoman } from '../../assets'

const Mission = () => {
  return (
    <section className="relative md:py-20 2xl:px-36">
      <img src={GreenYellowBg} alt="bg" className="absolute -top-20 left-0 -z-10 h-[100vh] object-cover md:h-auto" />
      <div className="grid md:grid-cols-6 md:gap-10">
        <div className="col-span-2">
          <img src={SuperWoman} alt="" className="hidden md:block" />
        </div>
        <div className="col-span-4 font-lexend text-sm font-[500] md:pr-20 lg:my-28 2xl:mt-44">
          <h3 className="mt-28 px-11 py-5 font-gluten text-4xl font-bold text-white md:mt-0 md:px-0 md:text-3xl lg:text-5xl ">
            Embarking on a <span className="text-black">long journey</span>
          </h3>
          <div className="relative mx-7 rounded-3xl border-4 border-r-8  border-[#A57717] bg-[#FFE7B5] p-3 text-[8px] leading-3 md:mx-0 md:px-7 md:py-4 lg:text-base lg:leading-4">
            <p>
              Our mission is to become the most trusted and reliable brand for products in the market, offering products
              that are made with the highest quality ingredients and are free from harmful chemicals and additives. We
              believe that every customer deserves to have access to wholesome and delicious food, and that is what we
              strive to provide with our products.
            </p>
            <p className="mt-5 rounded-lg bg-[#FFD272] p-2">
              Our vision is to create a world where everyone has access to healthy and nutritious food that is made with
              care and respect for the environment. We want to be at the forefront of the movement towards sustainable
              and ethical food production, and we believe that our products can help make a positive difference in
              people&apos;s lives.
            </p>
            <img
              src={Rocket}
              alt="rocket"
              className="absolute -bottom-11 right-0 w-20 md:-bottom-20 md:-right-16 md:w-36"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Mission
