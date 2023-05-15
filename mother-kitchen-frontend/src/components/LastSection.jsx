import NavigationButton from './custom/NavigationButtons'

const LastSection = () => {
  return (
    <div className="navigationButtons flex flex-col md:flex-row justify-center items-center gap-10 bg-[#FFD47A] md:bg-transparent mx-5 md:m-28 mt-20 p-4 rounded-3xl">
      <NavigationButton
        path={'/comic'}
        className="bg-[#42DE6E] md:text-2xl font-extralight md:px-[5.1rem] font-lexend tracking-[-0.2rem] md:py-7"
      >
        Comics
      </NavigationButton>
      <div className="w-[1.5px] bg-black h-20 hidden md:block" />
      <NavigationButton
        path={'/brands'}
        className="bg-[#42D5DE] md:text-2xl font-extralight md:px-[5.1rem] font-lexend tracking-[-0.2rem] md:py-7"
      >
        Brands
      </NavigationButton>
      <div className="w-[1.5px] bg-black h-20 hidden md:block" />
      <NavigationButton
        path={'/contact'}
        className="bg-[#C842DE] md:text-2xl font-extralight md:px-[5.1rem] font-lexend tracking-[-0.2rem] md:py-7"
      >
        Contact
      </NavigationButton>
    </div>
  )
}

export default LastSection
