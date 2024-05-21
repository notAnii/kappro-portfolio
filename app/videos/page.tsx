import VideosPage from "@/components/videos/VideosPage"
import { VideosInfo } from "@/typings";
import { fetchVideos } from "@/utils/fetchVideos";

const Videos = async() => {
  const videosInfo: VideosInfo = await fetchVideos();

  return (
   <>
     <VideosPage videosInfo={videosInfo} />    
   </>
  )
}

export default Videos