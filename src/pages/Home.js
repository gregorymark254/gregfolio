import React from 'react'
import { FaInstagram, FaTwitter, FaPhoneAlt } from "react-icons/fa";
import { IoLogoWhatsapp, IoMdDocument, IoLogoGithub } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import resume from './greg_cv.pdf'

const Home = () => {
  
  return (
    <main className="container mx-auto p-4 flex items-center">
      <section className="flex flex-wrap items-center justify-center">
        <div className='w-full xl:w-1/2 p-4'>
          <div className='my-2 space-y-4'>
            <span>Hello,</span>
            <h1><b>I'm Gregory Mark.</b></h1>
            <h3>A Software Engineer</h3>
          </div>
          <div className='my-4'>
            <span>
              As a passionate web and software developer, I specialize in designing, developing, deploying and maintaining innovative and digital solutions that drive engagement and efficiency.
              With a solid foundation in both front-end and back-end technologies, I excel in translating complex requirements into intuitive, functional designs. 
            </span>
          </div>
          <div className='my-8 flex flex-wrap items-center gap-4'>
            <div>
              <a href={resume} target="_blank" rel="noreferrer" className="flex justify-center items-center space-x-2 rounded-md px-6 py-2 bg-red-700 text-slate-200 hover:bg-red-600">
                <span><IoMdDocument/></span>
                <p><b>Download Resume</b></p>
              </a>
            </div>
            <div>
              <a href="tel:+254798551778" className="flex justify-center items-center space-x-2 border rounded-md border-red-600 px-6 py-2 text-red-600 hover:bg-red-600 hover:text-white">
                <span><FaPhoneAlt/></span>
                <p><b>Contact Me</b></p>
              </a>
            </div>
          </div>
          <div className='my-8 flex flex-wrap items-center gap-4'>
            <a href="https://github.com/gregorymark254" target="_blank" rel="noreferrer" className="rounded-full border border-slate-300 p-2 text-white hover:bg-slate-200 hover:text-slate-700">
              <IoLogoGithub/>
            </a>
            <a href="mailto:gregorymark254@gmail.com" className="rounded-full border border-red-600 p-2 text-red-600 hover:bg-red-600 hover:text-white">
              <MdEmail/>
            </a>
            <a href="https://www.instagram.com/dev_gregory?igsh=MWhzazR3NWdyOXZqcg%3D%3D&utm_source=qr" target="_blank" rel="noreferrer" className="rounded-full border border-purple-600 p-2 text-purple-600 hover:bg-purple-600 hover:text-white">
              <FaInstagram/>
            </a>
            <a href="https://x.com/dev_gregory" target="_blank" rel="noreferrer" className="rounded-full border border-blue-500 p-2 text-blue-500 hover:bg-blue-500 hover:text-white">
              <FaTwitter/>
            </a>
            <a href="https://wa.me/254798551778" target="_blank" rel="noreferrer" className="rounded-full border border-green-600 p-2 text-green-600 hover:bg-green-600 hover:text-white">
              <IoLogoWhatsapp/>
            </a>
          </div>
        </div>
        <div className='w-full xl:w-1/2 p-4'>
          <div className='flex items-center justify-center'>
            <img className='rounded-full' width={600} height={500} src="https://i.postimg.cc/5ymMYsPQ/greg.jpg" alt="" />
          </div>
        </div>
      </section>
    </main>
  )
}


export default Home
