import { RabitTea, TextLogo, soon } from '../../assets'
import { SoonBg } from '../../assets/mobile'
import BorderDiv from '../custom/BorderDiv'

const ComingSoonSm = () => {
  return (
    <div className="relative">
      <img src={SoonBg} alt="soon" className="relative mt-5" />
      <div className="absolute top-0 w-full">
        <h3 className="relative left-[50%] top-[50%] w-[55vw] translate-x-[-50%] translate-y-[-50%] border-b-2 border-t-2 border-white py-2 text-center font-lexend  text-2xl text-white">
          MK’s Cafe
        </h3>
        <div className="black-shadow relative left-[50%] top-[50%] mt-6 w-full translate-x-[-50%] translate-y-[-50%] text-center font-gluten text-4xl  font-black text-white">
          Coming Soon
        </div>
        <p className="font-white absolute bottom-[-32rem] px-16 text-center font-lexend text-[10px] leading-3 text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut aliquet lacus, sit amet eleifend dui. Mauris
          dapibus eros eget lacus hendrerit, vel sagittis ipsum imperdiet. Integer elementum viverra sem in eleifend.
          Pellentesque erat tellus, aliquet eget turpis vitae, euismod vestibulum orci. Aenean
        </p>
      </div>
    </div>
  )
}

const ComingSoonLg = () => {
  return (
    <div className="px-20">
      <BorderDiv className="mx-10  mt-20 overflow-hidden">
        <div className="bg-black/30">
          <img src={soon} alt="" className="absolute top-0 -z-20 h-full w-full object-cover opacity-90 blur-sm" />
          <img src={TextLogo} alt="kitchen" className="mx-auto w-40 pt-20" />
          <div className="mx-32 flex flex-col items-center justify-center border-2 border-t-0 py-10 drop-shadow-3xl">
            <div className=" mb-10 w-[20vw] border-b border-t border-white py-2 text-center font-gluten text-5xl text-white">
              Cafe
            </div>
            <div className="black-shadow py-5 text-center font-gluten text-7xl font-bold leading-6 tracking-widest text-white">
              Coming Soon
            </div>
          </div>
          <p className="mx-auto mt-10 w-[60vw] text-justify font-lexend text-xs font-semibold text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut aliquet lacus, sit amet eleifend dui. Mauris
            dapibus eros eget lacus hendrerit, vel sagittis ipsum imperdiet. Integer elementum viverra sem in eleifend.
            Pellentesque erat tellus, aliquet eget turpis vitae, euismod vestibulum orci. Aenean{' '}
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
