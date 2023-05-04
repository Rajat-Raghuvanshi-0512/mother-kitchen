import { Route, Routes } from 'react-router-dom'
import { About, Home } from './pages'
import { Footer, Navbar } from './components'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
