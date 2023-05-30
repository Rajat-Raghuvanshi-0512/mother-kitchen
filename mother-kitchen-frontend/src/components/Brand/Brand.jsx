import { TextLogo } from '../../assets'
import BorderDiv from '../custom/BorderDiv'
import ImageBox from '../custom/ImageBox'

const Brand = () => {
  return (
    <BorderDiv className="mx-7 bg-[#516AC0] p-5 md:mx-14 md:p-10 lg:mx-24">
      <h4 className=" mx-auto text-center font-gluten text-[8px] leading-4 text-white md:w-[80%] md:text-xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod massa est, vitae aliquet mi egestas in.
        Curabitur fermentum lorem eget dolor molestie accumsan. Fusce ut metus vitae nibh bibendum facilisis.
      </h4>
      <div className="m-5 grid grid-cols-2 gap-8 md:m-10 md:grid-cols-3 md:gap-x-10 md:gap-y-10 lg:m-20 lg:gap-x-24 lg:gap-y-14">
        <ImageBox image={TextLogo} className="bg-[#7E97ED] p-6 md:px-8" clickable={true} />
        <ImageBox image={TextLogo} className="bg-[#7E97ED] p-6 md:px-8 md:py-16" clickable={true} />
        <ImageBox image={TextLogo} className="bg-[#7E97ED] p-6 md:px-8 md:py-16" clickable={true} />
        <ImageBox image={TextLogo} className="bg-[#7E97ED] p-6 md:px-8 md:py-16" clickable={true} />
        <ImageBox image={TextLogo} className="bg-[#7E97ED] p-6 md:px-8 md:py-16" clickable={true} />
        <ImageBox image={TextLogo} className="bg-[#7E97ED] p-6 md:px-8 md:py-16" clickable={true} />
      </div>
    </BorderDiv>
  )
}

export default Brand
