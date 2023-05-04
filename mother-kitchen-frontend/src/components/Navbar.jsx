import { PaperPlane, TextLogo } from '../assets'
import { Link, useLocation } from 'react-router-dom'
import { useModal } from '../custom-hooks'
import Drawer from './custom/Drawer'

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

const Navbar = () => {
  let location = useLocation()
  const { isOpen, openModal, closeModal } = useModal()
  return (
    <nav className="py-8 px-5 md:px-20 w-screen">
      <div className="bg-green-base border-[3px] border-black border-b-8 border-r-8 px-10 rounded-tr-[40px] rounded-tl-[40px] flex justify-between items-center drop-shadow-small">
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
        <div className="flex items-center justify-center md:hidden">
          <div className="text-xl cursor-pointer w-5 h-1" onClick={openModal} />
          <Drawer isOpen={isOpen} onClose={closeModal} title="Menu">
            <ul className="flex flex-col mt-14 ">
              {navLinks.map((item) => (
                <li className="" key={item.name}>
                  <Link
                    to={item.path}
                    className="capitalize text-gray-700 text-md flex items-center gap-5 px-4 hover:bg-white py-4 mx-4 my-2 rounded-lg duration-300 dark:text-slate-200 dark:hover:bg-slate-700"
                    onClick={closeModal}
                  >
                    <div>{item.name}</div>
                  </Link>
                </li>
              ))}
            </ul>
          </Drawer>
        </div>
        <div className="flex items-center justify-start">
          <div className="border-[2.5px] text-white rounded-lg p-1">
            <img src={PaperPlane} alt="plane" className="w-7" />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
