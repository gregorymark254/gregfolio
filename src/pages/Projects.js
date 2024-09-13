import React from 'react'

const Projects = () => {
  return (
    <div id='projects'>
      <main className="container mx-auto p-4">
        <div className='text-center my-10 space-y-4'>
          <h3>My Latest Work</h3>
          <h2><b>Explore <span className='text-red-600'>Projects</span></b></h2>
        </div>
        <section className="grid grid-cols-1 gap-4 py-6 justify-center md:grid-cols-3">
          <div className="contain">
            <div className="content">
              <a href="https://medixsolutions.vercel.app/" target="_blank" rel="noreferrer">
                <div className="content-overlay"></div>
                <img className="content-image" alt="" src="https://i.postimg.cc/T2BcBc0P/Screenshot-from-2024-09-13-21-42-59.png" />
                <div className="content-details fadeIn-left">
                  <h3 className="content-title">Medix Solutions</h3>
                  <p className="content-text">Hospital Management System</p>
                </div>
              </a>
            </div>
            <br />
            <h4 className="title">Hospital System</h4>
          </div>
          <div className="contain">
            <div className="content">
              <a href="https://stockplus.vercel.app/" target="_blank" rel="noreferrer">
                <div className="content-overlay"></div>
                <img className="content-image" alt="" src="https://i.postimg.cc/yYkQ95bv/Screenshot-from-2024-09-13-21-28-01.png" />
                <div className="content-details fadeIn-left">
                  <h3 className="content-title">Stock Plus</h3>
                  <p className="content-text">Inventory Management System</p>
                </div>
              </a>
            </div>
            <br />
            <h4 className="title">Inventory System</h4>
          </div>
          <div className="contain">
            <div className="content">
              <a href="https://eventsmanage.vercel.app/app/home" target="_blank" rel="noreferrer">
                <div className="content-overlay"></div>
                <img className="content-image" alt="" src="https://i.postimg.cc/0Qt31JQC/Screenshot-from-2024-09-13-21-35-35.png" />
                <div className="content-details fadeIn-left">
                  <h3 className="content-title">Tech Events</h3>
                  <p className="content-text">Event Management System</p>
                </div>
              </a>
            </div>
            <br />
            <h4 className="title">Event System</h4>
          </div>
          <div className="contain">
            <div className="content">
                <a href="https://royallens.vercel.app/" target="_blank" rel="noreferrer">
                  <div className="content-overlay"></div>
                  <img className="content-image" alt="" src="https://i.postimg.cc/wMMgTJDt/royal.png" />
                  <div className="content-details fadeIn-left">
                    <h3 className="content-title">Royal Lens</h3>
                    <p className="content-text">A Photography website</p>
                  </div>
                </a>
            </div>
            <br />
            <h4 className="title">Photography Website</h4>
          </div>
          <div className="contain">
            <div className="content">
              <a href="https://care-giver.vercel.app/" target="_blank" rel="noreferrer">
                <div className="content-overlay"></div>
                <img className="content-image" alt="" src="https://i.postimg.cc/2yRHVXn4/care.png" />
                <div className="content-details fadeIn-top">
                  <h3 className="content-title">Care Giver</h3>
                  <p className="content-text">A community website</p>
                </div>
              </a>
            </div>
            <br />
            <h4 className="title">Elderly Home Website</h4>
          </div>
          <div className="contain">
            <div className="content">
              <a href="https://makongo.vercel.app/" target="_blank" rel="noreferrer">
                <div className="content-overlay"></div>
                <img className="content-image" alt="" src="https://i.postimg.cc/XJtZPrnZ/Screenshot-from-2024-09-13-21-26-40.png" />
                <div className="content-details fadeIn-top">
                  <h3 className="content-title">Makongo</h3>
                  <p className="content-text">A non-profit Organization</p>
                </div>
              </a>
            </div>
            <br />
            <h4 className="title">Organisation Website</h4>
          </div>
          <div className="contain">
            <div className="content">
              <a href="https://yavin.vercel.app/" target="_blank" rel="noreferrer">
                <div className="content-overlay"></div>
                <img className="content-image" alt="" src="https://i.postimg.cc/L8pdckzG/Yavin.png" />
                <div className="content-details fadeIn-top">
                  <h3 className="content-title">Yavin</h3>
                  <p className="content-text">A landing page</p>
                </div>
              </a>
            </div>
            <br />
            <h4 className="title">A Landing Page</h4>
          </div>
      </section>
      </main>
    </div>
  )
}

export default Projects
