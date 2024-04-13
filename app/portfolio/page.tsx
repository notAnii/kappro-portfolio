'use client'
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion";
import {transition1} from "@/utils/transitions";

type Props = {}

const Portfolio = (props: Props) => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: '100%'}}
      animate={{ opacity: 1, y: 0}}
      exit={{ opacity: 0, y: '100%'}}
      transition={transition1}
      className="section"
    >
      <div className="container mx-auto h-full relative">
        <div className="flex flex-col lg:flex-row h-full items-center justify-start gap-x-24
        text-center lg:text-left pt-24 lg:pt-36 pb-8">
          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: '-80%'}}
            animate={{ opacity: 1, y: 0}}
            exit={{ opacity: 0, y: '-80%'}}
            transition={transition1}
            className="flex flex-col lg:items-start"
          >
            <h1 className="h1">
              Portfolio
            </h1>
            <p className="mb-12 max-w-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Nunc et risus nec mi lacinia volutpat. 
              In hac <b>habitasse platea dictumst</b>. 
              Fusce nec mi nec odio facilisis tincidunt. 
              <br /><br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Molestias voluptates itaque, deleniti ad minima ducimus.
            </p>
            <Link href="/" className="btn mb-[30px] mx-auto lg:mx-0">View Albums</Link>
          </motion.div>
          {/* image grid*/}
          <div className="grid grid-cols-2 lg:gap-2">
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <Image
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                src="/assets/images/dev/1.png"
                alt="Portfolio Image"
                width={320}
                height={223}/>
            </div>
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <Image
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                src="/assets/images/dev/2.png"
                alt="Portfolio Image"
                width={320}
                height={223}/>
            </div>
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <Image
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                src="/assets/images/dev/3.png"
                alt="Portfolio Image"
                width={320}
                height={223}/>
            </div>
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <Image
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                src="/assets/images/dev/4.png"
                alt="Portfolio Image"
                width={320}
                height={223}/>
            </div>
          </div>
      
        </div>
      </div>  
    </motion.section>
  )
}

export default Portfolio