'use client'
import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import("react-player"), { ssr: true });
//import ReactPlayer from 'react-player';
const VideoPlayer = () => {
    let videosrc = "/assets/images/dev/videos/next.mp4";
  return (
    <div>
        <ReactPlayer
            width={"100%"}
            height={"100%"}
            url={videosrc}
            controls={true}
            pip={false}
        />
        <source src={videosrc} type="video/mp4" />
    </div>
  )
}

export default VideoPlayer