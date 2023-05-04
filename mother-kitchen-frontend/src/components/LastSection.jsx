import NavigationButton from './custom/NavigationButtons'

const LastSection = () => {
  return (
    <div className="navigationButtons flex justify-center items-center gap-10 my-28">
      <NavigationButton className="bg-[#42DE6E] text-xl px-14 py-5">Comics</NavigationButton>
      <div className="w-[1.5px] bg-black h-20" />
      <NavigationButton className="bg-[#42D5DE] text-xl px-14 py-5">Brands</NavigationButton>
      <div className="w-[1.5px] bg-black h-20" />
      <NavigationButton className="bg-[#C842DE] text-xl px-14 py-5">Contact</NavigationButton>
    </div>
  )
}

export default LastSection
