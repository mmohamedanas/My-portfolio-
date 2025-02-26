import React from 'react'
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";


const SocialLinks = () => {
    const links = [
        {
            id: 1,
            child: (
                <>
                    LinkedIn <FaLinkedin size={30} />
                </>
            ),

            href: 'https://linked.com',
            style: "rounded-tr-md"
        },
        {
            id: 2,
            child: (
                <>
                    GitHub <FaGithub size={30} />
                </>
            ),
            href: 'https://github.com/mmohamedanas'
        },
        {
            id: 3,
            child: (
                <>
                    Mail <IoMdMail size={30} />

                </>
            ),
            href: 'mailto:uthoufic@gmail.com'
        },
        {
            id: 4,
            child: (
                <>
                    Resume < BsFillPersonLinesFill size={30} />
                </>
            ),
            href: '/Mohamed Anas.pdf',
            style: 'rounded-br-md',
            download: true

        },
    ]
    return (
        <div className='hidden lg:flex flex-col top-[35%] left-0 fixed z-50'>
            <ul>
                {
                    links.map(({ id, child, href, style, download }) => (
                        <li key={id}
                            className={`flex 
                            justify-between 
                            items-center 
                            w-40 h-14 px-4
                            ml-[-100px]
                            hover:ml-[-10px]
                            hover:rounded-md
                            duration-300
                            bg-gray-500 ${style}`}
                        >
                            <a
                                href={href}
                                className='flex 
                                justify-between
                                items-center w-full
                                text-white'
                                target='_blank'
                                download={download}
                                rel="noreferrer"
                                
                            >
                                {child}

                            </a>
                        </li>

                    ))
                }

            </ul>
        </div>
    )
}

export default SocialLinks