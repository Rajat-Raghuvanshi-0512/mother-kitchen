import { Brand1, Brand2, Brand3, Brand4, Brand5, Brand6 } from '../../assets'
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
          image={Brand1}
          className="object-contain !p-3 md:px-8"
          clickable={true}
          boxClassName={'!h-[120px] !w-[120px] bg-[#7E97ED]  md:!h-[150px] md:!w-[150px] lg:!h-[240px] lg:!w-[240px]'}
        />
        <ImageBox
          image={Brand2}
          className="object-contain !p-3 md:px-8"
          clickable={true}
          boxClassName={'!h-[120px] !w-[120px] bg-[#7E97ED]  md:!h-[150px] md:!w-[150px] lg:!h-[240px] lg:!w-[240px]'}
        />
        <ImageBox
          image={Brand3}
          className="object-contain !p-3 md:px-8"
          clickable={true}
          boxClassName={'!h-[120px] !w-[120px] bg-[#7E97ED]  md:!h-[150px] md:!w-[150px] lg:!h-[240px] lg:!w-[240px]'}
        />
        <ImageBox
          image={Brand4}
          className="object-contain !p-3 md:px-8"
          clickable={true}
          boxClassName={'!h-[120px] !w-[120px] bg-[#7E97ED]  md:!h-[150px] md:!w-[150px] lg:!h-[240px] lg:!w-[240px]'}
        />
        <ImageBox
          image={Brand5}
          className="object-contain !p-3 md:px-8"
          clickable={true}
          boxClassName={'!h-[120px] !w-[120px] bg-[#7E97ED]  md:!h-[150px] md:!w-[150px] lg:!h-[240px] lg:!w-[240px]'}
        />
        <ImageBox
          image={Brand6}
          className="object-contain !p-3 md:px-8"
          clickable={true}
          boxClassName={'!h-[120px] !w-[120px] bg-[#7E97ED]  md:!h-[150px] md:!w-[150px] lg:!h-[240px] lg:!w-[240px]'}
        />
      </div>
    </BorderDiv>
  )
}

export default Brand
