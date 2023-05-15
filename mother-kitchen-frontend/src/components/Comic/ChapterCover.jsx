import { ContinuedBg } from '../../assets/comics'

const ChapterCover = ({ seriesName, baseTextColor, baseBgColor, chapter, idx, title, images = [] }) => {
  return (
    <div className="my-16 ">
      <div
        className={`text-white border-4 px-3 md:px-5 py-1 md:py-3 font-gluten font-bold text-xs md:text-2xl border-r-8 border-black w-[40vw] md:w-[30vw] rounded-t-xl border-b-0 md:rounded-t-3xl md:pl-10 ${
          idx % 2 == 0 ? 'ml-auto mr-3 md:mr-10' : 'mr-auto ml-3 md:ml-10'
        }  ${baseBgColor}`}
      >
        {seriesName}
      </div>
      <div className="border-8 border-black rounded-xl md:rounded-3xl border-b-[12px] border-r-[14px] bg-[#FFEABF]">
        <div className="flex justify-between md:pb-20 px-8 md:px-20">
          {chapter % 2 == 0 && (
            <div
              className={`border-black border-l-2 max-h-13 border-r-2 border-b-4 md:border-b-8 pt-4 rounded-b-lg md:rounded-b-xl px-3 md:px-6 ${baseBgColor} text-white font-gluten font-bold md:text-6xl`}
            >
              {chapter}
            </div>
          )}
          <div>
            <ol
              className={`w-[20vw] text-center list-decimal ${baseTextColor} md:text-4xl font-gluten font-black mt-auto relative top-3 md:top-20  `}
            >
              <li value={chapter}>{title}</li>
            </ol>
          </div>
          {chapter % 2 != 0 && (
            <div
              className={`border-black border-l-2 max-h-13 border-r-2 border-b-4 md:border-b-8 pt-4 rounded-b-lg md:rounded-b-xl px-3 md:px-6 ${baseBgColor} text-white font-gluten font-bold md:text-6xl`}
            >
              {chapter}
            </div>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 mx-5 md:ml-20 md:mr-28 gap-10 md:gap-20 my-10">
          {images.map((image, idx) => {
            return (
              <div key={idx} className="relative">
                <img src={image.source} alt="imaze" />
                <div
                  className={`w-[2rem] h-[2rem] md:w-[4.5rem] md:h-[4.5rem] rounded-full ${
                    image.color
                  } flex items-center justify-center font-gluten md:text-4xl text-white absolute border-r-2 border-b-4 border-black -top-3 md:-top-5 ${
                    idx % 2 == 0 ? 'md:-left-7 -left-3' : 'md:-right-7 -right-3'
                  }`}
                >
                  {idx + 1}.
                </div>
              </div>
            )
          })}
          <div className="relative flex justify-center items-center">
            <img src={ContinuedBg} alt="continue" className="absolute hidden md:block" />
            <p className="md:text-3xl font-gluten z-[1]">
              To Be <br className="hidden md:block" /> <span className="font-bold md:text-5xl">Continued...</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChapterCover
