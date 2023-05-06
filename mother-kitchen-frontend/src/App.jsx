import { Route, Routes } from 'react-router-dom'
import { About, Brands, Comic, Home, Team } from './pages'
import { Footer, Navbar } from './components'
// import Loader from './components/Loader'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/comic" element={<Comic />} />
        {/* <Route path="/loader" element={<Loader />} /> */}
      </Routes>
      <Footer />
    </>
  )
}

export default App
