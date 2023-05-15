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
  console.log(`Loading items from ${itemOffset} to ${endOffset}`)
  const currentItems = Comics.slice(itemOffset, endOffset)
  const pageCount = Math.ceil(Comics.length / itemsPerPage)

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % Comics.length
    console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`)
    scrollTo(0, 400)
    setItemOffset(newOffset)
  }

  return (
    <>
      <Items currentItems={currentItems} />
      <div className="flex justify-center w-full">
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
          className="flex gap-3 md:gap-10 font-bold font-gluten text-base md:text-3xl text-white/60"
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
    <div className="py-5 px-3 md:p-20">
      <div className="flex md:justify-between px-5">
        <div className="text-white font-gluten font-bold w-full">
          <h2 className="text-green-base text-3xl md:text-8xl  black-shadow">
            INayat{' '}
            <span className="text-white">
              & <br /> Mummy
            </span>
          </h2>
          <p className="md:text-4xl mt-5">PRINCIPLE OF SUCCESS</p>
          <p className="md:text-2xl text-green-base">Mini Series</p>
        </div>
        <div className="flex flex-col justify-end items-end md:items-start md:justify-center">
          <div className="bg-green-base w-[3rem] md:w-[6rem] border-black md:border-r-8 md:border-b-8 border-2 md:border-4 rounded-tl-[2rem] rounded-r-[3rem] md:mx-auto p-3 md:p-5 cursor-pointer hover:scale-95 duration-300">
            <img src={BackArrow} alt="arrow" />
          </div>
          <p className="text-white text-right md:text-left font-semibold text-[8px] md:text-xl tracking-tighter mt-4 font-lexend">
            Press here to go Back
          </p>
        </div>
      </div>{' '}
      <PaginatedItems itemsPerPage={4} />
    </div>
  )
}

export default Comic
