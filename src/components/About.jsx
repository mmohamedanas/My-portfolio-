import React from 'react'
import "../App.css"
import CertificationsSlider from './CertificationsSlider';



const About = () => {
    return (
        <div
            name="about"
            className='
           w-full lg:h-screen
           bg-gradient-to-b 
          from-gray-800
          to-black
          text-white
          py-6'
        >
            <div
                className='max-w-screen-lg 
              p-4 mx-auto flex flex-col 
              justify-center w-full h-full'
            >
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
                </div>
                <div>


                    <div className='grid grid-cols-1 lg:grid-cols-2'>
                        <div className='p-10 pl-0 mt-4'>
                            <p>


                                I hold a B.Sc. in Mathematics from Jamal Mohamed College in Trichy and completed a 6-month Full Stack Development course at Login360 in Chennai. I further honed my skills with a 3-month Frontend Internship at Shenchola Technology Solutions in Trichy.
                                With a strong foundation in both technical and
                                analytical skills, I am passionate about leveraging
                                my expertise to create impactful and innovative web
                                solutions.
                            </p>
                            <div className='mt-4'>
                                
                               <CertificationsSlider/>
   

                            </div>


                        </div>
                        <div>
                            <div>
                                <header className='font-semibold text-2xl pt-0 pr-0 pb-[20px] pl-[30px]'>EDUCATION</header>
                            </div>
                            <div className='border-l-[2px] border-gray-500 py-0 px-8 relative'>


                                <div className='h-4 w-4 rounded-full absolute left-[-9px] top-4 bg-white'></div>
                                <div className=' p-[20px] cursor-pointer 
                                                rounded-md          
                                                border-none
                                                bg-gradient-to-t from-gray-900 to-gray-800
                                                duration-300
                                                hover:shadow-2xl 
                                                mb-[20px]
                                                education'
                                >
                                    <p className='font-bold'>2020 - 2023</p>
                                    <p className='font-semibold'>Jamal Mohamed College</p>
                                    <p>B.Sc.Mathematics | 80%</p>
                                    <p>Tiruchirappalli, TN</p>
                                </div>
                                <div className='h-4 w-4 rounded-full absolute left-[-9px] top-[40%] bg-white'></div>

                                <div className='  p-[20px] cursor-pointer 
                                                rounded-md          
                                                border-none
                                                bg-gradient-to-t from-gray-900 to-gray-900
                                                duration-300
                                                hover:shadow-2xl 
                                                mb-[20px] 
                                                education'
                                >

                                    <p className='font-bold'>2018 - 2020</p>
                                    <p className='font-semibold'>Govt Higher Secondary School</p>
                                    <p>HSC | 70%</p>
                                    <p>Tenkasi, TN</p>
                                </div>
                                <div className='h-4 w-4 rounded-full absolute left-[-9px] bottom-24 bg-white'></div>

                                <div className=' p-[20px] cursor-pointer 
                                                rounded-md          
                                                border-none
                                                bg-gradient-to-t from-gray-900 to-gray-900
                                                duration-300
                                                hover:shadow-2xl 
                                                mb-[20px]
                                                education'
                                >
                                    <p className='font-bold'>2017 - 2018</p>
                                    <p className='font-semibold'>Muslim High School</p>
                                    <p>SSLC | 90%</p>
                                    <p>Tenkasi, TN</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




            </div>

        </div>

    )
}

export default About