'use client'
import Image from "next/image";
import { motion } from "framer-motion";
import {transition1, transition2} from "@/utils/transitions";
import { SingleAlbumInfo } from "@/typings";
import { urlFor } from "@/sanity";

type Props = {
  album: SingleAlbumInfo
}

const SingleAlbum = ({ album }: Props) => {
  return (
    <motion.section 
    className="overflow-y-scroll h-screen"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={transition1}
  >
    <div className="container mx-auto">
      <div className="flex flex-col gap-7 mt-24 lg:mt-36 pb-8">
        <motion.h1
          className="h1 lg:text-[54px] px-4 text-center xl:text-left"
          initial={{ x: '-50%'}}
          animate={{ x: 0}}
          exit={{ x: '-50%'}}
          transition={transition2}
        >
          {album.albumName}
        </motion.h1>
        {/* album grid */}
        <motion.div
          className="flex justify-center items-center px-4"
          initial={{ x: '50%'}}
          animate={{ x: 0}}
          exit={{ x: '50%'}}
          transition={transition2}
        >
          <div className="columns-1 sm:columns-4 gap-3 w-[1200px] mx-auto space-y-3 pb-28">
            {album.images.map(image => (
                <div className="break-avoid-inside" key={image._key}>
                  <Image
                    className="sm:hover:scale-110 transition-all duration-500"
                    src={urlFor(image).url()}
                    alt="Test"
                    width={700}
                    height={700}
                  />
                </div>
              ))
            }
          </div>
        </motion.div>
      </div>
    </div>
  </motion.section>
  )
}

export default SingleAlbum