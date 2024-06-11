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
import { useState } from "react";

type Props = {
  videosInfo: VideosInfo
}

const VideosPage = ({videosInfo}: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);

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
            <div className="mb-12 lg:min-w-[370px] max-w-md rich-text-container">
              <PortableText value={videosInfo.videosText} />
            </div>
            <Link href="/albums" className="btn mb-[30px] mx-auto lg:mx-0">View Albums</Link>
          </motion.div>
          {/* video section */}
          <div className="w-full h-auto px-2 lg:px-0 lg:min-w-[800px] lg:h-[396px]">
            <Swiper
              modules={[Navigation]}
              className="w-full h-full"
              onSwiper={(swiper) => setTotalSlides(swiper.slides.length)}
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            >
              {videosInfo.videoLinks.map((video, index) => (
                <SwiperSlide key={index}>
                  <div className="flex justify-center items-center">
                    <div className="w-[703px]">
                      <VideoPlayer 
                        videosrc={video}
                        playing={activeIndex === index}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              {/* custom navigation buttons */}
              <div className={`absolute left-0 top-1/2 transform -translate-y-1/2 z-10 transition-opacity duration-300 ${activeIndex === 0 ? 'opacity-0' : 'opacity-100'}`}>
                <CustomPrevButton />
              </div>
              <div className={`absolute right-0 top-1/2 transform -translate-y-1/2 z-10 transition-opacity duration-300 ${activeIndex === totalSlides - 1 ? 'opacity-0' : 'opacity-100'}`}>
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