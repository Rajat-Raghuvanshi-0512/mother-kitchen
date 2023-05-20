import { RxCross1 } from 'react-icons/rx'
import { TextLogo, ThanksImg } from '../../assets'
const ThankYou = ({ isOpen, onClose }) => {
  return (
    <div
      className={`${
        isOpen ? 'flex' : 'hidden'
      } p-50 fixed left-0 top-0 z-50 flex h-screen  w-screen items-center justify-center bg-black bg-opacity-60 duration-500`}
    >
      <div className="flex h-[76vh] w-[100vh] items-center justify-center rounded-[3rem] bg-white/50">
        <div className="my-10 h-[90%] w-[93%] rounded-[3rem] bg-[#CCC083]">
          <div className="mx-10 mt-5 flex justify-between">
            <img src={TextLogo} alt="logo" className="w-[10rem]" />
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C40D4F]" onClick={onClose}>
                <RxCross1 className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
          <img src={ThanksImg} alt="thanks" className="mx-auto w-[50%]" />
          <p className="px-20 text-center font-gluten text-lg text-[#003D6A]">
            Thank you for contacting us. We appreciate your interest and will do our best to respond to you as soon as
            possible.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ThankYou
