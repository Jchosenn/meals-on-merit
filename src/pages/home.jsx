import Navbar from '../components/navbar'
import Hero from '../components/hero'
import ValentinePackages from '../components/valentinePackages'
import WhyUs from '../components/whyus'
import CTA from '../components/cta'
import Footer from '../components/footer'

export default function home() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <ValentinePackages/>
        <WhyUs/>
        <CTA/>
        <Footer/>
    </div>
  )
}
