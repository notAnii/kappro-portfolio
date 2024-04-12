import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="section ">
      <div className="container mx-auto h-full relative">
        {/* Text and Image Wrapper */}
        <div className="flex flex-col justify-center">
          <div className="w-full pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 
          lg:absolute flex flex-col justify-center items-center lg:items-start">
            <h1 className="h1">
              photographer <br /> & film maker
            </h1>
            <p className="text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-12">
              Abu Dhabi, UAE
            </p>
            <Link href="/" className="btn mb-[30px]">hire me</Link>
          </div>

          <div className="flex justify-end max-h-96 lg:max-h-max">
              <div className="relative lg:-right-40 overflow-hidden">
                <Image
                  src="/assets/images/dev/home.png"
                  alt="Home Image"
                  width={761}
                  height={1037}
                />
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}
