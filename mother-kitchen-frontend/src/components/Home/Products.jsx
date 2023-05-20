import { useRef } from 'react'
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
    desc: 'Instant Preseasoned Green mint chutney',
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
]
const ProductsSm = () => {
  return (
    <>
      <section className="py-10 md:py-24">
        <div className="flex items-center justify-center">
          <img src={ProductsHeading} alt="heading" className="absolute -z-20 h-14" />
          <h3 className="text-center font-gluten text-xl font-bold text-red-base">
            &quot;<span className="text-[#553500]"> TOP-</span>rated by taste buds &quot;
          </h3>
        </div>
        <div className="relative ml-3 pt-20">
          <div className="flex gap-5 overflow-x-auto">
            {productsData.map((product) => (
              <ProductCard key={product.title} {...product} />
            ))}
          </div>
        </div>
      </section>

      <section className=" w-screen py-10">
        <ProductsInfiniteScroll />
      </section>
    </>
  )
}
const ProductsLg = ({ productsRef, handleLeftClick, handleRightClick }) => {
  return (
    <>
      <section className="pb-24 pt-10 2xl:mx-52">
        <div className="flex items-center justify-center">
          <img src={ProductsHeading} alt="heading" className="absolute -z-20 h-24" />
          <h3 className="text-center font-gluten text-3xl font-bold text-red-base">
            &quot;<span className="text-[#553500]"> TOP-</span>rated by taste buds &quot;
          </h3>
        </div>
        <div className="relative pt-20">
          <div className="px-20">
            <div className="flex gap-14 overflow-x-auto overflow-y-clip" ref={productsRef}>
              {productsData.map((product) => (
                <ProductCard key={product.title} {...product} />
              ))}
              {/* Left Arrow */}
            </div>
          </div>
          <div className="absolute left-5 top-[50%] -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full p-2 text-2xl text-white group-hover:block">
            <div className="z-50 text-black" onClick={handleLeftClick}>
              &#10092;
            </div>
          </div>
          {/* Right Arrow */}
          <div className="absolute right-5 top-[50%] -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full p-2 text-2xl text-white  group-hover:block 2xl:-right-16">
            <div className="z-50 text-black" onClick={handleRightClick}>
              &#10093;
            </div>
          </div>
        </div>
        <div className="progress-container hidden h-2 w-full bg-white">
          <div className="h-2 bg-red-500" id="myBar"></div>
        </div>
      </section>

      <ProductsInfiniteScroll />
    </>
  )
}

const Products = () => {
  const productsRef = useRef()
  const handleLeftClick = () => {
    productsRef.current.scrollBy(-440, 0)
  }
  const handleRightClick = () => {
    productsRef.current.scrollBy(440, 0)
  }

  return (
    <>
      <div className="md:hidden ">
        {/*Small Screen*/}
        <ProductsSm />
      </div>

      <div className="hidden md:block">
        {/*Large Screen*/}
        <ProductsLg handleLeftClick={handleLeftClick} handleRightClick={handleRightClick} productsRef={productsRef} />
      </div>
    </>
  )
}

export default Products
