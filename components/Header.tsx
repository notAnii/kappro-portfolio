import Link from "next/link"
import Socials from "./Socials"
import MobileNav from "./MobileNav"
import { NAV_LINKS } from "@/constants"
import Image from "next/image"


type Props = {}

const Header = (props: Props) => {
  return (
    <header className='fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center'>
        <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
            {/* Logo */}
            <Link href="/" className="max-w-[78px]">
                <Image 
                    src='/assets/images/logo.jpg'
                    alt="Logo"
                    width={75}
                    height={75}
                />
            </Link>

            {/* nav initially hidden - show on destkop mode */}
            <nav className="hidden xl:flex gap-x-12 font-semibold">
                {NAV_LINKS.map((link, index) => (
                    <Link href={link.href} key={link.key} className="text-[#696c6d] hover:text-primary transition">
                        {link.label}
                    </Link>
                ))}
            </nav>
        </div>   

        {/* Socials */}
        <Socials />

        {/* Hamburger */}
        <MobileNav />
    </header>
  )
}

export default Header