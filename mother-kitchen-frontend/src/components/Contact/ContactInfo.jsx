import { Animals } from '../../assets'

const ContactInfo = () => {
  return (
    <div className="bg-[#C40D4F] relative px-8 md:px-20 py-10 border-4 border-b-[12px] border-r-[12px] border-black rounded-xl mt-20 md:mt-60">
      <img src={Animals} alt="animals" className="absolute -top-[120%] w-[90%] hidden md:block" />
      <p className="font-gluten text-sm md:text-2xl text-center text-white text-bold">
        Hey there, hungry for some wholesome goodness? We&apos;re here to help satisfy your cravings and answer any
        questions you may have about our products. Whether you prefer to shoot us an email or give us a ring, our
        friendly team is always ready to serve up some delicious customer service.
      </p>
    </div>
  )
}

export default ContactInfo
