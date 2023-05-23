import { useEffect, useRef, useState } from 'react'
import {
  Hazelnut,
  ProductItemSm1,
  ProductItemSm2,
  ProductItemSm3,
  ProductsHeading,
  product1,
  product2,
  product3,
} from '../../assets'
import ProductCard from './ProductCard'
import ProductsInfiniteScroll from './ProductsInfiniteScroll'
import { useScroll, motion, useTransform } from 'framer-motion'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'
import { Carousel } from 'react-responsive-carousel'

const productsData = [
  {
    image: product1,
    price: '$6.0/Sachet',
    quantity: '250gm',
    title: 'Green Mint Chutney',
    desc: 'Instant Preseasoned Green mint chutney',
    btnText: 'Buy Now',
    color: 'bg-green-500',
    icon: ProductItemSm1,
  },
  {
    image: product2,
    price: '$6.0/Sachet',
    quantity: '250gm',
    title: 'Hazelnut Cocoa Spread',
    desc: 'Loaded with the goodness of hazelnuts',
    btnText: 'Buy Now',
    color: 'bg-[#8A99E7]',
    icon: ProductItemSm2,
  },
  {
    image: product3,
    price: '$6.0/Sachet',
    quantity: '250gm',
    title: 'Turmeric Almond & Saffron Booster',
    desc: 'Instant Green mint chutney',
    btnText: 'Buy Now',
    color: 'bg-[#ED4E4E]',
    icon: ProductItemSm3,
  },
  {
    image: Hazelnut,
    price: '$6.0/Sachet',
    quantity: '250gm',
    title: 'Hazelnut Cocoa Sread',
    desc: 'Instant Preseasoned Green mint chutney',
    btnText: 'Buy Now',
    color: 'bg-green-500',
    icon: ProductItemSm1,
  },
  {
    image: Hazelnut,
    price: '$6.0/Sachet',
    quantity: '250gm',
    title: 'Hazelnut Cocoa pread',
    desc: 'Instant Preseasoned Green mint chutney',
    btnText: 'Buy Now',
    color: 'bg-[#8A99E7]',
    icon: ProductItemSm2,
  },
  {
    image: Hazelnut,
    price: '$6.0/Sachet',
    quantity: '250gm',
    title: 'Hazelnut Cocoa ead',
    desc: 'Instant Preseasoned Green mint chutney',
    btnText: 'Buy Now',
    color: 'bg-[#8A99E7]',
    icon: ProductItemSm2,
  },
]
const renderCustomThumbs = () => {
  const thumbList = Array.from(Array(productsData.length)).map((item) => (
    <div key={item} className=" productsthumb h-[6px] w-3 rounded-full bg-white/40"></div>
  ))

  return thumbList
}
const ProductsSm = () => {
  return (
    <div className="pb-14">
      <section className="py-5 md:py-24">
        <div className="flex items-center justify-center">
          <img src={ProductsHeading} alt="heading" className="absolute -z-20 h-14" />
          <h3 className="text-center font-gluten text-xl font-bold text-red-base">
            &quot;<span className="text-[#553500]"> TOP-</span>rated by taste buds &quot;
          </h3>
        </div>
        <div className="relative pt-10">
          <div className="w-full">
            <Carousel
              autoFocus
              centerMode={true}
              centerSlidePercentage={70}
              selectedItem={1}
              showIndicators={false}
              showStatusBar={false}
              showStatus={false}
              showArrows={false}
              renderThumbs={renderCustomThumbs}
            >
              {productsData.map((product) => (
                <ProductCard key={product.title} {...product} />
              ))}
            </Carousel>
          </div>
        </div>
      </section>
      <ProductsInfiniteScroll />
    </div>
  )
}
const ProductsLg = ({ productsRef, handleLeftClick, handleRightClick }) => {
  const { scrollXProgress } = useScroll({
    container: productsRef,
  })
  const [currentPrecent, setCurrentPercent] = useState(null)
  const XRange = useTransform(scrollXProgress, [0, 1], [0, 90])
  useEffect(() => {
    XRange.on('change', () => {
      setCurrentPercent(Math.trunc(XRange.current))
    })
  }, [XRange])

  return (
    <>
      <section className="pb-24 pt-10 2xl:mx-36">
        <div className="flex items-center justify-center">
          <img src={ProductsHeading} alt="heading" className="absolute -z-20 h-24" />
          <h3 className="text-center font-gluten text-3xl font-bold text-red-base">
            &quot;<span className="text-[#553500]"> TOP-</span>rated by taste buds &quot;
          </h3>
        </div>
        <div className="relative pt-20">
          <div className="px-20">
            <motion.div className="flex gap-16 overflow-x-auto" ref={productsRef}>
              {productsData.map((product) => (
                <ProductCard key={product.title} {...product} />
              ))}
            </motion.div>
          </div>
          {/* Left Arrow */}
          <div className="absolute left-5 top-[50%] -translate-x-0 cursor-pointer rounded-full p-2 text-2xl text-white group-hover:block">
            <div className="-left-5 z-50 text-black" onClick={handleLeftClick}>
              <BiChevronLeft className="h-10 w-10 lg:h-14 lg:w-14" />
            </div>
          </div>
          {/* Right Arrow */}
          <div className="absolute right-5 top-[50%] -translate-x-0 cursor-pointer rounded-full p-2 text-2xl text-white  group-hover:block 2xl:-right-5">
            <div className="z-50 text-black" onClick={handleRightClick}>
              <BiChevronRight className="h-10 w-10 lg:h-14 lg:w-14" />
            </div>
          </div>
        </div>
        <motion.div className="progress-container relative mx-auto h-[6px] w-[10vw] overflow-hidden rounded-full bg-white/30">
          <motion.div
            className="absolute z-50 h-[6px] w-4 rounded-full bg-red-base"
            style={{ left: `${currentPrecent}%` }}
            id="myBar"
          ></motion.div>
        </motion.div>
      </section>

      <ProductsInfiniteScroll />
    </>
  )
}

const Products = () => {
  const productsRef = useRef()
  const handleLeftClick = () => {
    productsRef.current.scrollBy(-380, 0)
  }
  const handleRightClick = () => {
    productsRef.current.scrollBy(380, 0)
  }

  return (
    <>
      <div className="md:hidden ">
        {/*Small Screen*/}
        <ProductsSm productsRef={productsRef} />
      </div>

      <div className="hidden md:block">
        {/*Large Screen*/}
        <ProductsLg handleLeftClick={handleLeftClick} handleRightClick={handleRightClick} productsRef={productsRef} />
      </div>
    </>
  )
}

export default Products
