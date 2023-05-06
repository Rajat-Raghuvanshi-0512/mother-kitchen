import { TextLogo } from '../../assets'
import BorderDiv from '../custom/BorderDiv'
import ImageBox from '../custom/ImageBox'

const Brand = () => {
  return (
    <div>
      <BorderDiv className="bg-[#516AC0] mx-10 p-10">
        <h4 className="w-[70%] mx-auto text-center text-white font-gluten text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod massa est, vitae aliquet mi egestas
          in. Curabitur fermentum lorem eget dolor molestie accumsan. Fusce ut metus vitae nibh bibendum facilisis.
          Donec suscipit hendrerit placerat. Ut ac lectus a est accumsan efficitur vitae at enim.
        </h4>
        <div className="grid grid-cols-3 gap-x-36 gap-y-20 m-20">
          <ImageBox image={TextLogo} className="px-8 bg-[#7E97ED]" />
          <ImageBox image={TextLogo} className="px-8 bg-[#7E97ED] py-16" />
          <ImageBox image={TextLogo} className="px-8 bg-[#7E97ED] py-16" />
          <ImageBox image={TextLogo} className="px-8 bg-[#7E97ED] py-16" />
          <ImageBox image={TextLogo} className="px-8 bg-[#7E97ED] py-16" />
          <ImageBox image={TextLogo} className="px-8 bg-[#7E97ED] py-16" />
        </div>
      </BorderDiv>
    </div>
  )
}

export default Brand
