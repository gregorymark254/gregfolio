import React from 'react'

const Skills = () => {

  return (
    <main className="min-h-screen" id="skills">
        <div className="container mx-auto p-4">
            <h1 className="text-center py-4"><b>My<span className="bg-[#F55353] text-white py-2 px-3 rounded-md ">Skills</span></b></h1>
            <section className="container mx-auto p-4 py-6">
                <div className="grid grid-cols-4 gap-3  py-4">
                    <div className="bg-[#F55353] text-white py-2 px-3 ">
                        <span>HTML</span>
                    </div>
                    <div className="bg-[#F55353] text-white py-2 px-3">
                        <span>CSS</span>
                    </div>
                    <div className="bg-[#F55353] text-white py-2 px-3">
                        <span>Java Script</span>
                    </div>
                    <div className="bg-[#F55353] text-white py-2 px-3">
                        <span>Tailwind Css</span>
                    </div>
                    <div className="bg-[#F55353] text-white py-2 px-3">
                        <span>React Js</span>
                    </div>
                    <div className="bg-[#F55353] text-white py-2 px-3">
                        <span>Bootstrap</span>
                    </div>
                    <div className="bg-[#F55353] text-white py-2 px-3">
                        <span>Node Js</span>
                    </div>
                    <div className="bg-[#F55353] text-white py-2 px-3">
                        <span>EXPRESS</span>
                    </div>
                    <div className="bg-[#F55353] text-white py-2 px-3">
                        <span>Mongo DB</span>
                    </div>
                    <div className="bg-[#F55353] text-white py-2 px-3">
                        <span>PHP</span>
                    </div>
                    <div className="bg-[#F55353] text-white py-2 px-3">
                        <span>My SQL</span>
                    </div>
                </div>
            </section>
        </div>
        <section className="skill">
            <div className="md:grid grid-cols-4 gap-10 py-8">
                <h2>20+ <br /> Customers</h2>
                <h2>3+ <br /> Years of experience</h2>
                <h2>50K+ <br /> Lines of code</h2>
                <h2>15+ <br /> Projects Completed</h2>
            </div>
        </section>
    </main>
  )
}

export default Skills
