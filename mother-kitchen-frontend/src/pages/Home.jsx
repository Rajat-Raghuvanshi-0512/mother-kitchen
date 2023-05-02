import { Hero, InstagramSection, Nutrition, Products, Reviews, Welcome } from '../components'

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Nutrition />
      <Products />
      <Welcome />
      <Reviews />
      <InstagramSection />
    </div>
  )
}

export default Home
