import ImageBox from '../custom/ImageBox'

const TeamInfoCard = ({ image, name, desc }) => {
  return (
    <div className="flex flex-col items-center text-white font-gluten">
      <ImageBox image={image} />
      <h5 className="text-2xl mt-4 capitalize text-center mb-5">{name}</h5>
      <p className="text-light text-center font-lexend text-xs">{desc}</p>
    </div>
  )
}

export default TeamInfoCard
