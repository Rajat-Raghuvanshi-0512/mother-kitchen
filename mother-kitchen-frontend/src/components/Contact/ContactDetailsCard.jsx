const ContactDetailsCard = ({ color, icon, title, desc }) => {
  return (
    <div
      className={`flex flex-col justify-evenly items-center py-3 rounded-xl text-white px-10 border-4 border-b-8 border-r-8 border-black ${color}`}
    >
      <div className="w-16 h-16 rounded-full border-4 border-white flex justify-center items-center">{icon}</div>
      <h3 className="font-bold font-gluten py-2 text-2xl">{title}</h3>
      <p className="text-center font-lexend break-words w-full text-sm font-semibold leading-4">{desc}</p>
    </div>
  )
}

export default ContactDetailsCard
