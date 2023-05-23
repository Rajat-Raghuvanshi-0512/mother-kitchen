import ImageBox from '../custom/ImageBox'

const TeamInfoCard = ({ image, name, desc }) => {
  return (
    <div className="flex flex-col items-center font-gluten text-white">
      <ImageBox image={image} />
      <h5 className="m-2 text-center text-[9px] capitalize md:mb-5 md:mt-4 md:text-2xl">{name}</h5>
      <p className="text-light text-center font-lexend text-[5px] leading-[7px] md:text-xs md:leading-5">{desc}</p>
    </div>
  )
}

export default TeamInfoCard
