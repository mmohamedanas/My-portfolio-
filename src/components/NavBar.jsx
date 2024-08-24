import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll"

const NavBar = () => {

  const links = [
    {
      id: 1,
      link: "home"
    },
    {
      id: 2,
      link: "about"
    },
    {
      id: 3,
      link: "portfolio"
    },
    {
      id: 4,
      link: "experience"
    },
    {
      id: 5,
      link: "contact"
    }
  ]
  const [nav, setNav] = useState(false)
  return (
    <div className='h-20 w-full bg-black text-white flex justify-between items-center px-4'>
      <div className='font-logo text-5xl ml-2'>
        <h2>Mohamed Anas</h2>
      </div>
      <ul className='hidden md:flex justify-center items-center'>
        {
          links.map(({ id, link }) => (
            <li className='cursor-pointer text-gray-500 
                text-base px-4 hover:scale-105 duration-200
                capitalize'
              key={id}
            >
              <Link to={link} smooth duration={500}>
                {link}
              </Link>

            </li>
          ))
        }
      </ul>

      <div
        className='md:hidden cursor-pointer text-gray-500 pr-4 z-10'
        onClick={() => setNav(!nav)}
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {
        nav && (
          <ul className='absolute top-0 left-0 h-screen w-full bg-gradient-to-b from-black to-gray-800
              flex flex-col justify-center items-center text-gray-500'
          >
            {
              links.map(({ id, link }) => (
                <li key={id}
                  className='cursor-pointer hover:scale-105 duration-200 py-6 capitalize text-4xl'
                >
                  <Link to={link} smooth duration={500}>
                    {link}
                  </Link>
                </li>
              ))
            }
          </ul>
        )
      }

    </div>

  )



}

export default NavBar