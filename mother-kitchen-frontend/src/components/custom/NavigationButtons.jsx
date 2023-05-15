import { Link } from 'react-router-dom'
const NavigationButton = ({ children, className, path }) => {
  return (
    <Link
      to={path}
      className={`text-white  hover:scale-95 duration-300 px-8 py-3 rounded-md md:rounded-xl border-2 md:border-4 border-black
      border-b-4 border-l-4 md:border-b-8 md:border-l-8 font-lexend font-semibold ${className || ''}`}
    >
      {children}
    </Link>
  )
}

export default NavigationButton
