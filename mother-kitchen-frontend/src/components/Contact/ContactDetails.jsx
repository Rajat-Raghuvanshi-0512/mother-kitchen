import ContactDetailsCard from './ContactDetailsCard'
import { IoLocation } from 'react-icons/io5'
import { FaPhoneAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { Monkey } from '../../assets'

const contactItems = [
  {
    icon: <IoLocation className="w-8 h-8" />,
    title: 'Location',
    desc: 'Flat No. 104, First Floor, Golf Apartments, Sujan Singh Park, New Delhi - 110003 India',
    color: 'bg-[#20C64F]',
  },
  {
    icon: <MdEmail className="w-8 h-8" />,
    title: 'Email Us',
    desc: ' Contact@motherskitchen.co.in ',
    color: 'bg-[#0A70CE]',
  },
  {
    icon: <FaPhoneAlt className="w-8 h-8" />,
    title: 'Phone Number',
    desc: '+91 9310411544 +91 70113 61501',
    color: 'bg-[#E08E00]',
  },
]

const ContactDetails = () => {
  return (
    <div className="bg-[#FFEC9F] mt-20 rounded-xl grid grid-cols-1 md:grid-cols-3 gap-20 px-10 py-20 relative md:mb-60">
      {contactItems.map((item) => {
        return <ContactDetailsCard key={item.title} {...item} />
      })}
      <img src={Monkey} alt="monkey" className="absolute w-[20rem] -bottom-[16.5rem] right-[30rem] -z-10" />
    </div>
  )
}

export default ContactDetails
