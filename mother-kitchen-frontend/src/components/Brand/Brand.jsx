import { TextLogo } from '../../assets'
import BorderDiv from '../custom/BorderDiv'
import ImageBox from '../custom/ImageBox'

const Brand = () => {
  return (
    <div>
      <BorderDiv className="mx-10 bg-[#516AC0] p-10">
        <h4 className=" mx-auto mb-5 text-center font-gluten text-[8px] text-white md:w-[80%] md:text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod massa est, vitae aliquet mi egestas
          in. Curabitur fermentum lorem eget dolor molestie accumsan. Fusce ut metus vitae nibh bibendum facilisis.
        </h4>
        <div className="grid grid-cols-2 gap-5 md:m-20 md:grid-cols-3 md:gap-x-36 md:gap-y-20">
          <ImageBox image={TextLogo} className="bg-[#7E97ED] p-6 md:px-8" />
          <ImageBox image={TextLogo} className="bg-[#7E97ED] p-6 md:px-8 md:py-16" />
          <ImageBox image={TextLogo} className="bg-[#7E97ED] p-6 md:px-8 md:py-16" />
          <ImageBox image={TextLogo} className="bg-[#7E97ED] p-6 md:px-8 md:py-16" />
          <ImageBox image={TextLogo} className="bg-[#7E97ED] p-6 md:px-8 md:py-16" />
          <ImageBox image={TextLogo} className="bg-[#7E97ED] p-6 md:px-8 md:py-16" />
        </div>
      </BorderDiv>
    </div>
  )
}

export default Brand
