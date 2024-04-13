import Image from "next/image";
import Link from "next/link";

type Props = {}

const About = (props: Props) => {
  return (
    <section className="section">
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
                <div className="flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col 
                justify-center items-center lg:items-start">
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
                </div>
            </div>
        </div>
    </section>
  )
}

export default About