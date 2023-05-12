import { TextLogo } from '../../assets'
import BorderDiv from '../custom/BorderDiv'
import ImageBox from '../custom/ImageBox'

const Brand = () => {
  return (
    <div>
      <BorderDiv className="bg-[#516AC0] mx-10 p-10">
        <h4 className=" md:w-[80%] mb-5 mx-auto text-center text-white font-gluten text-[8px] md:text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod massa est, vitae aliquet mi egestas
          in. Curabitur fermentum lorem eget dolor molestie accumsan. Fusce ut metus vitae nibh bibendum facilisis.
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-x-36 md:gap-y-20 md:m-20">
          <ImageBox image={TextLogo} className="p-6 md:px-8 bg-[#7E97ED]" />
          <ImageBox image={TextLogo} className="p-6 md:px-8 bg-[#7E97ED] md:py-16" />
          <ImageBox image={TextLogo} className="p-6 md:px-8 bg-[#7E97ED] md:py-16" />
          <ImageBox image={TextLogo} className="p-6 md:px-8 bg-[#7E97ED] md:py-16" />
          <ImageBox image={TextLogo} className="p-6 md:px-8 bg-[#7E97ED] md:py-16" />
          <ImageBox image={TextLogo} className="p-6 md:px-8 bg-[#7E97ED] md:py-16" />
        </div>
      </BorderDiv>
    </div>
  )
}

export default Brand
