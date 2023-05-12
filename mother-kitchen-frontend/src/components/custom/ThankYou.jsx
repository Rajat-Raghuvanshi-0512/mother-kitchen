import { RxCross1 } from 'react-icons/rx'
import { TextLogo, ThanksImg } from '../../assets'
const ThankYou = ({ isOpen, onClose }) => {
  return (
    <div
      className={`${
        isOpen ? 'flex' : 'hidden'
      } fixed w-screen h-screen top-0 left-0 duration-500 p-50  flex items-center justify-center z-50 bg-opacity-60 bg-black`}
    >
      <div className="bg-white/50 flex justify-center items-center w-[100vh] h-[76vh] rounded-[3rem]">
        <div className="w-[93%] h-[90%] bg-[#CCC083] my-10 rounded-[3rem]">
          <div className="flex justify-between mx-10 mt-5">
            <img src={TextLogo} alt="logo" className="w-[10rem]" />
            <div>
              <div className="rounded-full bg-[#C40D4F] w-10 h-10 flex items-center justify-center" onClick={onClose}>
                <RxCross1 className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
          <img src={ThanksImg} alt="thanks" className="w-[50%] mx-auto" />
          <p className="text-center px-20 font-gluten text-[#003D6A] text-lg">
            Thank you for contacting us. We appreciate your interest and will do our best to respond to you as soon as
            possible.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ThankYou
