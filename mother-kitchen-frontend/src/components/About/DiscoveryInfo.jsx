import { InfoImg1, InfoImg2, InfoImg3, NumberBg } from '../../assets'
import DetailCard from './DetailCard'

const details = [
  {
    image: InfoImg1,
    heading: 'HOW OUR IDEA ORIGINATED',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ad praesentium quibusdam hic magnam labore, numquam dolorum totam consequuntur, placeat vel quas provident, quos magni impedit fugit molestias tenetur quaerat?',
  },
  {
    image: InfoImg2,
    heading: 'HOW IT EXPANDED',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore unde ipsum reiciendis repudiandae omnis qui placeat assumenda iusto natus quidem adipisci sequi accusamus officiis consequatur, a officia! Voluptatum cupiditate quasi dicta fugit omnis nam impedit accusamus inventore veniam corporis eveniet ipsum vero repellat, laboriosam delectus autem aut quos perferendis aliquid!',
  },
  {
    image: InfoImg3,
    heading: 'HOW LANNDED TO INDIA',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ad praesentium quibusdam hic magnam labore, numquam dolorum totam consequuntur, placeat vel quas provident, quos magni impedit fugit molestias tenetur quaerat?',
  },
]

const DiscoveryInfo = () => {
  return (
    <div className="relative mt-20 flex flex-col gap-10 md:mt-52 md:gap-20 md:px-10 lg:mt-40 lg:gap-56 lg:px-20">
      <img src={NumberBg} alt="number" className="absolute top-[20rem] -z-20 hidden md:block" />
      {details.map((detail, idx) => {
        return <DetailCard key={detail.heading} {...detail} even={(idx + 1) % 2 === 0} />
      })}
    </div>
  )
}

export default DiscoveryInfo
