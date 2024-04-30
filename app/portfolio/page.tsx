import PortfolioPage from "@/components/portfolio/PortfolioPage"
import { PortfolioInfo } from "@/typings";
import { fetchPortfolio } from "@/utils/fetchPortfolio";

const Portfolio = async() => {
  const portfolioInfo: PortfolioInfo = await fetchPortfolio();

  return (
   <>
     <PortfolioPage portfolioInfo={portfolioInfo} />    
   </>
  )
}

export default Portfolio