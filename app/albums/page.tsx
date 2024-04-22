'use client'
import Image from "next/image"
import { motion } from "framer-motion";
import {transition1} from "@/utils/transitions";
import Link from "next/link";

type Props = {}

const Albums = (props: Props) => {

  // Array of image data for testing
  const images = Array(18).fill("/assets/images/dev/example.png")

  return (
    <motion.section 
      className="overflow-y-scroll h-screen"
      initial={{ opacity: 0, y: '100%'}}
      animate={{ opacity: 1, y: 0}}
      exit={{ opacity: 0, y: '100%'}}
      transition={transition1}
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-8 pt-24 lg:pt-36 pb-12">
          <h1 className="h1 lg:text-[64px] text-center xl:text-left">
            Albums
          </h1>
          {/* album grid */}
          <div className="flex justify-center items-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-4">
              {images.map((src, index) => (
                <Link href='/albums/1'>
                  <Image
                    key={index}
                    className="object-cover rounded-lg h-[200px] w-[507px] hover:scale-110 transition-all duration-500"
                    src={src}
                    alt={`Portfolio Image ${index + 1}`}
                    width={1969}
                    height={1496}
                  />
                </Link>
            
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Albums