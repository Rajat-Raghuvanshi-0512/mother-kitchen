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
      <LastSection elements={['About', 'Comic', 'Brand']} />
    </div>
  )
}

export default Home
