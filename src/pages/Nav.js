import React, {useState} from 'react'

const Nav = () => {
  const [navIsShown, setnavIsShown] = useState(false);
  const toggleNavIsShown = () => {
    setnavIsShown((navIsShown) => !navIsShown);
  };

  return (
    <main className="nav">
      <div className="bg-black text-white">
        <div className="container mx-auto p-6">
          <nav className='flex justify-between items-center  px-4'>
            {/* Top Nav */}
            <div className="flex items-center ">
              <h2>GM.</h2>
            </div>
            <ul className='hidden md:flex'>
              <li>
                <a href="#home" className="px-3 py-2 ">Home</a>
              </li>
              <li>
                <a href="#about" className=" px-3 py-2 ">About</a>
              </li>
              <li>
                <a href="#projects" className=" px-3 py-2 ">Projects</a>
              </li>
              <li>
                <a href="#skills" className="px-3 py-2">Skills</a>
              </li>
              <li>
                <a href="#contact" className="px-3 py-2">Contact</a>
              </li>
            </ul>
            
            
            {/* Responsive Nav */}
            {!navIsShown && (
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6 md:hidden' onClick={toggleNavIsShown} >
                <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25' />
              </svg>
            )}
            {navIsShown && (
              <div className='md:hidden absolute z-10 top-0 left-0 w-full bg-gray-100/90 text-black px-4 py-6'>
                <div className='flex justify-between border-b-2 border-b-gray-600'>
                  <div className="flex items-center ">
                    <h3>Gregory</h3>
                  </div>
                  <svg
                    xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6' onClick={toggleNavIsShown} >
                    <path  strokeLinecap='round'  strokeLinejoin='round'  d='M6 18L18 6M6 6l12 12'/>
                  </svg>
                </div>
                <ul className=' mb-4'>
                  <li>
                    <a href="#home" className="px-3 py-2 text-lg">Home</a>
                  </li>
                  <li>
                    <a href="#about" className=" px-3 py-2 text-lg">About</a>
                  </li>
                  <li>
                    <a href="#projects" className=" px-3 py-2 text-lg">Projects</a>
                  </li>
                  <li>
                    <a href="#skills" className="px-3 py-2 text-lg">Skills</a>
                  </li>
                  <li>
                    <a href="#contact" className="px-3 py-2 text-lg">Contact</a>
                  </li>
                </ul>
              </div>
            )}
          </nav>
        </div>
      </div> 
    </main>
  )
  
}

export default Nav

