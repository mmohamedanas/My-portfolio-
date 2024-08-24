import React from 'react'
import HeroImage from "../assets/heroImage.jpeg"
import { MdOutlineArrowForwardIos } from "react-icons/md";

const Home = () => {
    return (
        <div name="home" 
             className='h-screen w-full 
             bg-gradient-to-b from-black
             via-black to-gray-800
             text-white'
        >
            <div className='max-w-screen-lg 
                 mx-auto flex flex-col
                items-center justify-center 
                h-full px-4 md:flex-row'
            >
                <div className='flex flex-col justify-center h-full'>
                    <h1 className='text-4xl 
                        lg:text-7xl 
                        font-bold text-white'
                    >
                            I'am a Front-end Developer
                    </h1>
                    <p className='text-gray-599 py-4 max-w-md'>
                    React.js developer with strong foundation in JavaScript and modern front-end technologies. I specialize in building intuitive, responsive web applications. Eager to contribute to innovative projects and grow within a dynamic team.
                    </p>
                    <div>
                        <button className='group text-white
                                 w-fit px-6 py-3 my-2 flex
                                items-center rounded-md 
                                bg-gradient-to-r
                                from-cyan-500
                                to-blue-500 cursor-pointer'
                        >
                            Portfolio
                            <span className='group-hover:rotate-90 duration-300'>
                                <MdOutlineArrowForwardIos size={20} className='ml-1'/>
                            </span>
                        </button>
                    </div>
                </div>              
                <div>
                     <img 
                        src={HeroImage} 
                        alt='heroimage' 
                        className='rounded-2xl mx-auto w-2/3 md:w-full'
                    />
                </div>
            </div>
        </div>
    )
}

export default Home