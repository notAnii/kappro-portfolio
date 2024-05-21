'use client'
import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import("react-player"), { ssr: true });
//import ReactPlayer from 'react-player';
const VideoPlayer = () => {
    let videosrc = "https://www.youtube.com/watch?v=2n8WwjzayTY&pp=ygUUZnJlZWRvbSBjcnVuY2h5cnRvbGw%3D";
  return (
    <div style={{ position: 'relative', paddingTop: '56.25%' /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */ }}>
      <ReactPlayer
        style={{ position: 'absolute', top: 0, left: 0 }}
        width="100%"
        height="100%"
        url={videosrc}
        controls={true}
        pip={false}
      />
    </div>
  )
}

export default VideoPlayer