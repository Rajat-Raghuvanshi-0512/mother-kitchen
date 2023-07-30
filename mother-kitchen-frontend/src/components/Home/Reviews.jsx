import { useEffect, useRef } from 'react'
import {
  ReviewHeading,
  review1,
  review2,
  review3,
  review4,
  review5,
  review6,
  review7,
  review8,
  review9,
  reviewBg,
} from '../../assets'
import ReviewCard from './ReviewCard'
import Slider from 'infinite-react-carousel'

const reviews1 = [
  {
    title: 'Thank you, Mothers Kitchen, for this delicious chana burfi',
    desc: 'Dear Shivani As I sit here enjoying your chana burﬁ that I just received, I realized I have been extremely selﬁsh in not reaching out to you earlier. Just know I received your earlier letters. I am simply overwhelmed and touched by your conﬁdence in me. Your story moved me to tears. Your determination to power ahead is inspiring. Please let me know how I can help you.The world needs more people like you.',
    name: 'Indra Nooyi',
    profession: 'Former Pepsico CEO',
    bgColor: 'bg-[#446DBC]',
    image: review1,
  },
  {
    title: 'Sesame Seed Cookies are my favorite',
    desc: 'Sesame Seed Cookies are my favorite sweet but the only thought that comes to my mind when I’m making it is, whether it’s healthy or not. Sugar is fattening and being an actor, I need to both look and feel fifit. Mothers Kitchen’s gluten-free Sesame Seed Cookies are healthy and nutritious. Now I enjoy my favorite treat with nosecond thoughts.',
    name: 'Abhilash Kumar',
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
    desc: 'As importants itis to have breakfast, it is equally important to eat the right food. Products from Mothers Kitchen are gluten free, low in calorie yet high in energy. It keeps you fuller for a long time which helps in warding off hunger pangs and boost concentration levels.',
    name: 'Dr. Upasana Arora',
    profession: 'Director-YSSH',
    bgColor: 'bg-[#6FAD94]',
    image: review4,
  },
  {
    title: 'Thank you, Mothers Kitchen, for this delicious chana burfi',
    desc: "I received a Mothers Kitchen Gift Pack full of cookies and sweets and was hesitant to try at ﬁrst for fear of increasing my waist-line. Mothers Kitchen's products remind me of ﬂavours and fragrances I experienced in my childhood with a curious fusion that we see in today's best restaurants.",
    name: 'Anil Bahuman',
    profession: 'Vice President, Jio Platforms Ltd',
    bgColor: 'bg-[#446D3C]',
    image: review8,
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
    desc: 'A stressful lifestyle coupled with pollution and poor eating habits is very harmful for the heart. The nutritious vegan products provided by Mothers Kitchen are both lactose and gluten-free which is why we at the National Heart Institute highly recommend their products to our patients.',
    name: 'Dr. O.P. Yadava',
    profession: 'Cardiac Surgeon,',
    bgColor: 'bg-[#60CB84]',
    image: review7,
  },
  {
    title: 'Best cookies I have ever eaten',
    desc: 'When I heard gluten-free almond cookies exists, I didn’t believe it. I thought the taste and texture will not be the same, but when I tasted the Mothers Kitchen cookies I encountered a new world of gluten-free happiness. Now these almond cookies are my all-time favorite.',
    name: 'Zain Imam',
    profession: 'Bollywood Actor',
    bgColor: 'bg-[#E45F5F]',
    image: review9,
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
  }
  useEffect(() => {
    window.addEventListener('scroll', getScrollOffset, { passive: true })
    return () => window.removeEventListener('scroll', getScrollOffset, { passive: true })
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
          className={`relative -left-[80vw] flex w-max select-none gap-10 overflow-hidden px-10 pb-20 md:pt-28 xl:-left-[65vw] 2xl:-left-[50vw] [&>*:nth-child(odd)]:translate-y-20`}
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
