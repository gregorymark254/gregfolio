import React from 'react'
import { FaInstagram,FaFacebookF,FaTwitter } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <main className="bg-[#EAEAEA] py-12" id="contact">
        <div className="container mx-auto p-4">
            <h1 className="text-center py-4"><b>Contact <span className="bg-[#F55353] text-white py-1 px-3 rounded-md ">Me</span></b></h1>
            <br />
            <div className="md:grid grid-cols-5 gap-4 font-bold">
                <a href="mailto:gregorymark254@gmail.com" className="flex justify-center m-4 items-center space-x-2 border rounded-md border-red-600 py-4 text-red-600 hover:bg-red-600 hover:text-white">
                    <span><MdEmail/></span>
                    <p><b>Email</b></p>
                </a>
                <a href="/" className="flex justify-center m-4 items-center space-x-2 border rounded-md border-blue-600 py-4 text-blue-600 hover:bg-blue-600 hover:text-white">
                    <span><FaFacebookF/></span>
                    <p><b>Facebook</b></p>
                </a>
                <a href="https://www.instagram.com/gregory.mark_/" className="flex space-x-2 m-4 items-center justify-center border rounded-md border-purple-600 py-4 text-purple-600 hover:bg-purple-600 hover:text-white">
                    <span><FaInstagram/></span>
                    <p><b>Instagram</b></p>
                </a>
                <a href="/" className="flex justify-center m-4 items-center space-x-2 border rounded-md border-blue-500 py-4 text-blue-500 hover:bg-blue-500 hover:text-white">
                    <span><FaTwitter/></span>
                    <p><b>Twitter</b></p>
                </a>
                <a href="https://wa.me/254798551778" className="flex justify-center m-4 items-center space-x-2 border rounded-md border-green-600 py-4 text-green-600 hover:bg-green-600 hover:text-white">
                    <span><IoLogoWhatsapp/></span>
                    <p><b>What's App</b></p>
                </a>
            </div>
        </div>
    </main>
  )
}

export default Contact
