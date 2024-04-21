import React from 'react'
import aboutImg from '../assets/about.jpeg'

const About = () => {
    return (
        <div className="text-white max-w-[1200px] mx-auto my-12" id="about">
            <div className="md:grid md:grid-cols-2 sm:py-20">
            <div className="mt-4 md:mt-0 text-left flex">
                    <div className="my-auto mx-6">
                         <h2 className="text-4xl font-bold mb-4 primary-color">About Me</h2>
                            <p className="text-base 1g:text-lg">
                            Hi, I'm Mohammad Arif, a front-end developer deeply engaged with React.js and the endless possibilities it brings to web development. My journey is fueled by a passion for creating, learning through doing, and a keen interest in the evolving landscape of Web3 and blockchain technologies. <br />
                            In each project, I seek not only to apply my skills but to expand them, particularly in how decentralized technologies can redefine user experiences. As I explore the intersection of front-end development and innovative web technologies, I'm excited about the opportunities to contribute to a more connected and secure digital world.                            </p>
                    </div>
                    
                </div>
                <img className="mx-auto rounded-3x1 py-8 md:py-0" src={aboutImg} width={300} height={300} alt="" />            </div>
        </div>
    )
}

export default About
