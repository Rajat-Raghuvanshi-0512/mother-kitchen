import { Route, Routes } from 'react-router-dom'
import { About, Brands, Comic, Home, Team } from './pages'
import { Footer, Loader, Navbar } from './components'
import { Suspense } from 'react'

const App = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/comic" element={<Comic />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  )
}

export default App
