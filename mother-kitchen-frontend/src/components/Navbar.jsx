import { NavSmall, PaperPlane, TextLogo, TextLogoBlack } from '../assets'
import { Link, useLocation } from 'react-router-dom'
// import { useModal } from '../custom-hooks'
// import Drawer from './custom/Drawer'
import { AiFillHome } from 'react-icons/ai'
import { RxCross1, RxHamburgerMenu, RxInstagramLogo } from 'react-icons/rx'
import { RiFacebookFill, RiLinkedinFill } from 'react-icons/ri'
import Drawer from './custom/Drawer'
import { useModal } from '../custom-hooks'

const navLinks = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'About',
    path: '/about',
  },
  {
    name: 'Our Team',
    path: '/team',
  },
  {
    name: 'Brands',
    path: '/brands',
  },
  {
    name: 'Comic',
    path: '/comic',
  },
  {
    name: 'MK Cafe',
    path: '/cafe',
  },
]
const NavSm = () => {
  let location = useLocation()
  const { isOpen, openModal, closeModal } = useModal()
  return (
    <nav className="py-8 px-5">
      <div className=" bg-[#C40D4F] border-[3px] border-black border-b-8 border-r-8 px-4 rounded-full flex justify-between items-center drop-shadow-small">
        <div className="text-[#FEF5CE] pl-3">
          <RxHamburgerMenu className="w-9 h-9" onClick={openModal} />
        </div>
        <div className="pt-3">
          <img src={TextLogo} alt="logo" className="w-[50%] mx-auto" />
        </div>
        <div className=" bg-[#FEF5CE] rounded-full p-2">
          <AiFillHome className="w-5 h-5 sm:w-8 sm:h-8 text-[#C40D4F]" />
        </div>
      </div>
      <Drawer isOpen={isOpen}>
        <div className="grid grid-cols-2">
          <div className="flex items-center justify-center">
            <img src={TextLogoBlack} alt="nav" />
          </div>
          <div>
            <img src={NavSmall} alt="nav" />
          </div>
        </div>
        {navLinks.map((link) => {
          return (
            <div key={link.name}>
              <Link
                to={link.path}
                className={`${
                  location.pathname === link.path
                    ? 'bg-[#E9787C] text-white border-r-4 border-b-2 border-black'
                    : 'text-black'
                } font-gluten font-extralight p-3 rounded-full text-xl`}
                onClick={closeModal}
              >
                {link.name}
              </Link>
              <div className="bg-[#976120] my-4 h-[0.07px]" />
            </div>
          )
        })}
        <div>
          <Link
            to="/contact"
            className={`${
              location.pathname === '/contact'
                ? 'bg-[#E9787C] text-white border-r-4 border-b-2 border-black'
                : 'text-black'
            } font-gluten font-extralight p-3 rounded-full text-xl`}
          >
            Contact Us
          </Link>
          <div className="bg-[#976120] my-4 h-[0.07px]" />
        </div>
        <div className="grid grid-cols-3 pb-5">
          <div className="col-span-1 flex items-center">
            <div className="bg-black rounded-full flex items-center justify-center w-8 h-8">
              <RxCross1 className="text-white" onClick={closeModal} />
            </div>
          </div>
          <div className="col-span-2">
            <div className="flex justify-between">
              <div className="border bg-[#FF9E00] text-white w-14 h-14 border-black border-b-4 rounded-full flex items-center justify-center">
                <RiFacebookFill className="w-10 h-10" />
              </div>
              <div className="border bg-[#FF9E00] text-white w-14 h-14 border-black border-b-4 rounded-full flex items-center justify-center">
                <RiLinkedinFill className="w-10 h-10" />
              </div>
              <div className="border bg-[#FF9E00] text-white w-14 h-14 border-black border-b-4 rounded-full flex items-center justify-center">
                <RxInstagramLogo className="w-10 h-10" />
              </div>
            </div>
          </div>
        </div>
      </Drawer>
    </nav>
  )
}
const NavMd = () => {
  let location = useLocation()
  return (
    <nav className="py-5 px-7 w-screen">
      <div className="md:bg-green-base border-[3px] border-black border-b-8 border-r-8 px-10 rounded-tr-[40px] rounded-tl-[40px] flex justify-between items-center drop-shadow-small">
        <div className="pt-3">
          <img src={TextLogo} alt="logo" className="w-[6rem] mr-10" />
        </div>
        <ul className="hidden md:flex text-base items-center gap-3 py-2 text-white font-lexend font-medium pr-7">
          {navLinks.map((navLink) => {
            return (
              <li
                key={navLink.path}
                className={
                  location.pathname === navLink.path
                    ? 'bg-red-base px-3 py-2 leading-4 rounded border-2 text-xs border-black border-b-4 border-r-4'
                    : 'px-3 py-2 text-xs leading-4 '
                }
              >
                <Link to={navLink.path}>{navLink.name}</Link>
              </li>
            )
          })}
        </ul>
        <div className="flex items-center justify-start py-5">
          <Link
            to={'/contact'}
            className={`border-[2.5px] text-white rounded-lg p-1 ${
              location.pathname === '/contact' && 'border-black bg-red-base rounded '
            }`}
          >
            <img src={PaperPlane} alt="plane" className="w-9" />
          </Link>
        </div>
      </div>
    </nav>
  )
}
const NavLg = () => {
  let location = useLocation()
  return (
    <nav className="py-8 px-5 md:px-20 w-screen">
      <div className="md:bg-green-base border-[3px] border-black border-b-8 border-r-8 px-10 rounded-tr-[40px] rounded-tl-[40px] flex justify-between items-center drop-shadow-small py-2">
        <div className="pt-3">
          <img src={TextLogo} alt="logo" className="w-[120px] mr-10" />
        </div>
        <ul className="hidden md:flex gap-2 text-base items-center text-white font-lexend font-medium pr-10">
          {navLinks.map((navLink) => {
            return (
              <li
                key={navLink.path}
                className={
                  location.pathname === navLink.path
                    ? 'bg-red-base px-5 py-2 text-sm rounded border-2 border-black border-b-4 border-r-4 font-bold'
                    : 'px-5 py-2 text-sm'
                }
              >
                <Link to={navLink.path}>{navLink.name}</Link>
              </li>
            )
          })}
        </ul>
        <div className="flex items-center justify-start">
          <Link
            to={'/contact'}
            className={`border-[2.5px] text-white rounded-lg p-1 ${
              location.pathname === '/contact' && 'border-black bg-red-base rounded '
            }`}
          >
            <img src={PaperPlane} alt="plane" className="w-6" />
          </Link>
        </div>
      </div>
    </nav>
  )
}

const Navbar = () => {
  return (
    <div>
      <div className="md:hidden ">
        {/*Small Screen*/}
        <NavSm />
      </div>

      <div className="hidden lg:hidden md:block">
        {/*Medium Screen*/}
        <NavMd />
      </div>
      <div className="hidden lg:block">
        {/*Large Screen*/}
        <NavLg />
      </div>
    </div>
  )
}

export default Navbar
