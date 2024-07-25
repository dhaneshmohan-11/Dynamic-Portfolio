import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-20'>
            Hi, I'm Dhanesh, from Chennai. I completed my Engineering at SRM VEC. Additionally, I obtained certification in Web Development from EMC Academy. I completed an internship at Stigmata Pvt Ltd and received certification as a Full Stack Developer. My strength lies in my ability to control my emotions in any situation, and I am a consistent person. In my free time, I enjoy learning new technologies. Thank you for this wonderful opportunity to introduce myself. 😊

            </p>
            <br />

            <p className='text-xl'>
            As an aspiring frontend developer, I bring a blend of creativity and technical prowess, with a keen eye for responsive design and user experience. Armed with a solid foundation in modern web technologies, I'm enthusiastic about crafting engaging interfaces and contributing to innovative projects. Eager to collaborate, learn, and make a meaningful impact in the ever-evolving world of frontend development.

            </p>
        </div>
    </div>
  )
}

export default About