import React from 'react'
import {BsArrowDownCircle} from 'react-icons/bs'

const Home = () => {

  return (
    <div className="min-h-screen">
      <section className="hero">
        <div className="hero-inner">
          <h1><b>HI, I'M GREGORY MARK.</b></h1>
          <h1>A Web Developer</h1>
          <br />
          <a href="#projects" className="hover:bg-[#E45826] bg-[#F55353] rounded-md px-8 py-4">My Works</a>
          <div className="flex justify-center items-center mt-10 animate-bounce">
            <h2><BsArrowDownCircle/></h2>
          </div>
        </div>
      </section>
    </div>
  )
}


export default Home
