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
        initial={{ opacity: 0, y: '100%'}}
        animate={{ opacity: 1, y: 0}}
        exit={{ opacity: 0, y: '100%'}}
        transition={transition1}
        className="section"
    >
        <div className="container mx-auto h-full relative">
            {/* text and image wrapper*/}
            <div className="flex flex-col lg:flex-row h-full items-center 
            justify-center gap-x-24 text-center lg:text-left lg:pt-16">
                {/* image*/}
                <div className="flex-1 max-h-[739px] order-2 lg:order-none overflow-hidden">
                    <Image 
                        src={urlFor(aboutInfo.aboutImage).url()}
                        alt="About Image"
                        width={689}
                        height={851}
                    />
                </div>

                {/* text */}
                <motion.div 
                    initial={{ opacity: 0, y: '-80%'}}
                    animate={{ opacity: 1, y: 0}}
                    exit={{ opacity: 0, y: '-80%'}}
                    transition={transition1}
                    className="flex-1 pt-[14dvh] pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col 
                    justify-center items-center lg:items-start"
                >
                    <h1 className="h1">About Me</h1>
                    <div className="mb-12 lg:min-w-[400px] max-w-sm rich-text-container">
                        <PortableText value={aboutInfo.aboutText} />
                    </div>
                    <Link href="/portfolio" className="btn">View my work</Link>
                </motion.div>
            </div>
        </div>
    </motion.section>

  )
}

export default AboutPage