import React from 'react'

const Projects = () => { 
  return (
    <main className="min-h-screen bg-[#EEEEEE]" id="projects">
        <div className="container mx-auto p-4">
            <h1 className="text-center py-4"><b>Port<span className="bg-[#F55353] text-white py-2 px-3 rounded-md ">Folio</span></b></h1>
            <div className="container mx-auto p-4">

                <section className="md:grid grid-cols-3 gap-4 py-6">
                    <div className="contain">
                        <div className="content">
                            <a href="https://royallens.vercel.app" >
                            <div className="content-overlay"></div>
                            <img className="content-image" alt="" src="https://images.unsplash.com/photo-1433360405326-e50f909805b3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=359e8e12304ffa04a38627a157fc3362"/>
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
                            <img className="content-image" alt="" src="https://images.unsplash.com/photo-1433360405326-e50f909805b3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=359e8e12304ffa04a38627a157fc3362"/>
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
                            <img className="content-image" alt="" src="https://images.unsplash.com/photo-1433360405326-e50f909805b3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=359e8e12304ffa04a38627a157fc3362"/>
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
                            <img className="content-image" alt="" src="https://images.unsplash.com/photo-1433360405326-e50f909805b3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=359e8e12304ffa04a38627a157fc3362"/>
                            <div className="content-details fadeIn-bottom fadeIn-left">
                                <h3 className="content-title">JOHN CARLOZ</h3>
                                <p className="content-text">A Portfolio website</p>
                            </div>
                            </a>
                        </div>
                        <h3 className="title">Personal Portfolio</h3>
                    </div>
                </section>
            </div>
        </div>
    </main>
  )
}



export default Projects
