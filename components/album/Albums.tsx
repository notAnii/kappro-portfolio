'use client'
import Image from "next/image"
import { motion } from "framer-motion";
import {transition1} from "@/utils/transitions";
import { Album } from "@/typings";
import Link from "next/link";
import { urlFor } from "@/sanity";

type Props = {
  albums: Album[]
}

const Albums = ({albums}: Props) => {
  const images = Array(18).fill("/assets/images/dev/example2.png")
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-4">
            {albums?.map(album => (
              <Link key={album._id} href={`/albums/${album.slug.current}`}>
                <div className="overflow-hidden relative rounded-xl h-[200px] hover:scale-110 transition-all duration-500">
                  <Image
                    className="object-cover absolute inset-0"
                    src={urlFor(album.coverImage).url()}
                    alt={album.albumName}
                    layout="fill"
                  />
                  <div className="absolute inset-0 bg-black opacity-45"/>
                  <div className="absolute inset-0 flex items-center justify-center">
                  <p className="px-2 font-secondary text-white text-center text-3xl uppercase 
                      overflow-ellipsis overflow-hidden whitespace-normal"
                      style={{ 
                          display: '-webkit-box',
                          WebkitBoxOrient: 'vertical',
                          WebkitLineClamp: '2' 
                        }}
                  >
                      {album.albumName}
                    </p>
                  </div>
                </div>
              </Link>
            ))}

            {images.map((src, index) => (
            <Link key={index} href="/">
                <div className="overflow-hidden relative rounded-lg h-[200px] hover:scale-110 transition-all duration-500">
                  <Image
                    className="object-cover object-top absolute inset-0"
                    src={src}
                    alt="picture"
                    layout="fill"
                  />
                  <div className="absolute inset-0 bg-black opacity-45"/>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="px-2 font-secondary text-white text-center text-3xl uppercase 
                      overflow-ellipsis overflow-hidden whitespace-normal" style={{ display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: '2' }}>
                      FRIEREN BEYOND JOURNEY'S END FRIEREN BEYOND JOURNEY'S END FRIEREN BEYOND JOURNEY'S END
                    </p>
                  </div>
                </div>
            </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Albums