import { AboutBg, AboutHeroTextBg, AboutHeroTextBgPhone, AboutIntroBg, TextLogo } from '../../assets'
import YellowDiv from '../custom/YellowDiv'

const AboutHero = () => {
  return (
    <section>
      <img src={AboutBg} alt="about" className="absolute -top-10 -z-30" />
      <h1 className="mt-20 text-center font-lexend text-4xl font-black uppercase md:text-[80px] md:leading-[60px]">
        <div className="tracking-tighter  text-red-base">Opening</div>
        <div className="pt-2 font-gluten text-red-base md:pt-5 md:text-6xl">the</div>
        <div className="font-bold">door</div>
      </h1>
      <div className="px-5 py-10 md:px-24">
        <YellowDiv>
          <img src={TextLogo} alt="logo" className="absolute left-10 top-10 hidden w-[150px] md:block" />
          <div className=" flex w-full flex-col justify-center md:flex-row">
            <img src={AboutIntroBg} alt="about" className="md:w-[40%]" />
          </div>
          <div className="relative px-5 pb-10 md:px-10 lg:px-24">
            <img src={AboutHeroTextBg} alt="asd" className="hidden h-[300px] w-full object-cover lg:block" />
            <img src={AboutHeroTextBgPhone} alt="sdd" className="h-[400px] w-full object-cover  lg:hidden" />
            <div className="absolute left-0 top-8 font-lexend text-[6px] tracking-tight md:px-20 md:text-sm md:leading-4 lg:top-10 lg:px-40 lg:font-semibold">
              <p className="mx-10 mt-4 rounded-lg bg-[#FFD272] p-2 md:mx-0 md:mt-0 md:rounded-none">
                At Mother&apos;s Kitchen, we are committed to providing our customers with pure and hygienic products.
                Our brand was born out of a passion for good food and a desire to bring the best of nature&apos;s
                ingredients to every kitchen.
              </p>
              <p className="mx-5 px-4 pt-3 md:mx-0">
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
