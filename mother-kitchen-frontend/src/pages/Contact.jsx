import { LastSection } from '../components'
import { ContactDetails, ContactForm, ContactInfo, ContactLastPhone } from '../components/Contact'
import NavigationIndicator from '../components/NavigationIndicator'

const Contact = () => {
  return (
    <div className="m-5 md:mt-20 md:px-20 2xl:mx-56">
      <div className="flex items-end justify-between">
        <div className="w-full rounded-3xl bg-[#FABF5F] p-3 text-center md:hidden">
          <h2 className="font-gluten text-2xl font-bold text-[#5B3202]">JOIN US TO ENTER THE KITCHEN</h2>
          <p className="text-white">Don’t be shy - just drop us a line</p>
        </div>
        <NavigationIndicator />
        <div className="hidden font-gluten text-4xl font-bold text-[#5B360B] md:block">
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
