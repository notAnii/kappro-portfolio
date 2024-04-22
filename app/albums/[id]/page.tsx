'use client'
import Image from "next/image"
import { motion } from "framer-motion";
import {transition1} from "@/utils/transitions";

const Albumpage = ({ params }: { params: { id: string }}) => {
  const images = Array(18).fill("/assets/images/dev/2.png")

  return (
    <motion.section 
    className="overflow-y-scroll h-screen"
    initial={{ opacity: 0, y: '100%'}}
    animate={{ opacity: 1, y: 0}}
    exit={{ opacity: 0, y: '100%'}}
    transition={transition1}
  >
    <div className="container mx-auto">
      <div className="flex flex-col gap-7 pt-24 lg:pt-36 pb-8">
        <h1 className="h1 lg:text-[54px] text-center xl:text-left">
          Iftar Event 2023
        </h1>
        {/* album grid */}
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-4">
            {images.map((src, index) => (
              <Image
                key={index}
                className="object-cover h-[200px] w-[507px] hover:scale-110 transition-all duration-500"
                src={src}
                alt={`Portfolio Image ${index + 1}`}
                width={1969}
                height={1496}
              />
          
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.section>
  )
}

export default Albumpage