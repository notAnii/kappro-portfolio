'use client'
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {transition1} from "@/utils/transitions";
import { AboutInfo } from "@/typings";
import { urlFor } from "@/sanity";
import { PortableText } from "next-sanity";

type Props = {
    aboutInfo: AboutInfo
}

const AboutPage = ({aboutInfo}: Props) => {
  return (
    <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={transition1}
        className="section"
    >
        <div className="container mx-auto h-full relative">
            {/* text and image wrapper*/}
            <div className="flex flex-col lg:flex-row h-full items-center justify-start
                lg:justify-center gap-x-24 text-center lg:text-left lg:pt-16">
                {/* image*/}
                <motion.div
                    className="hidden sm:block flex-1 max-h-[739px] order-2 lg:order-none overflow-hidden"
                    initial={{ y: '80%'}}
                    animate={{ y: 0 }}
                    exit={{ y: '80%' }}
                    transition={transition1}
                    >
                    <Image 
                        src={urlFor(aboutInfo.aboutImage).url()}
                        alt="About Image"
                        width={689}
                        height={851}
                    />
                </motion.div>

                {/* text */}
                <motion.div 
                    initial={{ y: '-80%' }}
                    animate={{ y: 0 }}
                    exit={{ y: '-80%' }}
                    transition={transition1}
                    className="flex-1 mt-24 lg:mt-0 mb-14 lg:w-auto z-10 flex flex-col 
                    justify-center items-center lg:items-start"
                >
                    <h1 className="h1">About Me</h1>
                    <div className="mb-12 mx-3 lg:mx-0 lg:min-w-[400px] max-w-sm rich-text-container">
                        <PortableText value={aboutInfo.aboutText} />
                    </div>
                    <Link href="/albums" className="btn">View my work</Link>
                </motion.div>
            </div>
        </div>
    </motion.section>

  )
}

export default AboutPage