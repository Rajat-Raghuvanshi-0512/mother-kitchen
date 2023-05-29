import ContactDetailsCard from './ContactDetailsCard'
import { IoLocation } from 'react-icons/io5'
import { FaPhoneAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { Monkey } from '../../assets'

const contactItems = [
  {
    icon: <IoLocation className="h-8 w-8" />,
    title: 'Location',
    desc: 'Flat No. 104, First Floor, Golf Apartments, Sujan Singh Park, New Delhi - 110003 India',
    color: 'bg-[#20C64F]',
  },
  {
    icon: <MdEmail className="h-8 w-8" />,
    title: 'Email Us',
    desc: ' Contact@motherskitchen.co.in ',
    color: 'bg-[#0A70CE]',
  },
  {
    icon: <FaPhoneAlt className="h-8 w-8" />,
    title: 'Phone Number',
    desc: '+91 9310411544 / 70113 61501',
    color: 'bg-[#E08E00]',
  },
]

const ContactDetails = () => {
  return (
    <div className="relative mb-72 mt-20 grid grid-cols-1 gap-10 rounded-xl bg-[#FFEC9F] px-10 py-20 md:mb-60 md:grid-cols-3 md:gap-6 lg:gap-20">
      {contactItems.map((item) => {
        return <ContactDetailsCard key={item.title} {...item} />
      })}
      <img
        src={Monkey}
        alt="monkey"
        className="absolute left-[50%] top-[50%] -z-10 hidden w-[20rem] translate-x-[-60%] translate-y-[70%] md:block"
      />
      <img src={Monkey} alt="monkey" className="absolute bottom-0 right-0 translate-x-[20%] translate-y-[100%]" />
    </div>
  )
}

export default ContactDetails
