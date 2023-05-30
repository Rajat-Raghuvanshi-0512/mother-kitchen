import { Bird, SmallCookie } from '../assets'
import { LastSection } from '../components'
import { ContactDetails, ContactForm, ContactInfo, ContactLastPhone } from '../components/Contact'
import NavigationIndicator from '../components/NavigationIndicator'

const Contact = () => {
  return (
    <div className="m-5 md:mt-10 md:px-10 lg:mt-16 lg:px-20 2xl:mx-36">
      <div className="flex items-end justify-between">
        <div className="relative w-full rounded-3xl bg-[#FABF5F] p-3 pb-20 text-center md:hidden">
          <span className="flex flex-wrap justify-center font-gluten text-2xl font-bold text-[#5B3202]">
            JOIN US T
            <img src={SmallCookie} alt="chotu" className=" h-7 w-7 object-contain" />
            &nbsp;
            <span>ENTER&nbsp;</span> <span>THE&nbsp;</span> <span>KITCHEN</span>
          </span>
          <p className="font-gluten text-white">Don’t be shy - just drop us a line</p>
          <img src={Bird} alt="bird" className="absolute -bottom-32 left-[55%] w-44 translate-x-[-50%] -scale-x-100" />
        </div>
        <NavigationIndicator />
        <div className="hidden font-gluten font-bold text-[#5B360B] md:block lg:text-3xl">
          Don&apos;t be shy - Just drop us a line
        </div>
      </div>
      <ContactForm />
      <ContactInfo />
      <ContactDetails />
      <ContactLastPhone />
      <LastSection elements={['Home', 'About', 'Comic']} />
    </div>
  )
}

export default Contact
