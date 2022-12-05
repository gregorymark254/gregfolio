import React from 'react'
import community from '../community.png'
import mental from '../mental.png'
import photography from '../phoography.png'
import portfolio from '../portfolio.png'
import hotel from '../Hotel.png'

const Projects = () => { 
  return (
    <main className="min-h-screen bg-[#EEEEEE]" id="projects">
        <div className="container mx-auto p-4">
            <h1 className="text-center py-4"><b>Port<span className="bg-[#F55353] text-white py-2 px-3 rounded-md ">Folio</span></b></h1>
            <p className="text-center text-xl py-2">Click to view samples.</p>
            <div className="container mx-auto p-4">
                <section className="md:grid grid-cols-3 gap-4 py-6">
                    <div className="contain">
                        <div className="content">
                            <a href="https://royallens.vercel.app" >
                            <div className="content-overlay"></div>
                            <img className="content-image" alt="" src={photography} />
                            <div className="content-details fadeIn-left">
                                <h3 className="content-title">Royal Lens</h3>
                                <p className="content-text">A Photography website</p>
                            </div>
                            </a>
                        </div>
                        <h3 className="title">Photography Website</h3>
                    </div>
                    <div className="contain">
                        <div className="content">
                            <a href="http://mental-hub.vercel.app/" >
                            <div className="content-overlay"></div>
                            <img className="content-image" alt="" src={mental} />
                            <div className="content-details fadeIn-top">
                                <h3 className="content-title">Mental Hub</h3>
                                <p className="content-text">A non-profit Organization</p>
                            </div>
                            </a>
                        </div>
                        <h3 className="title">Organisation Website</h3>
                    </div>
                    <div className="contain">
                        <div className="content">
                            <a href="http://gr-help.netlify.app/" >
                            <div className="content-overlay"></div>
                            <img className="content-image" alt="" src={community} />
                            <div className="content-details fadeIn-right">
                                <h3 className="content-title">Helping Hands</h3>
                                <p className="content-text">A community website</p>
                            </div>
                            </a>
                        </div>
                        <h3 className="title">Community website</h3>
                    </div>
                    <div className="contain">
                        <div className="content">
                            <a href="https://carloz.vercel.app/" >
                            <div className="content-overlay"></div>
                            <img className="content-image" alt="" src={portfolio} />
                            <div className="content-details fadeIn-bottom fadeIn-left">
                                <h3 className="content-title">JOHN CARLOZ</h3>
                                <p className="content-text">A Portfolio website</p>
                            </div>
                            </a>
                        </div>
                        <h3 className="title">Personal Portfolio</h3>
                    </div>
                    <div className="contain">
                        <div className="content">
                            <a href="https://xainhotel.vercel.app/" >
                            <div className="content-overlay"></div>
                            <img className="content-image" alt="" src={hotel} />
                            <div className="content-details fadeIn-bottom fadeIn-left">
                                <h3 className="content-title">Xian Hotel</h3>
                                <p className="content-text">A website for hotel organisations</p>
                            </div>
                            </a>
                        </div>
                        <h3 className="title">Hotel Website</h3>
                    </div>
                </section>
            </div>
        </div>
    </main>
  )
}



export default Projects
