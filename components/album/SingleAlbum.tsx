'use client'
import Image from "next/image";
import { motion } from "framer-motion";
import {transition1} from "@/utils/transitions";
import { SingleAlbumInfo } from "@/typings";
import { urlFor } from "@/sanity";

type Props = {
  album: SingleAlbumInfo
}

const SingleAlbum = ({ album }: Props) => {
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
          {album.albumName}
        </h1>
        {/* album grid */}
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-4">
            {album.images.map(image => (
              <Image
                key={image._key}
                className="object-cover h-[200px] w-[507px] hover:scale-110 transition-all duration-500"
                src={urlFor(image).url()}
                alt="Test"
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

export default SingleAlbum