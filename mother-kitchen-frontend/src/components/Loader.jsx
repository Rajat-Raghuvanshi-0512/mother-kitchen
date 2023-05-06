import { LoadingGirl, LoadingItems } from '../assets'

const Loader = () => {
  return (
    <div className="flex items-center justify-center mt-0 relative h-[80vh]">
      <img src={LoadingGirl} alt="girl" className="w-[20vw]" />
      <img src={LoadingItems} alt="items" className="absolute animate-spin duration-700 w-[35vw]" />
    </div>
  )
}

export default Loader
