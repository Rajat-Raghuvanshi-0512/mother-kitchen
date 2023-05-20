const DetailCardSm = ({ even, image, heading, description }) => {
  if (!even) {
    return (
      <div className={`grid grid-cols-2 px-4`}>
        <div className="px-4">
          <h3 className="font-gluten text-lg font-bold text-red-900">{heading}</h3>
          <img src={image} alt="imaze" />
        </div>
        <div>
          <h3 className="pt-16 text-justify font-gluten text-[10px] font-semibold text-white">{description}</h3>
        </div>
      </div>
    )
  }
  return (
    <div className={`grid grid-cols-2 px-4`}>
      <div>
        <h3 className="pt-16 text-justify font-gluten text-[10px] font-semibold text-white">{description}</h3>
      </div>
      <div className="px-4">
        <h3 className="font-gluten text-lg font-bold text-red-900">{heading}</h3>
        <img src={image} alt="imaze" />
      </div>
    </div>
  )
}
const DetailCardMd = ({ even, image, heading, description }) => {
  if (even) {
    return (
      <div
        className={`relative grid w-[80%] grid-cols-2 rounded-2xl border-4 border-b-8 border-r-8 border-black bg-[#FFBF37] p-10 shadow-2xl before:absolute before:left-[0.8px] before:top-[0.8px] before:h-full before:w-full before:rounded-2xl before:rounded-tl-2xl before:border-[3px] before:border-white ${
          even && 'ml-auto'
        }`}
      >
        <div className="px-4">
          <h3 className="break-words font-gluten text-5xl font-bold text-red-900">{heading}</h3>
          <h3 className="pt-10 font-gluten text-xs font-semibold">{description}</h3>
        </div>
        <div>
          <img src={image} alt="imaze" />
        </div>
      </div>
    )
  }
  return (
    <div
      className={`relative grid w-[80%] grid-cols-2 rounded-2xl border-4 border-b-8 border-r-8 border-black bg-[#FFBF37] p-10 shadow-2xl before:absolute before:left-[0.8px] before:top-[0.8px] before:h-full before:w-full before:rounded-2xl before:rounded-tl-2xl before:border-[3px] before:border-white ${
        even && 'ml-auto'
      }`}
    >
      <div>
        <img src={image} alt="imaze" />
      </div>
      <div className="px-4">
        <h3 className="break-words font-gluten text-5xl font-bold text-red-900">{heading}</h3>
        <h3 className="pt-10 font-gluten text-xs font-semibold">{description}</h3>
      </div>
    </div>
  )
}
const DetailCardLg = ({ even, image, heading, description }) => {
  if (even) {
    return (
      <div
        className={`relative grid w-[80%] grid-cols-2 rounded-2xl border-4 border-b-8 border-r-8 border-black bg-[#FFBF37] p-10 shadow-2xl before:absolute before:left-[0.8px] before:top-[0.8px] before:h-full before:w-full before:rounded-2xl before:rounded-tl-2xl before:border-[3px] before:border-white ${
          even && 'ml-auto'
        }`}
      >
        <div className="px-4">
          <h3 className="font-gluten text-6xl font-bold text-red-900">{heading}</h3>
          <h3 className="pt-10 font-gluten font-semibold">{description}</h3>
        </div>
        <div>
          <img src={image} alt="imaze" />
        </div>
      </div>
    )
  }
  return (
    <div
      className={`relative grid w-[80%] grid-cols-2 rounded-2xl border-4 border-b-8 border-r-8 border-black bg-[#FFBF37] p-10 shadow-2xl before:absolute before:left-[0.8px] before:top-[0.8px] before:h-full before:w-full before:rounded-2xl before:rounded-tl-2xl before:border-[3px] before:border-white ${
        even && 'ml-auto'
      }`}
    >
      <div>
        <img src={image} alt="imaze" />
      </div>
      <div className="px-4">
        <h3 className="font-gluten text-6xl font-bold text-red-900">{heading}</h3>
        <h3 className="pt-10 font-gluten font-semibold">{description}</h3>
      </div>
    </div>
  )
}
const DetailCard = (props) => {
  return (
    <div>
      <div className="md:hidden">
        {/*Small Screen*/}
        <DetailCardSm {...props} />
      </div>

      <div className="hidden md:block lg:hidden">
        {/*Medium Screen*/}
        <DetailCardMd {...props} />
      </div>
      <div className="hidden lg:block">
        {/*Large Screen*/}
        <DetailCardLg {...props} />
      </div>
    </div>
  )
}

export default DetailCard
