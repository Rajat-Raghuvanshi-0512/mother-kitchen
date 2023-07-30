import { useRef } from 'react'
import {
  ProductItemSm1,
  ProductItemSm2,
  ProductItemSm3,
  ProductItemSm4,
  ProductItemSm5,
  ProductItemSm6,
  ProductsHeading,
  product1,
  product2,
  product3,
  product4,
  product5,
  product6,
} from '../../assets'
import ProductCard from './ProductCard'
import ProductsInfiniteScroll from './ProductsInfiniteScroll'
import { Slider } from 'infinite-react-carousel'
const productsData = [
  {
    image: product1,
    price1: '₹',
    price2: '500',
    price3: '/Packet',
    quantity: '200gm',
    title: 'Atta Biscuit',
    desc: 'Goodness of whole wheat flour',
    btnText: 'Buy Now',
    color: 'bg-green-500',
    icon: ProductItemSm1,
  },
  {
    image: product2,
    price1: '₹',
    price2: '500',
    price3: '/Packet',
    quantity: '250gm',
    title: 'Honey and nuts rose brittle',
    desc: 'Wholesome goodness of nuts',
    btnText: 'Buy Now',
    color: 'bg-[#8A99E7]',
    icon: ProductItemSm2,
  },
  {
    image: product3,
    price1: '₹',
    price2: '500',
    price3: '/Packet',
    quantity: '350gm',
    title: 'Sanjivni haldi barfi',
    desc: 'Infused with the goodness of Haldi',
    btnText: 'Buy Now',
    color: 'bg-[#ED4E4E]',
    icon: ProductItemSm3,
  },
  {
    image: product4,
    price1: '₹',
    price2: '500',
    price3: '/Packet',
    quantity: '300gm',
    title: 'Protein powder balls',
    desc: 'Packed with punch of protein',
    btnText: 'Buy Now',
    color: 'bg-green-500',
    icon: ProductItemSm4,
  },
  {
    image: product5,
    price1: '₹',
    price2: '500',
    price3: '/Packet',
    quantity: '250gm',
    title: 'Peanut Health bar',
    desc: 'Every bite is a delightful crunch ',
    btnText: 'Buy Now',
    color: 'bg-[#8A99E7]',
    icon: ProductItemSm5,
  },
  {
    image: product6,
    price1: '₹',
    price2: '500',
    price3: '/Packet',
    quantity: '200gm',
    title: 'Finger Millets',
    desc: 'Blended with sweetness and crunch',
    btnText: 'Buy Now',
    color: 'bg-[#8A29a7]',
    icon: ProductItemSm6,
  },
]
const ProductsSm = () => {
  return (
    <div className="w-screen overflow-clip pb-14">
      <section className="py-5 md:py-24">
        <div className="flex items-center justify-center">
          <img loading="lazy" src={ProductsHeading} alt="heading" className="absolute -z-20 h-14" />
          <h3 className="text-center font-gluten text-xl font-bold text-red-base">
            &quot;<span className="text-[#553500]"> TOP-</span>rated by taste buds &quot;
          </h3>
        </div>
        <div className="relative pt-10">
          <div className="products w-full">
            <Slider centerMode={true} centerPadding={70} shift={70} arrows={false} dots={true}>
              {productsData.map((product) => (
                <ProductCard key={product.title} {...product} />
              ))}
            </Slider>
          </div>
        </div>
      </section>
      <ProductsInfiniteScroll />
    </div>
  )
}
const ProductsLg = ({ productsRef }) => {
  return (
    <>
      <section className="pb-24 pt-10 lg:mx-5 2xl:mx-36">
        <div className="flex items-center justify-center">
          <img loading="lazy" src={ProductsHeading} alt="heading" className="absolute -z-20 h-24" />
          <h3 className="text-center font-gluten text-3xl font-bold text-red-base">
            &quot;<span className="text-[#553500]"> TOP-</span>rated by taste buds &quot;
          </h3>
        </div>
        <div className="products relative overflow-x-scroll pt-20 lg:px-10" ref={productsRef}>
          <Slider slidesToShow={3} dots={true} arrows={true} initialSlide={1} centerPadding={0} centerMode={true}>
            {productsData.map((product) => (
              <ProductCard key={product.title} {...product} />
            ))}
          </Slider>
        </div>
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
