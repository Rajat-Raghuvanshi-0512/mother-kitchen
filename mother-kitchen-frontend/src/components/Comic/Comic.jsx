import { RabitTea, TextLogo, soon } from '../../assets'
import BorderDiv from '../custom/BorderDiv'

const Comic = () => {
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

export default Comic
