import React from 'react'
import { FaInstagram ,FaTwitter } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const Contact = () => {

  return (
    <div id='contact'>
      <div className="container mx-auto p-4 my-10">
        <div className='text-center my-10 space-y-2'>
          <h6>Get In Touch</h6>
          <h2><b>Contact <span className='text-red-600'>Me</span></b></h2>
        </div>
        <div className="grid grid-cols-1 gap-4 font-bold md:grid-cols-2 lg:grid-cols-4">
          <a href="mailto:gregorymark254@gmail.com" className="flex justify-center items-center space-x-2 border rounded-md border-red-600 py-4 text-red-600 hover:bg-red-600 hover:text-white">
            <span><MdEmail/></span>
            <p><b>Email</b></p>
          </a>
          <a href="https://www.instagram.com/gregory.mark_/" className="flex space-x-2 items-center justify-center border rounded-md border-purple-600 py-4 text-purple-600 hover:bg-purple-600 hover:text-white">
            <span><FaInstagram/></span>
            <p><b>Instagram</b></p>
          </a>
          <a href="https://x.com/dev_gregory" className="flex justify-center items-center space-x-2 border rounded-md border-blue-500 py-4 text-blue-500 hover:bg-blue-500 hover:text-white">
            <span><FaTwitter/></span>
            <p><b>Twitter</b></p>
          </a>
          <a href="https://wa.me/254798551778" className="flex justify-center items-center space-x-2 border rounded-md border-green-600 py-4 text-green-600 hover:bg-green-600 hover:text-white">
            <span><IoLogoWhatsapp/></span>
            <p><b>What's App</b></p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
