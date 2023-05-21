import { LastSection } from '../components'
import { ContactDetails, ContactForm, ContactInfo, ContactLastPhone } from '../components/Contact'
import NavigationIndicator from '../components/NavigationIndicator'

const Contact = () => {
  return (
    <div className="m-5 md:mt-10 md:px-10 lg:mt-16 lg:px-20 2xl:mx-36">
      <div className="flex items-end justify-between">
        <div className="w-full rounded-3xl bg-[#FABF5F] p-3 text-center md:hidden">
          <h2 className="font-gluten text-2xl font-bold text-[#5B3202]">JOIN US TO ENTER THE KITCHEN</h2>
          <p className="text-white">Don’t be shy - just drop us a line</p>
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
      <LastSection />
    </div>
  )
}

export default Contact
