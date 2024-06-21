import React from 'react'

const About = () => {
  return (
    <main id="about">
        <div className="container mx-auto p-4">
            <h1 className="text-center py-4"><b>About<span className="bg-[#F55353] text-white py-2 px-3 rounded-md ">Me</span></b></h1>
            <div className="flex flex-wrap justify-center  py-4 md:justify-between">
                <div className="p-6 space-y-4">
                    <h2><b>My Biography</b></h2>
                    <h3><u>A Lead Front End Engineer.</u></h3>
                    <span>
                        I'm a web designer and Software developer based in Nairobi,Kenya. <br /> I work on freelance projects and utilize the time to build my own products<br />
                        I am outgoing, dedicated, and open-minded. I get across to people<br />and adjust to changes with ease. I believe that a person should work on developing<br />
                        their professional skills and learning new things all the time.<br /> I spend my leisure hours researching and buliding projects. I love to learn and explore 
                        new arenas.
                    </span>
                    <br />
                    <br />
                    <div className="font-bold">
                        <h4>Phone : +254 798 551 178</h4>
                        <h4>Email : gregorymark254@gmail.com</h4>
                        <h4>Nairobi, Kenya.</h4>
                    </div>
                    <br />
                    
                    <div className="space-x-5">
                        <a href="https://www.linkedin.com/in/devgregory/" target="_blank" rel="noreferrer" className="bg-[#F55353] hover:bg-[#f73333] text-white py-2 px-5 rounded-md">View My CV</a>
                        <a href="https://github.com/gregorymark254" target="_blank" rel="noreferrer" className="border-2 border-[#F55353] text-[#F55353] hover:bg-[#F55353] hover:text-white rounded-md py-2 px-5"><b>Git Hub</b></a>
                    </div>
                </div>
                <div className="p-6">
                    <img width={600} height={600} src="https://i.postimg.cc/5ymMYsPQ/greg.jpg" alt="" />
                </div>
            </div>
        </div>
    </main>
  )
}

export default About
