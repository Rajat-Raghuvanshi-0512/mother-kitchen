import { TextLogo } from '../../assets'
import { DownloadImg, DownloadArrow } from '../../assets/comics'
import { MdOutlineDownload } from 'react-icons/md'
const DownloadComic = () => {
  return (
    <div className="relative mx-5 mt-20 grid grid-cols-1 gap-5 rounded-xl border-4 border-b-[12px] border-r-[12px] border-black bg-[#358CDD] p-2 font-gluten text-white shadow-2xl  md:mx-10 md:grid-cols-5 md:gap-10 lg:mx-20 lg:gap-16">
      <div className="col-span-2">
        <img
          src={DownloadArrow}
          alt="arrow"
          className="le absolute -top-10 w-[8rem] md:-top-20 md:w-[10rem] lg:left-20 lg:w-[15rem]"
        />
        <img src={DownloadImg} alt="download" className=" h-full w-full object-contain pl-10" />
      </div>
      <div className="col-span-3 px-3 md:pr-5 lg:pr-10">
        <h3 className="py-2 text-right text-4xl lg:pr-20">“Lorem ipsum</h3>
        <p className="rounded-2xl bg-white/40 p-7 text-center lg:text-2xl">
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit augue vel turpis vehicula consequat.
          Morbi consequat lacus et nulla elementum auctor.{' '}
        </p>
        <div className="flex justify-between pt-5">
          <div>
            <img src={TextLogo} alt="logo" className="w-20 lg:w-40" />
          </div>
          <button className="my-3 flex items-center gap-2 border-2 border-b-4 border-r-4 border-black bg-green-base px-5 uppercase">
            Download
            <MdOutlineDownload className="h-8 w-8" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default DownloadComic
