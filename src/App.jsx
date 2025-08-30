import { useEffect } from "react"
import Header from "./components/Header"
import DreamJob from "./components/DreamJob"
import PremiumFeatures from "./components/PremiumFeatures"
import FeaturedJob from "./components/FeaturedJobs"
import CompanyHiring from "./components/CompanyHiring"
import CategorySec from "./components/CategorySec"
import Opportunity from "./components/Opportunity"

const App = () => {
  return <div>
    <Header/>
    <DreamJob/>
    <PremiumFeatures/>
    <FeaturedJob/>
    <CompanyHiring/>
    <CategorySec/>
    <Opportunity/>
  </div>
}

export default App