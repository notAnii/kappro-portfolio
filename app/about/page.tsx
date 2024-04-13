'use client'
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {transition1} from "@/utils/transitions";

type Props = {}

const About = (props: Props) => {
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
                <div className="flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden">
                    <Image 
                        src="/assets/images/dev/about.png"
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
                    className="flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col 
                    justify-center items-center lg:items-start"
                >
                    <h1 className="h1">About Me</h1>
                    <p className="mb-12 max-w-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Nunc et risus nec mi lacinia volutpat. 
                        In hac <b>habitasse platea dictumst</b>. 
                        Fusce nec mi nec odio facilisis tincidunt. 
                        <br /><br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Molestias voluptates itaque, deleniti ad minima ducimus.
                    </p>
                    <Link href="/portfolio" className="btn">View my work</Link>
                </motion.div>
            </div>
        </div>
    </motion.section>
  )
}

export default About