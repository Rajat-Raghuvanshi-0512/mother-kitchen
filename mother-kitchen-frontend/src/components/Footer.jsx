import Button from './custom/Button'
import { TiSocialFacebookCircular } from 'react-icons/ti'
import { RiInstagramLine, RiTwitterLine, RiUser3Fill } from 'react-icons/ri'
import { TbBrandLinkedin } from 'react-icons/tb'
import { BsQuestionCircle } from 'react-icons/bs'
import { TextLogo, footerImg } from '../assets'

const Footer = () => {
  return (
    <footer className="bg-[#031E29] text-white border-4 border-black border-r-[10px] border-l-[10px] border-b-[15px] rounded-br-3xl rounded-bl-3xl p-4 mt-20 m-3">
      <a href="mailto:contact@motherskitchen.co.in" className="font-gluten">
        Contact@motherskitchen.co.in
      </a>
      <div className="pl-32 font-gluten relative grid grid-cols-2">
        <div>
          <div className="bg-white rounded-full p-2 flex justify-between w-[400px] border-2 border-b-4 border-r-4 border-black my-5">
            <input
              type="email"
              className="bg-transparent pl-4 py-2 text-black outline-none font-lexend tracking-tighter text-sm w-[70%]"
              placeholder="EMAIL ADDRESS"
            />
            <Button className="bg-green-base">Sign Up</Button>
          </div>
          <div className="social-medias flex gap-7">
            <RiInstagramLine className="w-10 h-10" />
            <TiSocialFacebookCircular className="w-10 h-10" />
            <TbBrandLinkedin className="w-10 h-10" />
            <RiTwitterLine className="w-10 h-10" />
          </div>
          <p className="font-bold flex items-start my-10 text-xl">
            <p>Contact Us</p> <RiUser3Fill className="w-8 h-5" />
          </p>
          <img src={TextLogo} alt="logo" />
          <img src={footerImg} alt="footer" className="absolute w-[550px] bottom-0 left-[30%]" />
          <p className="absolute bottom-0 left-[50%] drop-shadow-3xl shadow-3xl">Website by pixysquare</p>
        </div>
        <div className=" text-xl flex  flex-col ml-auto">
          <div className="flex justify-end pr-20">
            <div className="relative">
              <div className="p-4  border-r-2 border-b-2 text-[#C842DE]">Home</div>
              <div className="p-4 border-r-2">Team</div>
              <div className="w-3 h-3 rounded-full bg-[#031E29] absolute bottom-[45%] left-[92%] "></div>
            </div>
            <div>
              <div className="p-4 ">About</div>
              <div className="p-4  border-t-2">Comic</div>
            </div>
          </div>
          <div className="pr-5 ml-auto mt-20">
            <div className="flex  bg-green-base border-2 border-r-8 border-b-8 border-black rounded-full items-center py-3 w-32">
              <BsQuestionCircle className="w-5 mx-3" />
              <span>Help</span>
            </div>
            <p className="mt-10">+91 931 041 1544</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
