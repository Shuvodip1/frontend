import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoNewspaperOutline } from "react-icons/io5";
import { BiCubeAlt, BiImages } from "react-icons/bi";

const Cards = () => {
    const cards = [
        {
            icon: <IoNewspaperOutline />,
            title: 'Corporis voluptates sit',
            desc: 'Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip'
        },
        {
            icon: <BiCubeAlt />,
            title: 'Ullamco laboris ladore pan',
            desc: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt'
        },
        {
            icon: <BiImages />,
            title: 'Labore consequatur',
            desc: 'Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere'
        },
    ]

    return (
        <section className="container">
            <div className="grid grid-cols-12 gap-6 px-5">
                <div className="col-span-4 h-[407.6px] bg-[#1977cc] text-white p-[30px] flex flex-col justify-center items-start gap-8 rounded-md">
                    <div className='font-bold text-4xl'>
                        Why Choose Medilab?
                    </div>
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit Asperiores dolores sed et. Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad corporis.
                    </div>
                    <div className='flex justify-center w-full'>
                        <button className='bg-[#4792D6] py-2 px-8 rounded-full hover:text-[#1977cc] hover:bg-white transition-all duration-500 ease-in-out flex items-center gap-1'>
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
                                <div className='text-[40px] text-[#1977cc]'>
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