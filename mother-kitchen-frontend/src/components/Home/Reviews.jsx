import { useEffect, useRef } from 'react'
import { ReviewHeading, review1, review2, review3, review4, review5, review6, reviewBg } from '../../assets'
import ReviewCard from './ReviewCard'
import Slider from 'infinite-react-carousel'

const reviews1 = [
  {
    title: 'Thank you, Mothers Kitchen, for these wonderfully flavored gluten free treats',
    desc: 'The Cumin seed cookies and the pistachio cookies of Mothers Kitchen are the only biscuits my mother will have. She used to eat these back from our hometown bakery before I shifted to the city to pursue my career as an actor. Thank you, Mothers Kitchen, for these wonderfully flavored gluten free treats.',
    name: 'Kashish Vohra',
    profession: 'Bollywood Actor',
    bgColor: 'bg-[#446DBC]',
    image: review1,
  },
  {
    title: 'Sesame Seed Cookies are my favorite',
    desc: 'Sesame Seed Cookies are my favorite sweet but the only thought that comes to my mind when I’m making it is, whether it’s healthy or not. Sugar is fattening and being an actor, I need to both look and feel fifit. Mothers Kitchen’s gluten-free Sesame Seed Cookies are healthy and nutritious. Now I enjoy my favorite treat with nosecond thoughts.',
    name: 'Hilash Kumar',
    profession: 'Bollywood Actor',
    bgColor: 'bg-[#A66C42]',
    image: review2,
  },
  {
    title: 'The most nostalgic memory of my childhood',
    desc: 'The most nostalgic memory of my childhood is, eating Cardamom cookies. This biscuit has a flavor which is rare to find. I have tried it at various places but Mothers Kitchen is the only brand whose cardamom cookies have the same taste and are gluten free as well. Thank you for the authentic experience Mothers Kitchen.',
    name: 'Abhishek Kapoor',
    profession: 'Bollywood Actor',
    bgColor: 'bg-[#EF3D69]',
    image: review3,
  },
  {
    title: 'Thank you, Mothers Kitchen, for these wonderfully flavored gluten free treats',
    desc: 'The Cumin seed cookies and the pistachio cookies of Mothers Kitchen are the only biscuits my mother will have. She used to eat these back from our hometown bakery before I shifted to the city to pursue my career as an actor. Thank you, Mothers Kitchen, for these wonderfully flavored gluten free treats.',
    name: 'Abhishek Kapoor',
    profession: 'Bollywood Actor',
    bgColor: 'bg-[#6FAD94]',
    image: review3,
  },
  {
    title: 'The most nostalgic memory of my childhood',
    desc: 'The most nostalgic memory of my childhood is, eating Cardamom cookies. This biscuit has a flavor which is rare to find. I have tried it at various places but Mothers Kitchen is the only brand whose cardamom cookies have the same taste and are gluten free as well. Thank you for the authentic experience Mothers Kitchen.',
    name: 'Abhishek Kapoor',
    profession: 'Bollywood Actor',
    bgColor: 'bg-[#96BC44]',
    image: review3,
  },
]
const reviews2 = [
  {
    title: 'I love these little taste bombs',
    desc: 'When I hear the word “street food”, my favorite Gol gappas is all I can think about. I love these little taste bombs but due to my shoots I get no time to go out and enjoy them. But now I can eat them anytime because of Mothers Kitchen Gol Gappas and Masala Mix.',
    name: 'Purvi Mundada',
    profession: 'Bollywood Actor',
    bgColor: 'bg-[#B1308D]',
    image: review4,
  },
  {
    title: 'They are delicious, flavoured and made from unadulterated ingredients',
    desc: 'I get very busy with my shoot schedules and other events. By the time I reach home I am too exhausted to prepare food, so I normally resort to eating readymade noodles. Lately, I’ve heard so many rumors about the contents of readymade Health bites that I had to stop eating them recommendation, I tried Mothers Kichen’s Gluten-free Gachak – health bites.',
    name: 'Nikkesha Rangwala',
    profession: 'Bollywood Actor',
    bgColor: 'bg-[#EFD33D]',
    image: review5,
  },
  {
    title: 'It’s healthy, nutritious, and full of flavors',
    desc: 'I am a fifitness enthusiast, and my day must start with healthy food. After trying multiple brands and being utterly disappointed, I came across Mothers Kitchen Gluten-free flflaxseed Cookies. It’s healthy, nutritious, and full of flflavors. Surely the best in the market, it doesn’t fail to surprise.',
    name: 'Karishma Sharma',
    profession: 'Bollywood Actor',
    bgColor: 'bg-[#9F6FC5]',
    image: review6,
  },
  {
    title: 'I love these little taste bombs',
    desc: 'When I hear the word “street food”, my favorite Gol gappas is all I can think about. I love these little taste bombs but due to my shoots I get no time to go out and enjoy them. But now I can eat them anytime because of Mothers Kitchen Gol Gappas and Masala Mix.',
    name: 'Purvi Mundada',
    profession: 'Bollywood Actor',
    bgColor: 'bg-[#60CB84]',
    image: review6,
  },
  {
    title: 'The most nostalgic memory of my childhood',
    desc: 'The most nostalgic memory of my childhood is, eating Cardamom cookies. This biscuit has a flavor which is rare to find. I have tried it at various places but Mothers Kitchen is the only brand whose cardamom cookies have the same taste and are gluten free as well. Thank you for the authentic experience Mothers Kitchen.',
    name: 'Abhishek Kapoor',
    profession: 'Bollywood Actor',
    bgColor: 'bg-[#E45F5F]',
    image: review6,
  },
]

const ReviewsSm = () => {
  return (
    <section>
      <div className="flex items-center justify-center">
        <img loading="lazy" src={ReviewHeading} alt="ax" className="w-[90%] xl:w-[70%]" />
      </div>
      <div className="relative">
        <img
          loading="lazy"
          src={reviewBg}
          alt="reviewbg"
          className="absolute top-20 -z-20 h-[80vh] scale-125 object-cover md:h-[200vh]"
        />
      </div>
      <div className=" mt-10 md:mt-0">
        <Slider centerMode={true} centerPadding={70} shift={70} arrows={false} dots={true}>
          {reviews1.map((review, idx) => (
            <ReviewCard {...review} key={review.name + idx} />
          ))}
        </Slider>
      </div>
    </section>
  )
}
const ReviewsLg = () => {
  const upperReviews = useRef()
  const lowerReviews = useRef()

  const getScrollOffset = () => {
    upperReviews.current.style.transform = `translateX(${window.pageYOffset.toFixed(1) / 5}px)`
    lowerReviews.current.style.transform = `translateX(-${window.pageYOffset.toFixed(1) / 5}px)`
    upperReviews.current.style.transition = ' all 0.4s'
    lowerReviews.current.style.transition = ' all 0.4s'
    console.log(lowerReviews.current.classList)
  }
  useEffect(() => {
    window.addEventListener('scroll', getScrollOffset, { passive: true })
    return () => window.removeEventListener('scroll', getScrollOffset)
  }, [])
  return (
    <section>
      <div className=" flex items-center justify-center">
        <img loading="lazy" src={ReviewHeading} alt="ax" className="w-[90%] xl:w-[70%]" />
      </div>
      <div className="relative">
        <img
          loading="lazy"
          src={reviewBg}
          alt="reviewbg"
          className="absolute top-20 -z-20 h-[80vh] scale-125 object-cover md:h-[200vh]"
        />
      </div>
      <div className="relative mt-10 md:mt-0">
        <div
          className={`relative -left-[80vw] flex w-max select-none gap-10 overflow-hidden px-10 pb-20 md:pt-28 [&>*:nth-child(odd)]:translate-y-20`}
          ref={upperReviews}
        >
          {reviews1.map((review, idx) => (
            <ReviewCard {...review} key={review.name + idx} />
          ))}
        </div>
        <div
          className="relative -left-[-40vw] hidden w-max select-none gap-5 overflow-hidden px-10 pb-20 pt-5 md:flex md:gap-10 [&>*:nth-child(odd)]:translate-y-20 "
          ref={lowerReviews}
        >
          {reviews2.map((review, idx) => (
            <ReviewCard {...review} key={review.name + idx} />
          ))}
        </div>
      </div>
    </section>
  )
}

const Reviews = () => {
  return (
    <>
      <div className="md:hidden">
        <ReviewsSm />
      </div>
      <div className="hidden md:block">
        <ReviewsLg />
      </div>
    </>
  )
}
export default Reviews
