import React from 'react'
import archieve from './archieve.png'

const Archievements = () => {
  return (
    <div>
      <div className="container mx-auto p-4">
        <h1 className="text-center py-4"><b>My<span className="bg-[#F55353] text-white py-2 px-3 rounded-md ">Archievements</span></b></h1>
        <div className="flex flex-wrap items-center justify-center p-4">
          <div>
            <img width={400} height={400} src={archieve} alt="archievement1" />
          </div>
          <div className="flex flex-wrap ">
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
