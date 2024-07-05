'use client'
import Link from "next/link"
import Socials from "../shared/Socials"
import MobileNav from "./MobileNav"
import { NAV_LINKS } from "@/constants"
import Image from "next/image"

const Header = () => {
  return (
    <header className='fixed w-full px-[30px] lg:px-[100px] z-30 h-[80px] lg:h-[140px] flex items-center bg-white'>
        <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
            {/* Logo */}
            <Link href="/" className="max-w-[78px] pt-2">
                <Image 
                    src='/assets/images/logo.png'
                    alt="Logo"
                    width={80}
                    height={80}
                />
            </Link>

            {/* nav initially hidden - show on destkop mode */}
            <nav className="hidden xl:flex gap-x-12 font-semibold ">
                {NAV_LINKS.map((link) => (
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