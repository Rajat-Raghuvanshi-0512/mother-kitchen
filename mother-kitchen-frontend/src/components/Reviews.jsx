import { ReviewHeading } from '../assets'
import ReviewCard from './ReviewCard'

const reviews = [
  {
    title: 'The most nostalgic memory of my childhood',
    desc: 'The most nostalgic memory of my childhood is, eating Cardamom cookies. This biscuit has a flavor which is rare to find. I have tried it at various places but Mothers Kitchen is the only brand whose cardamom cookies have the same taste and are gluten free as well. Thank you for the authentic experience Mothers Kitchen.',
    name: 'Abhishek Kapoor',
    profession: 'Bollywood Actor',
    bgColor: 'bg-[#A66C42]',
  },
  {
    title: 'The most nostalgic memory of my childhood',
    desc: 'The most nostalgic memory of my childhood is, eating Cardamom cookies. This biscuit has a flavor which is rare to find. I have tried it at various places but Mothers Kitchen is the only brand whose cardamom cookies have the same taste and are gluten free as well. Thank you for the authentic experience Mothers Kitchen.',
    name: 'Abhishek Kapoor',
    profession: 'Bollywood Actor',
    bgColor: 'bg-[#EF3D69]',
  },
  {
    title: 'The most nostalgic memory of my childhood',
    desc: 'The most nostalgic memory of my childhood is, eating Cardamom cookies. This biscuit has a flavor which is rare to find. I have tried it at various places but Mothers Kitchen is the only brand whose cardamom cookies have the same taste and are gluten free as well. Thank you for the authentic experience Mothers Kitchen.',
    name: 'Abhishek Kapoor',
    profession: 'Bollywood Actor',
    bgColor: 'bg-[#6FAD94]',
  },
  {
    title: 'The most nostalgic memory of my childhood',
    desc: 'The most nostalgic memory of my childhood is, eating Cardamom cookies. This biscuit has a flavor which is rare to find. I have tried it at various places but Mothers Kitchen is the only brand whose cardamom cookies have the same taste and are gluten free as well. Thank you for the authentic experience Mothers Kitchen.',
    name: 'Abhishek Kapoor',
    profession: 'Bollywood Actor',
    bgColor: 'bg-[#96BC44]',
  },
  {
    title: 'The most nostalgic memory of my childhood',
    desc: 'The most nostalgic memory of my childhood is, eating Cardamom cookies. This biscuit has a flavor which is rare to find. I have tried it at various places but Mothers Kitchen is the only brand whose cardamom cookies have the same taste and are gluten free as well. Thank you for the authentic experience Mothers Kitchen.',
    name: 'Abhishek Kapoor',
    profession: 'Bollywood Actor',
    bgColor: 'bg-[#A66C42]',
  },
  {
    title: 'The most nostalgic memory of my childhood',
    desc: 'The most nostalgic memory of my childhood is, eating Cardamom cookies. This biscuit has a flavor which is rare to find. I have tried it at various places but Mothers Kitchen is the only brand whose cardamom cookies have the same taste and are gluten free as well. Thank you for the authentic experience Mothers Kitchen.',
    name: 'Abhishek Kapoor',
    profession: 'Bollywood Actor',
    bgColor: 'bg-[#EF3D69]',
  },
  {
    title: 'The most nostalgic memory of my childhood',
    desc: 'The most nostalgic memory of my childhood is, eating Cardamom cookies. This biscuit has a flavor which is rare to find. I have tried it at various places but Mothers Kitchen is the only brand whose cardamom cookies have the same taste and are gluten free as well. Thank you for the authentic experience Mothers Kitchen.',
    name: 'Abhishek Kapoor',
    profession: 'Bollywood Actor',
    bgColor: 'bg-[#6FAD94]',
  },
  {
    title: 'The most nostalgic memory of my childhood',
    desc: 'The most nostalgic memory of my childhood is, eating Cardamom cookies. This biscuit has a flavor which is rare to find. I have tried it at various places but Mothers Kitchen is the only brand whose cardamom cookies have the same taste and are gluten free as well. Thank you for the authentic experience Mothers Kitchen.',
    name: 'Abhishek Kapoor',
    profession: 'Bollywood Actor',
    bgColor: 'bg-[#96BC44]',
  },
]

const Reviews = () => {
  return (
    <section>
      <div className=" flex items-center justify-center">
        <img src={ReviewHeading} alt="ax" className="w-[90%]" />
      </div>
      <div className="relative overflow-x-auto">
        <div className="md:pt-28 pb-20 [&>*:nth-child(odd)]:translate-y-20 flex w-max gap-10 overflow-hidden select-none -left-10">
          {reviews.map((review, idx) => (
            <ReviewCard {...review} key={review.name + idx} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reviews
