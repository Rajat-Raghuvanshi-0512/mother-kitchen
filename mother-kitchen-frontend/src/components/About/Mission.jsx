import { GreenYellowBg, Rocket, SuperWoman } from '../../assets'

const Mission = () => {
  return (
    <section className="py-20 relative">
      <img src={GreenYellowBg} alt="bg" className="absolute -z-10 -top-20" />
      <div className="grid grid-cols-6 gap-10">
        <div className="col-span-2">
          <img src={SuperWoman} alt="" />
        </div>
        <div className="col-span-4 font-lexend text-sm font-[500] my-28 pr-20">
          <h3 className="text-white font-gluten text-5xl font-bold py-5 ">
            Embarking on a <span className="text-black">long journey</span>
          </h3>
          <div className="bg-[#FFE7B5] py-4 px-7 rounded-3xl  border-4 border-[#A57717] border-r-8 leading-4 relative">
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
            <img src={Rocket} alt="rocket" className="absolute w-36 -right-16 -bottom-20" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Mission
