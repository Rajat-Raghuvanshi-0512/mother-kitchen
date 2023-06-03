import { Route, Routes } from 'react-router-dom'
import { About, Brands, Comic, Contact, Home, MkCafe, NotFound, Team } from './pages'
import { Footer, Loader, Navbar } from './components'
import { Suspense } from 'react'

const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/comic" element={<Comic />} />
          <Route path="/cafe" element={<MkCafe />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Suspense>
    </>
  )
}

export default App
