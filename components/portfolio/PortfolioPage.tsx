'use client'
import Link from "next/link"
import { motion } from "framer-motion";
import {transition1} from "@/utils/transitions";
import { PortfolioInfo } from "@/typings";
import { PortableText } from "next-sanity";
import VideoPlayer from "../shared/VideoPlayer";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

type Props = {
  portfolioInfo: PortfolioInfo
}

const PortfolioPage = ({portfolioInfo}: Props) => {
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
              <PortableText value={portfolioInfo.portfolioText} />
            </div>
            <Link href="/albums" className="btn mb-[30px] mx-auto lg:mx-0">View Albums</Link>
          </motion.div>
          {/* video section */}
          <div className="w-full h-auto px-2 lg:px-0 lg:w-[703px] lg:h-[396px]">
            <Swiper navigation={true} modules={[Navigation]} className="w-full h-full">
              <SwiperSlide><VideoPlayer /></SwiperSlide>
            </Swiper>
          </div>
      
        </div>
      </div>  
    </motion.section>
  )
}

export default PortfolioPage