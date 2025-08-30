import { useEffect } from "react"
import Header from "./components/Header"
import DreamJob from "./components/DreamJob"
import PremiumFeatures from "./components/PremiumFeatures"
import FeaturedJob from "./components/FeaturedJobs"
import CompanyHiring from "./components/CompanyHiring"
import CategorySec from "./components/CategorySec"
import Opportunity from "./components/Opportunity"
import FooterSec from "./components/Footer"

const App = () => {
  return <div className="root-con">
    <Header/>
    <DreamJob/>
    <PremiumFeatures/>
    <FeaturedJob/>
    <CompanyHiring/>
    <CategorySec/>
    <Opportunity/>
    <FooterSec/>
  </div>
}

export default App