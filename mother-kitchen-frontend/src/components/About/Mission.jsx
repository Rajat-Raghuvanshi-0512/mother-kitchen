import { GreenYellowBg, Rocket, SuperWoman } from '../../assets'

const Mission = () => {
  return (
    <section className="md:py-20 relative">
      <img src={GreenYellowBg} alt="bg" className="absolute -z-10 -top-20 h-[100vh] md:h-auto object-cover" />
      <div className="grid md:grid-cols-6 md:gap-10">
        <div className="col-span-2">
          <img src={SuperWoman} alt="" className="hidden md:block" />
        </div>
        <div className="col-span-4 font-lexend text-sm font-[500] md:my-28 md:pr-20">
          <h3 className="text-white font-gluten text-4xl px-11 mt-28 md:mt-0 md:px-0 md:text-5xl font-bold py-5 ">
            Embarking on a <span className="text-black">long journey</span>
          </h3>
          <div className="bg-[#FFE7B5] p-3 md:py-4 md:px-7 rounded-3xl  border-4 border-[#A57717] border-r-8 md:leading-4 text-[8px] md:text-base leading-3 mx-7 md:mx-0 relative">
            <p>
              Our mission is to become the most trusted and reliable brand for products in the market, offering products
              that are made with the highest quality ingredients and are free from harmful chemicals and additives. We
              believe that every customer deserves to have access to wholesome and delicious food, and that is what we
              strive to provide with our products.
            </p>
            <p className="bg-[#FFD272] mt-5 p-2 rounded-lg">
              Our vision is to create a world where everyone has access to healthy and nutritious food that is made with
              care and respect for the environment. We want to be at the forefront of the movement towards sustainable
              and ethical food production, and we believe that our products can help make a positive difference in
              people&apos;s lives.
            </p>
            <img
              src={Rocket}
              alt="rocket"
              className="absolute w-20 right-0 -bottom-11 md:w-36 md:-right-16 md:-bottom-20"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Mission
