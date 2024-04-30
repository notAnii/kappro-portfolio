import Hero from "@/components/home/Hero";
import { HomeInfo } from "@/typings";
import { fetchHome } from "@/utils/fetchHome";

export default async function Home() {
  const homeInfo: HomeInfo = await fetchHome();

  return (
      <>
        <Hero homeInfo={homeInfo}/>
      </>
  )
}
