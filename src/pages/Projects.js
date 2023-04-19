import React from 'react'

const Projects = () => { 
  return (
    <main className="bg-[#EEEEEE]" id="projects">
        <div className="container mx-auto p-4">
            <h1 className="text-center py-4"><b>Port<span className="bg-[#F55353] text-white py-2 px-3 rounded-md ">Folio</span></b></h1>
            <p className="text-center text-xl py-2">Click to view samples.</p>
            <div className="container mx-auto p-4">
                <section className="grid grid-cols-1 gap-4 py-6 justify-center md:grid-cols-3">
                    <div className="contain">
                        <div className="content">
                            <a href="https://royallens.vercel.app" target="_blank" rel="noreferrer">
                            <div className="content-overlay"></div>
                            <img className="content-image" alt="" src="https://i.postimg.cc/wMMgTJDt/royal.png" />
                            <div className="content-details fadeIn-left">
                                <h3 className="content-title">Royal Lens</h3>
                                <p className="content-text">A Photography website</p>
                            </div>
                            </a>
                        </div>
                        <br />
                        <h3 className="title">Photography Website</h3>
                    </div>
                    <div className="contain">
                        <div className="content">
                            <a href="https://techit.vercel.app/" target="_blank" rel="noreferrer">
                            <div className="content-overlay"></div>
                            <img className="content-image" alt="" src="https://i.postimg.cc/Dy9fmsW-x/techit.png" />
                            <div className="content-details fadeIn-top">
                                <h3 className="content-title">Techit</h3>
                                <p className="content-text">An IT Company</p>
                            </div>
                            </a>
                        </div>
                        <br />
                        <h3 className="title">IT Company Website</h3>
                    </div>
                    <div className="contain">
                        <div className="content">
                            <a href="https://carloz.vercel.app/" target="_blank" rel="noreferrer">
                            <div className="content-overlay"></div>
                            <img className="content-image" alt="" src="https://i.postimg.cc/cJFz1zhm/portfolio.png" />
                            <div className="content-details fadeIn-bottom fadeIn-left">
                                <h3 className="content-title">JOHN CARLOZ</h3>
                                <p className="content-text">A Portfolio website</p>
                            </div>
                            </a>
                        </div>
                        <br />
                        <h3 className="title">Personal Portfolio</h3>
                    </div>
                    <div className="contain">
                        <div className="content">
                            <a href="http://mental-hub.vercel.app/" target="_blank" rel="noreferrer">
                            <div className="content-overlay"></div>
                            <img className="content-image" alt="" src="https://i.postimg.cc/vBDN4vSd/mental.png" />
                            <div className="content-details fadeIn-top">
                                <h3 className="content-title">Mental Hub</h3>
                                <p className="content-text">A non-profit Organization</p>
                            </div>
                            </a>
                        </div>
                        <br />
                        <h3 className="title">Organisation Website</h3>
                    </div>
                    <div className="contain">
                        <div className="content">
                            <a href="http://gr-help.netlify.app/" target="_blank" rel="noreferrer">
                            <div className="content-overlay"></div>
                            <img className="content-image" alt="" src="https://i.postimg.cc/YC3n8P5H/community.png" />
                            <div className="content-details fadeIn-right">
                                <h3 className="content-title">Helping Hands</h3>
                                <p className="content-text">A community website</p>
                            </div>
                            </a>
                        </div>
                        <br />
                        <h3 className="title">Community website</h3>
                    </div>
                    {/* <div className="contain">
                        <div className="content">
                            <a href="https://xainhotel.vercel.app/" target="_blank" rel="noreferrer">
                            <div className="content-overlay"></div>
                            <img className="content-image" alt="" src="https://i.postimg.cc/7Z9n1kS3/Hotel.png" />
                            <div className="content-details fadeIn-bottom">
                                <h3 className="content-title">Xian Hotel</h3>
                                <p className="content-text">A website for hotel organisations</p>
                            </div>
                            </a>
                        </div>
                        <h3 className="title">Hotel Website</h3>
                    </div> */}
                    {/* <div className="contain">
                        <div className="content">
                            <a href="https://adminhotel.vercel.app/" target="_blank" rel="noreferrer">
                            <div className="content-overlay"></div>
                            <img className="content-image" alt="" src="https://i.postimg.cc/664ckFNK/Dashboard.png" />
                            <div className="content-details fadeIn-bottom fadeIn-right">
                                <h3 className="content-title">XAIN HOTEL</h3>
                                <p className="content-text">A Dashboard For Admins</p>
                            </div>
                            </a>
                        </div>
                        <h3 className="title">Admin Dashboards</h3>
                    </div> */}
                    <div className="contain">
                        <div className="content">
                            <a href="https://carways.vercel.app/" target="_blank" rel="noreferrer">
                            <div className="content-overlay"></div>
                            <img className="content-image" alt="" src="https://i.postimg.cc/T13681js/Screenshot-from-2023-03-28-21-00-22.png" />
                            <div className="content-details fadeIn-bottom fadeIn-right">
                                <h3 className="content-title">Car Ways</h3>
                                <p className="content-text">Car rental system</p>
                            </div>
                            </a>
                        </div>
                        <br />
                        <h3 className="title">Car Rental</h3>
                    </div>
                </section>
            </div>
        </div>
    </main>
  )
}



export default Projects