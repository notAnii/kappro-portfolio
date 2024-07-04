'use client'
import Image from "next/image"
import { motion } from "framer-motion";
import {transition1, transition2} from "@/utils/transitions";
import { Album } from "@/typings";
import Link from "next/link";
import { urlFor } from "@/sanity";

type Props = {
  albums: Album[]
}

const Albums = ({albums}: Props) => {
  return (
    <motion.section 
      className="section overflow-y-scroll" 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
    >
      <div className="container mx-auto">
          <motion.div className="flex flex-col gap-8 mt-24 lg:mt-36 pb-12">
            <motion.h1 
              className="h1 lg:text-[64px] px-4 text-center xl:text-left"
              initial={{ y: '-50%'}}
              animate={{ y: 0}}
              exit={{ y: '-50%'}}
              transition={transition1}
            >
              Albums
            </motion.h1>
            {/* album grid */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-12 px-4"
              initial={{ y: '50%'}}
              animate={{ y: 0}}
              exit={{ y: '50%'}}
              transition={transition2}
              >
              {albums?.map(album => (
                <Link key={album._id} href={`/albums/${album.slug.current}`}>
                  <div className="overflow-hidden relative rounded-xl h-[165px] md:h-[200px] hover:scale-110 transition-all duration-500">
                    <Image
                      className="object-cover absolute inset-0"
                      src={urlFor(album.coverImage).url()}
                      alt={album.albumName}
                      layout="fill"
                    />
                    <div className="absolute inset-0 bg-black opacity-45"/>
                    <div className="absolute inset-0 flex items-center justify-center">
                    <p className="px-2 font-secondary font-bold text-white text-center text-3xl uppercase 
                        overflow-ellipsis overflow-hidden whitespace-normal line-clamp-2"
                    >
                        {album.albumName}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
              
            </motion.div>
          </motion.div>
      </div>
    </motion.section>
  )
}

export default Albums