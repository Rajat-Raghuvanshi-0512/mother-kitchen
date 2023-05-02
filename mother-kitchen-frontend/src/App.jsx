import { Route, Routes } from 'react-router-dom'
import { Home } from './pages'
import { Footer, Navbar } from './components'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
