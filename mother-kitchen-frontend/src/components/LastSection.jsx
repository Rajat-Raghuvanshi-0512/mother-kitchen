import NavigationButton from './custom/NavigationButtons'

const LastSection = () => {
  return (
    <div className="navigationButtons flex justify-center items-center gap-10 m-28">
      <NavigationButton className="bg-[#42DE6E] text-2xl font-extralight px-[5.1rem] font-lexend tracking-[-0.2rem] py-7">
        Comics
      </NavigationButton>
      <div className="w-[1.5px] bg-black h-20" />
      <NavigationButton className="bg-[#42D5DE] text-2xl font-extralight px-[5.1rem] font-lexend tracking-[-0.2rem] py-7">
        Brands
      </NavigationButton>
      <div className="w-[1.5px] bg-black h-20" />
      <NavigationButton className="bg-[#C842DE] text-2xl font-extralight px-[5.1rem] font-lexend tracking-[-0.2rem] py-7">
        Contact
      </NavigationButton>
    </div>
  )
}

export default LastSection
