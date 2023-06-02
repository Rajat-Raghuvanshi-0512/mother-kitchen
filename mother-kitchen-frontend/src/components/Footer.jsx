import Button from './custom/Button'
import { TiSocialFacebookCircular } from 'react-icons/ti'
import { RiInstagramLine, RiTwitterLine, RiUser3Fill } from 'react-icons/ri'
import { TbBrandLinkedin } from 'react-icons/tb'
import { BsQuestionCircle } from 'react-icons/bs'
import { TextLogo, footerImg } from '../assets'
import { Link, useLocation } from 'react-router-dom'

const FooterSm = ({ location }) => {
  return (
    <footer className="m-1 mt-20 rounded-bl-3xl rounded-br-3xl border-4 border-b-[14px] border-l-4 border-r-[10px] border-black bg-[#031E29] p-2 pb-0 text-white">
      <div className="mb-5 mt-2 flex w-full justify-between rounded-full border-2 border-b-4 border-r-4 border-black bg-white p-1">
        <input
          type="email"
          className="w-[60%] bg-transparent py-1 pl-3 font-lexend text-sm tracking-tighter text-black outline-none"
          placeholder="EMAIL ADDRESS"
        />
        <Button className="!bg-green-base !py-2 font-lexend text-sm tracking-tighter hover:!bg-red-base">
          Sign Up
        </Button>
      </div>

      <div className=" relative grid grid-cols-2 gap-5 font-gluten">
        <div className="text-xs">
          <div className="social-medias flex gap-3">
            <RiInstagramLine className="h-10 w-10" />
            <TiSocialFacebookCircular className="h-10 w-10" />
            <TbBrandLinkedin className="h-10 w-10" />
            <RiTwitterLine className="h-10 w-10" />
          </div>
          <div className="my-5">
            <a href="mailto:contact@motherskitchen.co.in" className="font-gluten">
              Contact@motherskitchen.co.in
            </a>
          </div>
          <p className="my-2 mb-20 flex items-start font-bold">
            <span>Contact Us </span> <RiUser3Fill className="h-3 w-3" />
          </p>
          <p className="absolute -bottom-1 left-[37%] z-10 text-[10px] shadow-3xl drop-shadow-3xl">
            Website by pixysquare
          </p>
        </div>
        <img src={footerImg} alt="footer" className="absolute bottom-0 left-[45%] w-[220px] translate-x-[-50%]" />

        <div className=" ml-auto flex  flex-col text-xl">
          <div className="pr- flex justify-end text-xs">
            <div className="relative">
              <div className="border-b-2  border-r-2 p-2">
                <Link
                  to={'/'}
                  className={`${location.pathname === '/' && 'text-[#C842DE]'}`}
                  onClick={() => scroll(0, 0)}
                >
                  Home
                </Link>
              </div>
              <div className="border-r-2 p-2">
                <Link
                  to={'/team'}
                  className={`${location.pathname === '/team' && 'text-[#C842DE]'}`}
                  onClick={() => scroll(0, 0)}
                >
                  Team
                </Link>
              </div>
              <div className="absolute bottom-[43%] left-[87%] h-3 w-3 rounded-full bg-[#031E29] "></div>
            </div>
            <div>
              <div className="p-2 ">
                <Link
                  to={'/about'}
                  className={`${location.pathname === '/about' && 'text-[#C842DE]'}`}
                  onClick={() => scroll(0, 0)}
                >
                  About
                </Link>
              </div>
              <div className="border-t-2  p-2">
                <Link
                  to={'/comic'}
                  className={`${location.pathname === '/comic' && 'text-[#C842DE]'}`}
                  onClick={() => scroll(0, 0)}
                >
                  Comic
                </Link>
              </div>
            </div>
          </div>
          <img src={TextLogo} alt="logo" className="relative -right-5 top-16 w-20" />
        </div>
      </div>
    </footer>
  )
}
const FooterMd = ({ location }) => {
  return (
    <footer className="m-1 mt-20 rounded-bl-3xl rounded-br-3xl border-4 border-b-[15px] border-l-[10px] border-r-[10px] border-black bg-[#031E29] p-4 pb-0 text-white">
      <a href="mailto:contact@motherskitchen.co.in" className="font-gluten text-xs">
        Contact@motherskitchen.co.in
      </a>
      <div className="relative grid grid-cols-2 pl-5 font-gluten">
        <div>
          <div className="my-5 flex w-[300px] justify-between rounded-full border-2 border-b-4 border-r-4 border-black bg-white p-1">
            <input
              type="email"
              className="w-[70%] bg-transparent py-1 pl-4 font-lexend text-[8px] tracking-tighter text-black outline-none"
              placeholder="EMAIL ADDRESS"
            />
            <Button className="bg-green-base text-[8px]">Sign Up</Button>
          </div>
          <div className="social-medias flex gap-7">
            <RiInstagramLine className="h-10 w-10 md:h-8 md:w-8 lg:h-10 lg:w-10" />
            <TiSocialFacebookCircular className="h-10 w-10 md:h-8 md:w-8 lg:h-10 lg:w-10" />
            <TbBrandLinkedin className="h-10 w-10 md:h-8 md:w-8 lg:h-10 lg:w-10" />
            <RiTwitterLine className="h-10 w-10 md:h-8 md:w-8 lg:h-10 lg:w-10" />
          </div>
          <p className="my-5 flex items-start text-xl font-bold">
            <span>Contact Us</span> <RiUser3Fill className="h-5 w-8" />
          </p>
          <img src={TextLogo} alt="logo" className="w-[10rem]" />
          <p className="absolute bottom-0 left-[48%] z-10 text-xs shadow-3xl drop-shadow-3xl">Website by pixysquare</p>
        </div>
        <img src={footerImg} alt="footer" className="absolute bottom-0 left-[50%] w-[350px] translate-x-[-50%]" />
        <div className=" ml-auto flex  flex-col text-xl">
          <div className="flex justify-end pr-10">
            <div className="relative">
              <div className="border-b-2  border-r-2 p-4">
                <Link
                  to={'/'}
                  className={`${location.pathname === '/' && 'text-[#C842DE]'}`}
                  onClick={() => scroll(0, 0)}
                >
                  Home
                </Link>
              </div>
              <div className="border-r-2 p-4">
                <Link
                  to={'/team'}
                  className={`${location.pathname === '/team' && 'text-[#C842DE]'}`}
                  onClick={() => scroll(0, 0)}
                >
                  Team
                </Link>
              </div>
              <div className="absolute bottom-[45%] left-[92%] h-3 w-3 rounded-full bg-[#031E29] "></div>
            </div>
            <div>
              <div className="p-4 ">
                <Link
                  to={'/about'}
                  className={`${location.pathname === '/about' && 'text-[#C842DE]'}`}
                  onClick={() => scroll(0, 0)}
                >
                  About
                </Link>
              </div>
              <div className="border-t-2  p-4">
                <Link
                  to={'/comic'}
                  className={`${location.pathname === '/comic' && 'text-[#C842DE]'}`}
                  onClick={() => scroll(0, 0)}
                >
                  Comic
                </Link>
              </div>
            </div>
          </div>
          <div className="ml-auto mt-10 pr-5">
            <div className="flex  w-24 items-center  rounded-full border-2  border-b-8 border-r-8 border-black bg-green-base py-2 font-lexend text-xs uppercase tracking-tighter">
              <BsQuestionCircle className="mx-2 h-5 w-5" />
              <span className="text-sm">Help</span>
            </div>
            <p className="mt-5 text-sm">+91 931 041 1544</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
const FooterLg = ({ location }) => {
  return (
    <footer className="m-3 mt-20 rounded-bl-3xl rounded-br-3xl border-4 border-b-[15px] border-l-[10px] border-r-[10px] border-black bg-[#031E29] p-4 pb-0 text-white">
      <a href="mailto:contact@motherskitchen.co.in" className="font-gluten">
        Contact@motherskitchen.co.in
      </a>
      <div className="relative grid grid-cols-2 pl-20 font-gluten">
        <div>
          <div className="my-5 flex w-[400px] justify-between rounded-full border-2 border-b-4 border-r-4 border-black bg-white p-2">
            <input
              type="email"
              className="w-[60%] bg-transparent py-2 pl-4 font-lexend text-sm tracking-tighter text-black outline-none"
              placeholder="EMAIL ADDRESS"
            />
            <Button className="!bg-green-base !py-2 font-lexend text-sm tracking-tighter hover:!bg-red-base">
              Sign Up
            </Button>
          </div>
          <div className="social-medias flex gap-7">
            <RiInstagramLine className="h-10 w-10 cursor-pointer duration-300 hover:text-cyan-300" />
            <TiSocialFacebookCircular className="h-10 w-10 cursor-pointer duration-300 hover:text-cyan-300" />
            <TbBrandLinkedin className="h-10 w-10 cursor-pointer duration-300 hover:text-cyan-300" />
            <RiTwitterLine className="h-10 w-10 cursor-pointer duration-300 hover:text-cyan-300" />
          </div>
          <p className="my-10 flex items-start text-xl font-bold">
            <span>Contact Us</span> <RiUser3Fill className="h-5 w-8" />
          </p>
          <img src={TextLogo} alt="logo" className="w-[13rem]" />
          <p className="absolute bottom-0 left-[48%] z-10 shadow-3xl drop-shadow-3xl">Website by pixysquare</p>
        </div>
        <img src={footerImg} alt="footer" className="absolute bottom-0 left-[50%] w-[550px] translate-x-[-50%]" />
        <div className=" ml-auto flex  flex-col text-xl">
          <div className="flex justify-end pr-20">
            <div className="relative">
              <div className="border-b-2  border-r-2 p-4">
                <Link
                  to={'/'}
                  className={`${location.pathname === '/' && 'text-[#C842DE]'}`}
                  onClick={() => scroll(0, 0)}
                >
                  Home
                </Link>
              </div>
              <div className="border-r-2 p-4">
                <Link
                  to={'/team'}
                  className={`${location.pathname === '/team' && 'text-[#C842DE]'}`}
                  onClick={() => scroll(0, 0)}
                >
                  Team
                </Link>
              </div>
              <div className="absolute bottom-[45%] left-[92%] h-3 w-3 rounded-full bg-[#031E29] "></div>
            </div>
            <div>
              <div className="p-4 ">
                <Link
                  to={'/about'}
                  className={`${location.pathname === '/about' && 'text-[#C842DE]'}`}
                  onClick={() => scroll(0, 0)}
                >
                  About
                </Link>
              </div>
              <div className="border-t-2  p-4">
                <Link
                  to={'/comic'}
                  className={`${location.pathname === '/comic' && 'text-[#C842DE]'}`}
                  onClick={() => scroll(0, 0)}
                >
                  Comic
                </Link>
              </div>
            </div>
          </div>
          <div className="ml-auto mt-20 pr-5">
            <Link
              to={'/contact'}
              className="flex  w-32 items-center rounded-full border-2 border-b-8 border-r-8 border-black bg-green-base py-3 font-lexend text-sm uppercase tracking-tighter duration-300 hover:bg-red-base"
              onClick={() => scroll(0, 0)}
            >
              <BsQuestionCircle className="mx-3 h-6 w-6" />
              <span>Help</span>
            </Link>
            <p className="mt-10">+91 931 041 1544</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

const Footer = () => {
  const location = useLocation()
  return (
    <div>
      <div className="md:hidden ">
        {/*Small Screen*/}
        <FooterSm location={location} />
      </div>

      <div className="hidden md:block lg:hidden">
        <FooterMd location={location} />
      </div>
      <div className="hidden lg:block">
        <FooterLg location={location} />
      </div>
    </div>
  )
}

export default Footer
