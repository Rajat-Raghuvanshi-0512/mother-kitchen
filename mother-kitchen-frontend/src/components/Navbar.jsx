import { PaperPlane, TextLogo } from '../assets'
import { Link, useLocation } from 'react-router-dom'
// import { useModal } from '../custom-hooks'
// import Drawer from './custom/Drawer'
import { AiFillHome } from 'react-icons/ai'
import { RxHamburgerMenu } from 'react-icons/rx'

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
  return (
    <nav className="py-8 px-5">
      <div className=" bg-[#C40D4F] border-[3px] border-black border-b-8 border-r-8 px-4 rounded-full flex justify-between items-center drop-shadow-small">
        <div className="text-[#FEF5CE] pl-3">
          <RxHamburgerMenu className="w-9 h-9" />
        </div>
        <div className="pt-3">
          <img src={TextLogo} alt="logo" className="w-[50%] mx-auto" />
        </div>
        <div className=" bg-[#FEF5CE] rounded-full p-2">
          <AiFillHome className="w-5 h-5 sm:w-8 sm:h-8 text-[#C40D4F]" />
        </div>
      </div>
    </nav>
  )
}
const NavLg = () => {
  let location = useLocation()
  return (
    <nav className="py-8 px-5 md:px-20 w-screen">
      <div className="md:bg-green-base border-[3px] border-black border-b-8 border-r-8 px-10 rounded-tr-[40px] rounded-tl-[40px] flex justify-between items-center drop-shadow-small">
        <div className="pt-3">
          <img src={TextLogo} alt="logo" className="w-[50%]" />
        </div>
        <ul className="hidden md:flex text-sm items-center text-white font-lexend font-medium">
          {navLinks.map((navLink) => {
            return (
              <li
                key={navLink.path}
                className={
                  location.pathname === navLink.path
                    ? 'bg-red-base px-7 py-2 rounded border-2 border-black border-b-4 border-r-4 font-bold'
                    : 'px-7 py-2'
                }
              >
                <Link to={navLink.path}>{navLink.name}</Link>
              </li>
            )
          })}
        </ul>
        <div className="flex items-center justify-start">
          <div className="border-[2.5px] text-white rounded-lg p-1">
            <img src={PaperPlane} alt="plane" className="w-7" />
          </div>
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

      <div className="hidden md:block">
        {/*Large Screen*/}
        <NavLg />
      </div>
    </div>
  )
}

export default Navbar
