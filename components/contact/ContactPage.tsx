'use client'
import { motion } from "framer-motion";
import {transition1} from "@/utils/transitions";
import { ContactInfo } from "@/typings";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { toast } from 'react-hot-toast';


type Props = {
    contactInfo: ContactInfo;
}

const ContactPage = ({contactInfo}: Props) => {

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      process.env.NEXT_PUBLIC_SERVICE_ID &&
      process.env.NEXT_PUBLIC_TEMPLATE_ID &&
      process.env.NEXT_PUBLIC_PUBLIC_KEY
    ){
      emailjs
      .sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current!, {
        publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
      })
      .then(
        () => {
          toast.success('Message sent successfully!');
          form.current!.reset();
        },
        (error) => {
          toast.error('Something went wrong. Please try again later.');
        },
      );
    }
  };

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      className="section overflow-y-scroll"
    >
      <div className="container mx-auto h-full">
        <div className="flex flex-col lg:flex-row h-full items-center
        justify-start mt-24 lg:mt-0 px-1 gap-x-8 text-center lg:text-left">
          {/* bg */}
          <motion.div 
            initial={{ y: '100%'}}
            animate={{ y: 0}}
            exit={{ y: '100%'}}
            transition={transition1}
            className="hidden lg:flex bg-[#f7f1ee] absolute bottom-0 left-0 right-0 top-72 -z-10"
          />

          {/* contact form */}
          <div className="lg:flex-1 lg:pt-32 px-4">
            <motion.h1 
              className="h1"
              initial={{ y: '80%'}}
              animate={{ y: 0}}
              exit={{ y: '80%'}}
              transition={{transition: transition1}}
              >
              Contact me
            </motion.h1>
            <p className="mb-12">I would love to get suggestions from you.</p>
            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-y-4">
              <div className="flex gap-x-10">
                <input 
                  className="outline-none border-b border-b-primary h-[60px]
                  bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
                  type="text"
                  placeholder="Your name"
                  name="from_name"
                />
                <input 
                  className="outline-none border-b border-b-primary h-[60px]
                  bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
                  type="text"
                  placeholder="Your email address"
                  name="email"
                />
              </div>
              <input 
                  className="outline-none border-b border-b-primary h-[60px]
                  bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
                  type="text"
                  placeholder="Your message"
                  name="message"
              />
              <button className="btn mb-[35px] mx-auto lg:mx-0 self-start">Send it</button>
            </form>
          </div>

          {/* links */}
          <motion.div
            initial={{ y: '80%'}}
            animate={{ y: 0}}
            exit={{ y: '80%'}}
            transition={{transition: transition1}}
            className="mt-[35px] lg:flex-1 lg:pt-14 pb-6"
            >
              <div className="flex justify-center items-center">
                <div className="flex flex-col gap-y-5">
                  <div className="flex items-center gap-x-4">
                    <BiSolidPhoneCall className="text-2xl lg:text-4xl text-primary"/>
                    <p className="font-extrabold">{contactInfo.phoneNumber}</p>
                  </div>
                  <div className="flex items-center gap-x-4">
                    <MdEmail className="text-2xl lg:text-4xl text-primary"/>
                    <p className="font-extrabold">{contactInfo.email}</p>
                  </div>
                  <Link href={`https://www.instagram.com/${contactInfo.instagram}/`} className="flex items-center gap-x-4">
                    <FaInstagram className="text-2xl lg:text-4xl text-primary"/>
                    <p className="font-extrabold">{contactInfo.instagram}</p>
                  </Link>
                </div>
              </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default ContactPage