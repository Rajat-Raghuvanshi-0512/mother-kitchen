import { RxCross1 } from 'react-icons/rx'
import { TextLogo, ThanksImg } from '../../assets'
const ThankYou = ({ isOpen, onClose }) => {
  return (
    <div
      className={`${
        isOpen ? 'flex' : 'hidden'
      } md:p-50 fixed left-0 top-0 z-50 flex h-screen w-screen  items-center justify-center bg-black bg-opacity-60 duration-500`}
    >
      <div className="flex h-[50vh] w-[80vw] items-center justify-center rounded-3xl bg-white/50 md:h-[76vh] md:w-[100vh] lg:rounded-[3rem]">
        <div className="my-10 h-[90%] w-[90%] rounded-3xl bg-[#CCC083] md:h-[90%] md:w-[93%] lg:rounded-[3rem]">
          <div className="mx-4 mt-5 flex justify-between md:mx-10">
            <img src={TextLogo} alt="logo" className="w-[6rem] object-contain md:w-[10rem]" />
            <div>
              <div
                className="flex h-7 w-7 items-center justify-center rounded-full bg-[#C40D4F] md:h-10 md:w-10"
                onClick={onClose}
              >
                <RxCross1 className="h-4 w-4 text-white md:h-6 md:w-6" />
              </div>
            </div>
          </div>
          <img src={ThanksImg} alt="thanks" className="mx-auto w-[70%] md:w-[50%]" />
          <p className="mt-3 px-8 text-center font-gluten text-sm leading-4 text-[#003D6A] md:px-20 md:text-lg md:leading-5">
            Thank you for contacting us. We appreciate your interest and will do our best to respond to you as soon as
            possible.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ThankYou
