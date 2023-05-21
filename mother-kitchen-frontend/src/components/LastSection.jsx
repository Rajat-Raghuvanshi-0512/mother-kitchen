import NavigationButton from './custom/NavigationButtons'

const LastSection = () => {
  return (
    <div className="navigationButtons mx-5 mt-20 flex flex-col items-center justify-center gap-10 rounded-3xl bg-[#FFD47A] p-4 md:flex-row md:bg-transparent lg:m-28">
      <NavigationButton
        path={'/comic'}
        className="bg-[#42DE6E] font-lexend text-xl font-extralight tracking-[-0.2rem] lg:px-[3.1rem] lg:py-5 lg:text-xl"
      >
        Comics
      </NavigationButton>
      <div className="hidden h-20 w-[1.5px] bg-black lg:block" />
      <NavigationButton
        path={'/brands'}
        className="bg-[#42D5DE] font-lexend text-xl font-extralight tracking-[-0.2rem] lg:px-[3.1rem] lg:py-5 lg:text-xl"
      >
        Brands
      </NavigationButton>
      <div className="hidden h-20 w-[1.5px] bg-black lg:block" />
      <NavigationButton
        path={'/contact'}
        className="bg-[#C842DE] font-lexend text-xl font-extralight tracking-[-0.2rem] lg:px-[3.1rem] lg:py-5 lg:text-xl"
      >
        Contact
      </NavigationButton>
    </div>
  )
}

export default LastSection
