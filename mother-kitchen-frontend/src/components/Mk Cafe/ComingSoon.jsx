import { RabitTea, TextLogo, soon } from '../../assets'
import { SoonBg } from '../../assets/mobile'
import BorderDiv from '../custom/BorderDiv'

const ComingSoonSm = () => {
  return (
    <div className="relative -mb-20">
      <img src={SoonBg} alt="soon" className="relative mt-5 h-full w-full object-contain" loading="lazy" />
      <div className="absolute top-10 w-full">
        <h3 className="relative left-[50%] top-[50%] w-[55vw] translate-x-[-50%] translate-y-[-50%] border-b-2 border-t-2 border-white py-2 text-center font-lexend  text-2xl text-white">
          MK’s <span className="font-gluten text-3xl">Cafe</span>
        </h3>
        <div className="black-shadow-large relative left-[50%] top-[50%] mt-6 w-full translate-x-[-50%] translate-y-[-50%] text-center font-gluten text-4xl  font-black text-white">
          Coming Soon
        </div>
      </div>
      <p className="font-white relative bottom-[9rem] px-8 text-center font-lexend text-[11px] leading-[14px] text-white">
        Mother&apos;s Kitchen is excited to announce the upcoming launch of our new cafe! We are passionate about
        providing our customers with nutritious and wholesome food options. Our cafe will feature a menu filled with
        healthy meals and snacks made from the freshest and highest quality ingredients.
      </p>
    </div>
  )
}

const ComingSoonLg = () => {
  return (
    <div className="px-20">
      <BorderDiv className="mx-10  mt-20 overflow-hidden">
        <div className="bg-black/30">
          <img
            src={soon}
            alt=""
            className="absolute top-0 -z-20 h-full w-full object-cover opacity-90 blur-sm"
            loading="lazy"
          />
          <img src={TextLogo} alt="kitchen" className="mx-auto w-40 pt-20 drop-shadow-sm" />
          <div className="mx-32 flex flex-col items-center justify-center border-2 border-t-0 py-10">
            <div className=" mb-10 w-[20vw] border-b border-t border-white py-2 text-center font-gluten text-5xl text-white">
              Cafe
            </div>
            <div className="black-shadow-large py-5 text-center font-gluten text-7xl font-bold leading-6 tracking-widest text-white">
              Coming Soon
            </div>
          </div>
          <p className="mx-auto mt-10 w-[60vw] text-center font-lexend text-sm font-semibold text-white">
            Mother&apos;s Kitchen is excited to announce the upcoming launch of our new cafe! We are passionate about
            providing our customers with nutritious and wholesome food options. Our cafe will feature a menu filled with
            healthy meals and snacks made from the freshest and highest quality ingredients. We believe that eating
            healthy should be a joyous experience, and we are committed to making that possible for all of our
            customers.
          </p>
          <img src={RabitTea} alt="rabbit" className="ml-auto mr-10 w-40" />
        </div>
      </BorderDiv>
    </div>
  )
}

const ComingSoon = () => {
  return (
    <div>
      <div className="md:hidden ">
        {/*Small Screen*/}
        <ComingSoonSm />
      </div>

      <div className="hidden md:block">
        {/*Large Screen*/}
        <ComingSoonLg />
      </div>
    </div>
  )
}

export default ComingSoon
