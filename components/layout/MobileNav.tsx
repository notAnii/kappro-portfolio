'use client'
import { useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import { CgMenuRight } from 'react-icons/cg'
import { motion } from 'framer-motion'
import { NAV_LINKS } from '@/constants'
import Link from "next/link"

type Props = {}

const menuVariants = {
  hidden:{
    x: '100%'
  },
  show: {
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.9],
    }
  }
}

const MobileNav = (props: Props) => {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <nav className='text-primary xl:hidden'>
      {/* Hamburger Menu */}
      <div
        onClick={() => setOpenMenu(true)}
        className='text-3xl cursor-pointer'
      >
        <CgMenuRight />
      </div>

      {/* Nav List */}

      <motion.div
        variants={menuVariants}
        initial='hidden'
        animate={openMenu ? 'show' : ''}
        className='bg-white shadow-2xl w-full absolute top-0 right-0 max-w-xs h-screen z-20'
      >
        {/* Close Icon */}
        <div 
          onClick={() => setOpenMenu(false)}
          className='text-4xl absolute z-30 left-4 top-14 text-primary cursor-pointer'
        >
          <IoMdClose />
        </div>

        {/* List */}
        <ul className='h-full flex flex-col justify-center items-center gap-y-8 text-primary font-primary font-bold text-3xl'>
        {NAV_LINKS.map((link) => (
          <li key={link.key} onClick={() => setOpenMenu(false)}>
            <Link href={link.href} replace>
              {link.label}
            </Link>
          </li>          
        ))}
        </ul>
      </motion.div>

    </nav>
  )
}

export default MobileNav