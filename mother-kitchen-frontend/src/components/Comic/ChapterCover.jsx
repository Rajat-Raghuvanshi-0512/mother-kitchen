import { ContinuedBg } from '../../assets/comics'

const ChapterCover = ({ seriesName, baseTextColor, baseBgColor, chapter, idx, title, images = [] }) => {
  return (
    <div className="my-16 ">
      <div
        className={`w-[45vw] rounded-t-xl border-4 border-b-0 border-r-8 border-black px-3 py-1 font-gluten text-xs font-bold text-white md:w-[30vw] md:rounded-t-3xl md:px-5 md:py-3 md:pl-10 md:text-2xl ${
          idx % 2 == 0 ? 'ml-auto mr-3 md:mr-10' : 'ml-3 mr-auto md:ml-10'
        }  ${baseBgColor}`}
      >
        {seriesName}
      </div>
      <div className="rounded-xl border-8 border-b-[12px] border-r-[14px] border-black bg-[#FFEABF] md:rounded-3xl">
        <div className="flex justify-between px-8 md:px-20 md:pb-20">
          {chapter % 2 == 0 && (
            <div
              className={`max-h-13 rounded-b-lg border-b-4 border-l-2 border-r-2 border-black px-3 pt-4 md:rounded-b-xl md:border-b-8 md:px-6 ${baseBgColor} font-gluten font-bold text-white md:text-6xl`}
            >
              {chapter}
            </div>
          )}
          <div className="flex">
            <ol
              className={`flex ${
                chapter % 2 != 0 ? 'w-[50vw]' : 'w-[30vw]'
              }  list-decimal ${baseTextColor} relative top-3 mt-auto font-gluten font-black md:top-20 md:text-4xl  `}
            >
              <li value={chapter}>
                <span className="relative">{title}</span>
              </li>
            </ol>
          </div>
          {chapter % 2 != 0 && (
            <div
              className={`max-h-13 rounded-b-lg border-b-4 border-l-2 border-r-2 border-black px-3 pt-4 md:rounded-b-xl md:border-b-8 md:px-6 ${baseBgColor} font-gluten font-bold text-white md:text-6xl`}
            >
              {chapter}
            </div>
          )}
        </div>
        <div className="mx-5 my-10 grid grid-cols-1 gap-10 md:ml-20 md:mr-28 md:grid-cols-2 md:gap-20">
          {images.map((image, idx) => {
            return (
              <div key={idx} className="relative">
                <img src={image.source} alt="imaze" />
                <div
                  className={`h-[2rem] w-[2rem] rounded-full md:h-[4.5rem] md:w-[4.5rem] ${
                    image.color
                  } absolute -top-3 flex items-center justify-center border-b-4 border-r-2 border-black font-gluten text-white md:-top-5 md:text-4xl ${
                    idx % 2 == 0 ? '-left-3 md:-left-7' : '-right-3 md:-right-7'
                  }`}
                >
                  {idx + 1}.
                </div>
              </div>
            )
          })}
          <div className="relative flex items-center justify-center">
            <img src={ContinuedBg} alt="continue" className="absolute hidden md:block" />
            <p className="z-[1] font-gluten md:text-3xl">
              To Be <br className="hidden md:block" /> <span className="font-bold md:text-5xl">Continued...</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChapterCover
