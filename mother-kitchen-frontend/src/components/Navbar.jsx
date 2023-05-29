import { NavSmall, PaperPlane, TextLogo, TextLogoBlack } from '../assets'
import { Link, useLocation } from 'react-router-dom'
import { RxCross1, RxInstagramLogo } from 'react-icons/rx'
import { RiFacebookFill, RiLinkedinFill } from 'react-icons/ri'
import Drawer from './custom/Drawer'
import { useModal } from '../custom-hooks'
import { BurgerMenuIcon, HomeIcon } from '../assets/icons'

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
    <nav className="px-5 py-8">
      <div className=" flex items-center justify-between rounded-full border-[3px] border-b-8 border-r-8 border-black bg-[#C40D4F] pl-4 pr-3 drop-shadow-small">
        <div className="pl-3 text-[#FEF5CE]">
          <img src={BurgerMenuIcon} alt="burger" className="h-12 w-12 object-contain" onClick={openModal} />
        </div>
        <div className="pt-3">
          <img src={TextLogo} alt="logo" className="mx-auto w-[50%]" />
        </div>
        <img src={HomeIcon} alt="homeicon" className="h-12 w-12 object-contain" />
      </div>
      <Drawer isOpen={isOpen}>
        <div className="grid grid-cols-2">
          <div className="flex items-start justify-start">
            <img src={TextLogoBlack} alt="nav" className="h-28 w-28 object-contain" />
          </div>
          <div className="flex items-end justify-end">
            <img src={NavSmall} alt="nav" className="h-32 w-32 object-contain" />
          </div>
        </div>
        {navLinks.map((link) => {
          return (
            <div key={link.name}>
              <Link
                to={link.path}
                className={`${
                  location.pathname === link.path
                    ? 'border-b-2 border-r-4 border-black bg-[#E9787C] text-white'
                    : 'text-black'
                } rounded-full p-3 font-gluten text-xl font-extralight`}
                onClick={closeModal}
              >
                {link.name}
              </Link>
              <div className="my-4 h-[0.07px] bg-[#976120]" />
            </div>
          )
        })}
        <div>
          <Link
            to="/contact"
            className={`${
              location.pathname === '/contact'
                ? 'border-b-2 border-r-4 border-black bg-[#E9787C] text-white'
                : 'text-black'
            } rounded-full p-3 font-gluten text-xl font-extralight`}
            onClick={closeModal}
          >
            Contact Us
          </Link>
          <div className="my-4 h-[0.07px] bg-[#976120]" />
        </div>
        <div className="grid grid-cols-3 pb-5">
          <div className="col-span-1 flex items-center">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black">
              <RxCross1 className="text-white" onClick={closeModal} />
            </div>
          </div>
          <div className="col-span-2">
            <div className="flex justify-between">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-b-4 border-black bg-[#FF9E00] text-white">
                <RiFacebookFill className="h-10 w-10" />
              </div>
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-b-4 border-black bg-[#FF9E00] text-white">
                <RiLinkedinFill className="h-10 w-10" />
              </div>
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-b-4 border-black bg-[#FF9E00] text-white">
                <RxInstagramLogo className="h-10 w-10" />
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
    <nav className="w-screen px-7 py-5">
      <div className="flex items-center justify-between rounded-tl-[40px] rounded-tr-[40px] border-[3px] border-b-8 border-r-8 border-black px-10 drop-shadow-small md:bg-green-base">
        <div className="pt-3">
          <img src={TextLogo} alt="logo" className="mr-10 w-[6rem]" />
        </div>
        <ul className="hidden items-center gap-3 py-2 pr-7 font-lexend text-base font-medium text-white md:flex">
          {navLinks.map((navLink) => {
            return (
              <li
                key={navLink.path}
                className={
                  location.pathname === navLink.path
                    ? 'rounded border-2 border-b-4 border-r-4 border-black bg-red-base px-3 py-2 text-xs leading-4'
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
            className={`rounded-lg border-[2.5px] p-1 text-white ${
              location.pathname === '/contact' && 'rounded border-black bg-red-base '
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
    <nav className="w-screen px-5 py-5 md:px-20 2xl:px-36">
      <div className="flex items-center justify-between rounded-tl-[40px] rounded-tr-[40px] border-[3px] border-b-8 border-r-8 border-black px-10 py-1 drop-shadow-small md:bg-green-base">
        <div className="pt-3">
          <img src={TextLogo} alt="logo" className="mr-10 w-[120px]" />
        </div>
        <ul className="hidden items-center gap-2 pr-10 font-lexend text-base font-medium text-white md:flex">
          {navLinks.map((navLink) => {
            return (
              <li
                key={navLink.path}
                className={
                  location.pathname === navLink.path
                    ? 'rounded border-2 border-b-4 border-r-4 border-black bg-red-base px-5 py-2 text-sm font-medium'
                    : 'px-5 py-2 text-sm font-medium'
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
            className={`rounded-lg border-[2.5px] p-1 text-white ${
              location.pathname === '/contact' && 'rounded border-black bg-red-base '
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

      <div className="hidden md:block lg:hidden">
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
