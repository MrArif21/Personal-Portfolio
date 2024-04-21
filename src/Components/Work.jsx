import React from 'react';
import proj1 from '../assets/project1.png';
import proj2 from '../assets/project 2.png';
import proj3 from '../assets/proj3.png';
import proj4 from '../assets/weather.png';

const Work = () => {
 return (
    <div  id="work-section" className='max-w-[1200px] mx-auto sm:py-20'>
      <div className='pb-10cd portfolio'>
        <p className='text-4xl mb-3 font-bold primary-color'>Work</p>
        <p className='text-gray-400'>Check out some of my recent work</p>
      </div>
      <div className='grid sm:grid-cols-2 md:grid-cols-4 
      gap-2'>


        {/* Project 1 */}
        <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center h-[350px] bg-cover relative'>
          <img src={proj1} alt="Project 1" />
          <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
            <span className='text-2xl font-bold text-white tracking-wider'>Project 1</span>
            <div className='pt-8 text-center'>
              <a href="/">
                <button className='text-center rounded-1g px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>View Project</button>
              </a>
            </div>
          </div>
        </div>


        {/* Project 2 */}
        <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center h-[350px] bg-cover relative'>
          <img src={proj2} alt="Project 2" />
          <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
            <span className='text-2xl font-bold text-white tracking-wider'>Project 2</span>
            <div className='pt-8 text-center'>
              <a href="https://suplexgym.netlify.app/" target="_blank">
                <button className='text-center rounded-1g px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>View Project</button>
              </a>
            </div>
          </div>
        </div>


        {/* Project 3 */}
        <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center h-[350px] bg-cover relative'>
          <img src={proj3} alt="Project 3" />
          <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
            <span className='text-2xl font-bold text-white tracking-wider'>Project 3</span>
            <div className='pt-8 text-center'>
              <a href="https://main--medical-hardy.netlify.app/" target="_blank">
                <button className='text-center rounded-1g px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>View Project</button>
              </a>
            </div>
          </div>
        </div>


        {/* Project 4 */}
        <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center h-[350px] bg-cover relative'>
          <img src={proj4} alt="Project 4" />
          <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
            <span className='text-2xl font-bold text-white tracking-wider'>Project 4</span>
            <div className='pt-8 text-center'>
              <a href="https://seeweather-check.netlify.app/" target="_blank">
                <button className='text-center rounded-1g px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>View Project</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
 );
}

export default Work;