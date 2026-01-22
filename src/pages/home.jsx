import Navbar from '../components/navbar'
import Hero from '../components/hero'
import ValentinePackages from '../components/valentinePackages'
import WhyUs from '../components/whyus'

export default function home() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <ValentinePackages/>
        <WhyUs/>
    </div>
  )
}
