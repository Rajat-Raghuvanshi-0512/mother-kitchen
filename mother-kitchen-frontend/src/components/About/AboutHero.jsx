import { AboutBg, AboutHeroTextBg, AboutIntroBg, TextLogo } from '../../assets'
import YellowDiv from '../custom/YellowDiv'

const AboutHero = () => {
  return (
    <section>
      <img src={AboutBg} alt="about" className="-top-10 absolute -z-30" />
      <h1 className="text-center text-4xl md:text-[80px] font-lexend font-black uppercase mt-20 md:leading-[60px]">
        <div className="text-red-base  tracking-tighter">Opening</div>
        <div className="pt-2 md:pt-5 md:text-6xl text-red-base font-gluten">the</div>
        <div className="font-bold">door</div>
      </h1>
      <div className="px-5 md:px-24 py-10">
        <YellowDiv>
          <img src={TextLogo} alt="logo" className="absolute hidden md:block top-10 left-10 w-[150px]" />
          <div className=" flex flex-col md:flex-row justify-center w-full">
            <img src={AboutIntroBg} alt="about" className="md:w-[40%]" />
          </div>
          <div className="px-5 md:px-24 relative pb-10">
            <img src={AboutHeroTextBg} alt="" className="h-[30vh] object-cover" />
            <div className="md:px-40 font-lexend font-semibold text-[6px] md:text-sm absolute top-7 md:leading-4 tracking-tight left-0">
              <p className="bg-[#FFD272] mx-10 mt-4 md:mt-0 md:mx-0 rounded-lg md:rounded-none p-2">
                At Mother&apos;s Kitchen, we are committed to providing our customers with pure and hygienic products.
                Our brand was born out of a passion for good food and a desire to bring the best of nature&apos;s
                ingredients to every kitchen.
              </p>
              <p className="pt-3 px-4 mx-5 md:mx-0">
                We take great pride in the quality of our products and are committed to maintaining the highest
                standards of hygiene and safety in our manufacturing processes. We work closely with our suppliers to
                source only the best quality ingredients, and we use state-of-the-art technology and equipment to ensure
                that our products are of the highest quality.
              </p>
            </div>
          </div>
        </YellowDiv>
      </div>
    </section>
  )
}

export default AboutHero
