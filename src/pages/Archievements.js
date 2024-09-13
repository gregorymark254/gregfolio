import React from 'react'
import archieve from './archieve.png'

const Archievements = () => {
  return (
    <div>
      <div className="container mx-auto p-4">
        <div className='text-center my-10 space-y-4'>
          <h2><b>My <span className='text-red-600'>Archievements</span></b></h2>
        </div>
        <div className="flex flex-wrap justify-center p-4 gap-4">
          <div className="w-full lg:w-1/3">
            <img width={500} height={400} src={archieve} alt="archievement1" />
          </div>
          <div className="w-full lg:w-1/3 flex gap-4">
            <div>
              <h1>06</h1>
              <p>October</p>
              <p>2023</p>
            </div>
            <div>
              <h2>Victory at the KPF Hackathon 🏆</h2>
              <p>Attended the kilimani Prop Tech Hackathon! And presented Our project, focused on noise monitoring in nightlife venues, 
                securing the top spot. Grateful for the opportunity brought forth by KPF to showcase innovations and create positive change.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Archievements