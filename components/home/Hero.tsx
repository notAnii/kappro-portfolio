'use client'
import { motion } from "framer-motion";
import {transition1} from "@/utils/transitions";
import Image from "next/image";
import Link from "next/link";
import { HomeInfo } from "@/typings";
import { urlFor } from "@/sanity";

type Props = {
    homeInfo: HomeInfo
}

const Home= ({homeInfo}: Props) =>{
  return (
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0.5 }}
        transition={transition1}
        className="section "
      >
        <div className="container mx-auto h-full relative">
          {/* Text and Image Wrapper */}
          <div className="flex flex-col justify-center">
            {/* text */}
            <motion.div
              initial={{ opacity: 0, y: '-50%'}}
              animate={{ opacity: 1, y: 0}}
              exit={{ opacity: 0, y: '-50%'}}
              transition={transition1}
              className="w-full pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 
              lg:absolute flex flex-col justify-center items-center lg:items-start"
            >
              <h1 className="h1">
                photographer <br /> & film maker
              </h1>
              <p className="text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-12">
                {homeInfo.location}
              </p>
              <Link href="/contact" className="btn mb-[30px]">hire me</Link>
            </motion.div>
            {/* Image */}
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={transition1}
              className="flex justify-end max-h-96 lg:max-h-max">
                <div className="relative lg:-right-40 overflow-hidden">
                  <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={transition1}
                  >
                    <Image
                      src={urlFor(homeInfo.homeImage).url()}
                      alt="Home Image"
                      width={761}
                      height={1037}
                    />
                  </motion.div>
                </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
  )
}

export default Home