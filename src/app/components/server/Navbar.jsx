import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    const navItems = [
        { text: "Home", link: "/#hero" },
        { text: "About", link: "/#about" },
        { text: "Departments", link: "/#departments" },
        { text: "Doctors", link: "/#doctors" },
        { text: "Contact", link: "/#contact" },
    ];
    return (
        <nav className="top-0 fixed w-screen bg-white shadow-lg z-20">
            <div className="container mx-auto flex flex-wrap py-5 flex-col md:flex-row items-center justify-between">
                <Link href={``} className="flex items-center font-extrabold text-[#2c4964] mb-4 md:mb-0 text-3xl">
                HealthNest

                </Link>
                <div className="flex flex-wrap items-center justify-center gap-2">
                    {
                        navItems.map((item, index) =>
                            <li className='p-1 list-none' key={index}>
                                <Link href={item.link} className="text-[#2c4964] text-sm py-2 px-1 hover:text-[#1977cc] hover:border-b-2 hover:border-[#1977cc] transition-all duration-300 ease-in-out">
                                    {item.text}
                                </Link>
                            </li>
                        )
                    }
                    <Link href={'/#appoinment'} className="bg-[#dc4797] py-2 px-6 text-white text-sm rounded-full">
                        Make an Appointment
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar