import { PaperPlane, TextLogo } from '../assets'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  {
    name: 'Home',
    path: 'home',
  },
  {
    name: 'About',
    path: 'about',
  },
  {
    name: 'Our Team',
    path: 'team',
  },
  {
    name: 'Brands',
    path: 'brands',
  },
  {
    name: 'Comic',
    path: 'comic',
  },
  {
    name: 'MK Cafe',
    path: 'cafe',
  },
]

const Navbar = () => {
  let location = useLocation()
  console.log(location)
  return (
    <nav className="py-8 px-20 w-screen">
      <div className="bg-green-base border-[3px] border-black border-b-8 border-r-8 px-10 rounded-tr-3xl rounded-tl-3xl flex justify-between items-center">
        <div className="pt-3">
          <img src={TextLogo} alt="logo" className="w-[70%]" />
        </div>
        <ul className="flex text-sm items-center text-white font-lexend font-medium">
          {navLinks.map((navLink) => {
            return (
              <li
                key={navLink.path}
                className={
                  location.pathname.includes(navLink.path)
                    ? 'bg-red-base px-7 py-2 rounded border-2 border-black border-b-4 border-r-4 font-bold'
                    : 'px-7 py-2'
                }
              >
                <Link to={`/${navLink.path}`}>{navLink.name}</Link>
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

export default Navbar
