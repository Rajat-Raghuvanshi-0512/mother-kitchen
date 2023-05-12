import { RabitTea, TextLogo, soon } from '../../assets'
import { SoonBg } from '../../assets/mobile'
import BorderDiv from '../custom/BorderDiv'

const ComingSoonSm = () => {
  return (
    <div className="relative">
      <img src={SoonBg} alt="soon" className="mt-5 relative" />
      <div className="absolute top-0 w-full">
        <h3 className="border-t-2 border-b-2 relative w-[55vw] border-white text-white text-center text-2xl font-lexend py-2 left-[50%] top-[50%]  translate-x-[-50%] translate-y-[-50%]">
          MK’s Cafe
        </h3>
        <div className="font-black text-4xl mt-6 font-gluten text-center text-white black-shadow relative w-full left-[50%] top-[50%]  translate-x-[-50%] translate-y-[-50%]">
          Coming Soon
        </div>
        <p className="font-lexend text-[10px] text-white font-white px-16 leading-3 text-center bottom-[-32rem] absolute">
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
    <div>
      <BorderDiv className="overflow-hidden  mt-20 mx-10">
        <div className="bg-black/50">
          <img src={soon} alt="" className="opacity-50 blur-sm absolute h-full top-0 w-full -z-20 object-cover" />
          <img src={TextLogo} alt="kitchen" className="w-52 mx-auto pt-32" />
          <div className="flex justify-center items-center flex-col border-4 mx-32 py-20 border-t-0 drop-shadow-3xl">
            <div className="border-t-2 border-b-2 border-white text-white text-7xl font-gluten  my-10 py-4 w-[20vw] text-center">
              Cafe
            </div>
            <div className="font-black text-9xl font-gluten text-white black-shadow">Coming Soon</div>
          </div>
          <p className="w-[60vw] text-white text-justify font-semibold font-lexend mx-auto mt-14">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut aliquet lacus, sit amet eleifend dui. Mauris
            dapibus eros eget lacus hendrerit, vel sagittis ipsum imperdiet. Integer elementum viverra sem in eleifend.
            Pellentesque erat tellus, aliquet eget turpis vitae, euismod vestibulum orci. Aenean{' '}
          </p>
          <img src={RabitTea} alt="rabbit" className="w-60 ml-auto mr-10" />
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
