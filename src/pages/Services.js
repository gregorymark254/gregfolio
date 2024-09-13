import React from 'react'
import { FaGlobe, FaDesktop, FaServer, FaMoneyCheck, FaDatabase, FaTools } from "react-icons/fa";

const Services = () => {
  return (
    <div id='services' className='h-screen flex items-center'>
      <div className="container mx-auto p-4">
        <div className='text-center my-10 space-y-4'>
          <h3>I like to make things easy for you</h3>
          <h2><b>My <span className='text-red-600'>Special Services</span> for your <span className='text-red-600'>Development</span></b></h2>
        </div>
        <div className="grid grid-cols-1 gap-4 mt-4 text-center md:grid-cols-2 lg:grid-cols-3">
          <div className='bg-[#2f2f2f] p-4 rounded-lg space-y-2'>
            <h3 className='flex items-center justify-center text-red-600'><FaGlobe/></h3>
            <h4><b>WEBSITE DEVELOPMENT</b></h4>
            <p>
              I specialize in creating dynamic and visually stunning websites tailored to meet your unique needs. 
              I ensure every aspect of your site is crafted for optimal performance and engagement.
            </p>
          </div>
          <div className='bg-[#2f2f2f] p-4 rounded-lg space-y-2'>
            <h3 className='flex items-center justify-center text-red-600'><FaDesktop/></h3>
            <h4><b>MANAGEMENT SYSTEMS</b></h4>
            <p>
              I offer comprehensive management system solutions designed to streamline and optimize your business operations. 
              From custom-built platforms to integrate various functions like inventory, customer relations, and project management, 
              my services ensure that your workflows are efficient and scalable.
            </p>
          </div>
          <div className='bg-[#2f2f2f] p-4 rounded-lg space-y-2'>
            <h3 className='flex items-center justify-center text-red-600'><FaServer/></h3>
            <h4><b>SYSTEM DESIGNS</b></h4>
            <p>
              I offer specialized system design services to create tailored, efficient solutions for your technological needs. 
              From conceptualization to implementation, I design robust systems that streamline operations, enhance functionality, 
              and integrate seamlessly with existing infrastructure. 
            </p>
          </div>
          <div className='bg-[#2f2f2f] p-4 rounded-lg space-y-2'>
            <h3 className='flex items-center justify-center text-red-600'><FaMoneyCheck/></h3>
            <h4><b>PAYMENT INTEGRATION</b></h4>
            <p>
              I provide seamless payment integration solutions to enhance your e-commerce or business platform. 
              My services ensure that your customers experience smooth, secure transactions, with support for a wide 
              range of payment methods, including credit/debit cards, digital wallets, and more.
            </p>
          </div>
          <div className='bg-[#2f2f2f] p-4 rounded-lg space-y-2'>
            <h3 className='flex items-center justify-center text-red-600'><FaDatabase/></h3>
            <h4><b>DATABASE DESIGNS</b></h4>
            <p>
              I specialize in designing efficient and scalable database solutions tailored to your specific needs. 
              From structuring relational databases to optimizing performance and ensuring data integrity, 
              my services focus on creating robust systems that support your business’s data management requirements.
            </p>
          </div>
          <div className='bg-[#2f2f2f] p-4 rounded-lg space-y-2'>
            <h3 className='flex items-center justify-center text-red-600'><FaTools/></h3>
            <h4><b>COMPUTER REPAIR</b></h4>
            <p>
              I offer expert computer repair services to address a wide range of hardware and software issues. 
              Whether you're dealing with a slow system, malfunctioning components, or complex software glitches, 
              I provide prompt and effective solutions to get your computer back in top shape.
            </p>
          </div>
        </div>
      </div> 
    </div>
  )
}

export default Services
