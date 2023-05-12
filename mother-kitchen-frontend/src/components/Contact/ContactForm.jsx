import { Bird, ContactFormImg } from '../../assets'
import { useModal } from '../../custom-hooks'
import ThankYou from '../custom/ThankYou'
const ContactForm = () => {
  const { isOpen, openModal, closeModal } = useModal()
  return (
    <div className="bg-[#FEF5CE] px-7 pt-10 md:pt-20 pb-10 rounded-3xl mt-20 relative border-4 border-b-[12px] border-r-[12px] border-black">
      <img src={Bird} alt="bird" className="absolute w-40 -top-32 -right-10 hidden md:block" />
      <div className="grid grid-cols-1 md:grid-cols-2 font-lexend ">
        <div className="md:hidden pb-10">
          <img src={ContactFormImg} alt="img" className="w-full" />
        </div>
        <div className="flex flex-col gap-5">
          <input
            type="text"
            className="bg-[#976120] w-full outline-none text-white placeholder:text-white p-2 py-3  rounded-xl border-2 border-black border-r-4 border-b-4"
            placeholder="Your Name"
          />
          <input
            type="text"
            className="bg-[#976120] w-full outline-none text-white placeholder:text-white p-2 py-3 rounded-xl border-2 border-black border-r-4 border-b-4"
            placeholder="Your Name"
          />
          <input
            type="text"
            className="bg-[#976120] w-full outline-none text-white placeholder:text-white p-2 py-3 rounded-xl border-2 border-black border-r-4 border-b-4"
            placeholder="Your Name"
          />
          <textarea
            name="contact"
            id="contact"
            cols="50"
            rows="10"
            className="bg-[#976120] w-full outline-none text-white placeholder:text-white p-2 rounded-xl border-2 border-black border-r-4 border-b-4 mt-10 resize-none"
            placeholder="Write your message"
          ></textarea>
        </div>
        <div className="relative hidden md:block">
          <img src={ContactFormImg} alt="img" />
          <button
            type="button"
            className="absolute right-6 bottom-10 bg-[#C40D4F] px-10 py-3 rounded-full border-b-4 border-black text-white font-semibold "
            onClick={openModal}
          >
            Sent
          </button>
        </div>
      </div>
      <ThankYou isOpen={isOpen} onClose={closeModal} />
    </div>
  )
}

export default ContactForm
