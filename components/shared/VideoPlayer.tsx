'use client'
import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import("react-player"), { ssr: true });

type Props = {
  videosrc: string
  playing: boolean
}
const VideoPlayer = (props: Props) => {
    
  return (
    <div className="relative pt-[56.25%]">
      <ReactPlayer
        className="absolute top-0 left-0"
        width="100%"
        height="100%"
        url={props.videosrc}
        controls={true}
        pip={false}
        playing={props.playing}
      />
    </div>
  )
}

export default VideoPlayer