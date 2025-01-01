import Hero from "./Hero"
import About from "./About"
import Tokenomics from "./Tokenomics"
import FAQ from "./FAQ"
import Footer from "./Footer"
import RoadMap from "./RoadMap"
import Navbar from "./Navbar"
import Divider from "./Divider"


export default function LandingPage() {
  return (
    <div>
      <Navbar />
      <div id="home"><Hero /></div>
      <Divider/>
      <div id="about"><About /></div>
        <Divider height="380"/>
      <div id="tokenomics"><Tokenomics /></div>
      <Divider/>
      <div id="roadmap"><RoadMap /></div>
      <Divider/>
      {/* <div id="faq"><FAQ /></div> */}
      {/* <Footer /> */}
    </div>
  )
}