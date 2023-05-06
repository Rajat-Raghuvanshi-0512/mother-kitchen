const DetailCard = ({ even, image, heading, description }) => {
  if (even) {
    return (
      <div
        className={`grid grid-cols-2 bg-[#FFBF37] border-4 relative border-black before:border-white before:border-[3px] before:absolute before:w-full before:h-full before:rounded-2xl before:rounded-tl-2xl border-b-8 border-r-8 rounded-2xl before:top-[0.8px] before:left-[0.8px] shadow-2xl p-10 w-[80%] ${
          even && 'ml-auto'
        }`}
      >
        <div className="px-4">
          <h3 className="font-gluten text-7xl font-bold text-red-900">{heading}</h3>
          <h3 className="font-gluten font-semibold pt-10">{description}</h3>
        </div>
        <div>
          <img src={image} alt="imaze" />
        </div>
      </div>
    )
  }
  return (
    <div
      className={`grid grid-cols-2 bg-[#FFBF37] border-4 relative border-black before:border-white before:border-[3px] before:absolute before:w-full before:h-full before:rounded-2xl before:rounded-tl-2xl border-b-8 border-r-8 rounded-2xl before:top-[0.8px] before:left-[0.8px] shadow-2xl p-10 w-[80%] ${
        even && 'ml-auto'
      }`}
    >
      <div>
        <img src={image} alt="imaze" />
      </div>
      <div className="px-4">
        <h3 className="font-gluten text-7xl font-bold text-red-900">{heading}</h3>
        <h3 className="font-gluten font-semibold pt-10">{description}</h3>
      </div>
    </div>
  )
}

export default DetailCard
