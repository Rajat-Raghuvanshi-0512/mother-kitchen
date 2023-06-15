import { Brand2, Brand3, TextLogo } from '../../assets'
import BorderDiv from '../custom/BorderDiv'
import ImageBox from '../custom/ImageBox'

const Brand = () => {
  return (
    <BorderDiv className="mx-7 bg-[#516AC0] p-5 md:mx-14 md:p-10 lg:mx-24">
      <h4 className=" mx-auto text-center font-gluten text-[12px] text-white md:w-[80%] md:text-xl md:leading-4">
        We&apos;re a group of companies transforming the FMCG industry through healthy and innovative products,
        prioritizing your well-being and the planet.
      </h4>
      <div className="m-5 grid grid-cols-2 gap-8 md:m-10 md:grid-cols-3 md:gap-x-10 md:gap-y-10 lg:m-20 lg:gap-x-24 lg:gap-y-14">
        <ImageBox
          image={TextLogo}
          className="h-[100px] w-[100px] bg-[#7E97ED] object-contain p-6 md:h-[150px] md:w-[300px] md:px-8 lg:h-[240px] lg:w-[400px]"
          clickable={true}
        />
        <ImageBox
          image={Brand2}
          className="h-[100px] w-[100px] bg-[#7E97ED] object-contain p-6 md:h-[150px] md:w-[300px] lg:h-[240px] lg:w-[400px]"
          clickable={true}
        />
        <ImageBox
          image={Brand3}
          className="h-[100px] w-[100px] bg-[#7E97ED] object-contain p-6 md:h-[150px] md:w-[300px] lg:h-[240px] lg:w-[400px]"
          clickable={true}
        />
        <ImageBox
          image={TextLogo}
          className="h-[100px] w-[100px] bg-[#7E97ED] object-contain p-6 md:h-[150px] md:w-[300px] lg:h-[240px] lg:w-[400px]"
          clickable={true}
        />
        <ImageBox
          image={TextLogo}
          className="h-[100px] w-[100px] bg-[#7E97ED] object-contain p-6 md:h-[150px] md:w-[300px] lg:h-[240px] lg:w-[400px]"
          clickable={true}
        />
        <ImageBox
          image={TextLogo}
          className="h-[100px] w-[100px] bg-[#7E97ED] object-contain p-6 md:h-[150px] md:w-[300px] lg:h-[240px] lg:w-[400px]"
          clickable={true}
        />
      </div>
    </BorderDiv>
  )
}

export default Brand
