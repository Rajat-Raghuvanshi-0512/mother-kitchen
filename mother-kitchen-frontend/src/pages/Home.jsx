import { Hero, InstagramSection, LastSection, Nutrition, Products, Reviews, Welcome } from '../components'

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Nutrition />
      <Products />
      <Welcome />
      <Reviews />
      <InstagramSection />
      <LastSection />
    </div>
  )
}

export default Home
