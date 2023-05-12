import { LastSection } from '../components'
import { ContactDetails, ContactForm, ContactInfo } from '../components/Contact'
import NavigationIndicator from '../components/NavigationIndicator'

const Contact = () => {
  return (
    <div className="m-5 md:px-20 md:mt-20">
      <div className="flex justify-between items-end">
        <div className="md:hidden bg-[#FABF5F] rounded-3xl w-full text-center p-3">
          <h2 className="text-[#5B3202] font-gluten text-2xl font-bold">JOIN US TO ENTER THE KITCHEN</h2>
          <p className="text-white">Don’t be shy - just drop us a line</p>
        </div>
        <NavigationIndicator />
        <div className="text-[#5B360B] font-bold font-gluten text-4xl hidden md:block">
          Don&apos;t be shy - Just drop us a line
        </div>
      </div>
      <ContactForm />
      <ContactInfo />
      <ContactDetails />
      <LastSection />
    </div>
  )
}

export default Contact
