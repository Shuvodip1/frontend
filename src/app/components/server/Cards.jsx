import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoNewspaperOutline } from "react-icons/io5";
import { BiCubeAlt, BiImages } from "react-icons/bi";

const Cards = () => {
    const cards = [
        {
            icon: <IoNewspaperOutline />,
            title: 'Latest Health News',
            desc: 'Stay informed with our hospital updates and breakthroughs.'
        },
        {
            icon: <BiCubeAlt />,
            title: '3D Health Vision',
            desc: 'Experience comprehensive, personalized healthcare in a new, innovative dimension.'
        },
        {
            icon: <BiImages />,
            title: 'BiImages',
            desc: ' Visualizing Health with Advanced Medical Imaging. Experience clarity in diagnostics and treatment.'
        },
    ]

    return (
        <section className="container">
            <div className="grid grid-cols-12 gap-6 px-5">
                <div className="col-span-4 h-[407.6px] bg-[#dc4797] text-white p-[30px] flex flex-col justify-center items-start gap-8 rounded-md">
                    <div className='font-bold text-4xl'>
                        Why Choose HealthNest?
                    </div>
                    <div>
                    Choose our hospital for personalized, compassionate healthcare. Our advanced facilities and dedicated staff prioritize your health, offering comprehensive services and innovative treatments. Experience the difference with us, where your wellbeing is our mission.                    </div>
                    <div className='flex justify-center w-full'>
                        <button className='bg-[#252d35] py-2 px-8 rounded-full hover:text-[#1977cc] hover:bg-white transition-all duration-500 ease-in-out flex items-center gap-1'>
                            <span>
                                Learn More
                            </span>
                            <MdKeyboardArrowRight />
                        </button>
                    </div>
                </div>
                <div className='col-span-8 grid grid-cols-12 gap-6 items-center'>
                    {
                        cards.map((card, index) =>
                            <div className="col-span-4 h-[311.5px] p-10 bg-white shadow-md rounded-md text-center flex flex-col items-center justify-center gap-8" key={index}>
                                <div className='text-[40px] text-[#d54949]'>
                                    {card.icon}
                                </div>
                                <div className='font-bold text-xl'>
                                    {card.title}
                                </div>
                                <div className=''>
                                    {card.desc}
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default Cards