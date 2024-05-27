'use client'
import Link from "next/link"
import { motion } from "framer-motion";
import {transition1} from "@/utils/transitions";
import { VideosInfo } from "@/typings";
import { PortableText } from "next-sanity";
import VideoPlayer from "@/components/shared/VideoPlayer";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import CustomPrevButton from "./CustomPrevButton";
import CustomNextButton from "./CustomNextButton";

type Props = {
  videosInfo: VideosInfo
}

const VideosPage = ({videosInfo}: Props) => {

  return (
    <motion.section 
      initial={{ opacity: 0, y: '100%'}}
      animate={{ opacity: 1, y: 0}}
      exit={{ opacity: 0, y: '100%'}}
      transition={transition1}
      className="section"
    >
      <div className="container mx-auto h-full relative">
        <div className="flex flex-col lg:flex-row h-full items-center justify-start gap-x-24
        text-center lg:text-left pt-24 lg:pt-36 pb-8">
          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: '-80%'}}
            animate={{ opacity: 1, y: 0}}
            exit={{ opacity: 0, y: '-80%'}}
            transition={transition1}
            className="flex flex-col lg:items-start"
          >
            <h1 className="h1">
              Videos
            </h1>
            <div className="mb-12 max-w-sm rich-text-container">
              <PortableText value={videosInfo.videosText} />
            </div>
            <Link href="/albums" className="btn mb-[30px] mx-auto lg:mx-0">View Albums</Link>
          </motion.div>
          {/* video section */}
          <div className="w-full h-auto px-2 lg:px-0 lg:min-w-[800px] lg:h-[396px]">
            <Swiper
              modules={[Navigation]}
              className="w-full h-full"
            >
              <SwiperSlide>
                <div className="flex justify-center items-center">
                  <div className="w-[703px]">
                    <VideoPlayer videosrc="https://www.youtube.com/watch?v=2n8WwjzayTY&pp=ygUUZnJlZWRvbSBjcnVuY2h5cnRvbGw%3D"/>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="flex justify-center items-center">
                  <div className="w-[703px]">
                    <VideoPlayer videosrc="https://www.youtube.com/watch?v=OCxd5G7wtPM"/>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="flex justify-center items-center">
                  <div className="w-[703px]">
                    <VideoPlayer videosrc="https://www.youtube.com/watch?v=dQMjPsrQRxo"/>
                  </div>
                </div>
              </SwiperSlide>


              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
                <CustomPrevButton />
              </div>
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
                <CustomNextButton />
              </div>
            </Swiper>
          </div>
        </div>
      </div>  
    </motion.section>
  )
}

export default VideosPage