import { useState } from 'react'
import { BackArrow } from '../../assets/comics'
import ChapterCover from './ChapterCover'
import ReactPaginate from 'react-paginate'
import Comics from './comicData'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((comicPage, idx) => <ChapterCover key={comicPage.title} {...comicPage} idx={idx + 1} />)}
    </>
  )
}

function PaginatedItems({ itemsPerPage }) {
  const [itemOffset, setItemOffset] = useState(0)

  const endOffset = itemOffset + itemsPerPage
  const currentItems = Comics.slice(itemOffset, endOffset)
  const pageCount = Math.ceil(Comics.length / itemsPerPage)

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % Comics.length
    scrollTo(0, 400)
    setItemOffset(newOffset)
  }

  return (
    <>
      <Items currentItems={currentItems} />
      <div className="flex w-full justify-center">
        <ReactPaginate
          breakLabel="..."
          previousLabel={<FaChevronLeft />}
          nextLabel={<FaChevronRight />}
          previousLinkClassName="text-white"
          nextLinkClassName="text-white"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          renderOnZeroPageCount={null}
          className="flex gap-3 font-gluten text-base font-bold text-white/60 md:gap-10 md:text-3xl"
          pageLinkClassName="m-auto bg-[#A5763F] px-3 pt-3 pb-2 rounded"
          activeLinkClassName="!bg-[#031E29] text-white"
          previousClassName="my-auto"
          nextClassName="my-auto"
        />
      </div>
    </>
  )
}
const Comic = () => {
  return (
    <div className="px-3 py-5 md:px-20 md:pt-10 ">
      <div className="flex px-5 md:justify-between">
        <div className="w-full font-gluten font-bold text-white">
          <h2 className="black-shadow text-3xl text-green-base  md:text-6xl">
            INayat{' '}
            <span className="text-white">
              & <br /> Mummy
            </span>
          </h2>
          <p className=" mt-2 md:mt-5 md:text-2xl">PRINCIPLE OF SUCCESS</p>
          <p className="text-green-base md:text-xl">Mini Series</p>
        </div>
        <div className="flex flex-col items-end justify-center md:items-start md:justify-center">
          <div className="w-[3rem] cursor-pointer rounded-r-[3rem] rounded-tl-[2rem] border-2 border-b-4 border-r-4 border-black bg-green-base p-3 duration-300 hover:scale-95 md:mx-auto md:w-[5rem] md:border-4 md:border-b-[6px] md:border-r-[6px] md:p-5">
            <img src={BackArrow} alt="arrow" />
          </div>
          <p className="mt-4 text-center font-lexend text-[10px] font-semibold tracking-tighter text-white md:text-left md:text-base">
            Press here to go Back
          </p>
        </div>
      </div>
      <PaginatedItems itemsPerPage={4} />
    </div>
  )
}

export default Comic
