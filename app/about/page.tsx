import { fetchAbout } from "@/utils/fetchAbout";
import { AboutInfo } from "@/typings";
import AboutPage from "@/components/about/AboutPage";

const About = async () => {
  const aboutInfo: AboutInfo = await fetchAbout();

  return (
   <>
    <AboutPage aboutInfo={aboutInfo}/>
   </>
  )
}

export default About