const Drawer = ({ isOpen, children }) => {
  return (
    <div
      className={`${
        !isOpen && 'hidden'
      } w-screen fixed z-[1000] top-0 left-0 duration-500 bg-opacity-20 transition-transform rounded-3xl p-3`}
    >
      <div className={` top-5 left-[10px] fixed w-[95%] md:max-w-lg rounded-3xl`}>
        <div className="relative w-full h-full md:h-auto ">
          <div className=" bg-white w-full h-full shadow rounded-3xl z-50 pl-5 pr-10 border-4 border-black">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Drawer
