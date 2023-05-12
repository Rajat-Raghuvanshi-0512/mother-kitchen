import ImageBox from '../custom/ImageBox'

const TeamInfoCard = ({ image, name, desc }) => {
  return (
    <div className="flex flex-col items-center text-white font-gluten">
      <ImageBox image={image} />
      <h5 className="md:text-2xl text-[9px] m-2 md:mt-4 capitalize text-center md:mb-5">{name}</h5>
      <p className="text-light text-center font-lexend text-[6px] md:text-xs">{desc}</p>
    </div>
  )
}

export default TeamInfoCard
