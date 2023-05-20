import { Animals } from '../../assets'

const ContactInfo = () => {
  return (
    <div className="relative mt-20 rounded-xl border-4 border-b-[12px] border-r-[12px] border-black bg-[#C40D4F] px-8 py-10 md:mt-60 md:px-20">
      <img src={Animals} alt="animals" className="absolute -top-[120%] hidden w-[90%] md:block" />
      <p className="text-bold text-center font-gluten text-sm text-white md:text-2xl">
        Hey there, hungry for some wholesome goodness? We&apos;re here to help satisfy your cravings and answer any
        questions you may have about our products. Whether you prefer to shoot us an email or give us a ring, our
        friendly team is always ready to serve up some delicious customer service.
      </p>
    </div>
  )
}

export default ContactInfo
