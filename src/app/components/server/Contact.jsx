"use client"
import React from 'react'
import { RiMapPinLine } from "react-icons/ri";
import { BsEnvelope } from "react-icons/bs";
import { CiMobile2 } from "react-icons/ci";

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "name": `${e.target[0].value}`,
                "email": `${e.target[1].value}`,
                "subject": `${e.target[2].value}`,
                "message": `${e.target[3].value}`,
            }),
        }
        fetch(`${process.env.BACKEND_URL}/api/contact/`, options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
    };

    return (
        <section className='container flex flex-col items-center justify-center gap-[30px]' id='contact'>
            <div className='flex flex-col items-center justify-center gap-5'>
                <div className='text-[#2c4964] text-3xl font-bold' id='title'>
                    <div className='mb-5'>
                        Contact
                    </div>
                    <div className='flex items-center justify-center'>
                        <div className='h-[1px] w-[120px] bg-[#ddd] flex items-center justify-center'>
                            <div className='h-[3px] w-[40px] bg-[#1977cc]'></div>
                        </div>
                    </div>
                </div>
                <div className='text-center'>
                    Reach out to us for any queries or support. We’re here to help. Contact us via phone, email, or visit us at our location. Your feedback and questions are important to us. Let’s connect and ensure your health and well-being                </div>
            </div>
            <div className='grid grid-cols-3 w-full'>
                <div className='flex flex-col justify-center gap-10'>
                    <div className='flex items-center gap-4 group/location'>
                        <div className='p-2 w-11 h-11 text-xl flex items-center justify-center rounded-full bg-[#d6e9fa] text-[#1977cc] group-hover/location:bg-[#1977cc] group-hover/location:text-[#fff] transition-all duration-500 ease-in-out'>
                            <RiMapPinLine />
                        </div>
                        <div className='flex flex-col justify-start'>
                            <div className='text-[#2c4964] font-semibold text-xl'>Location:</div>
                            <div className='text-sm text-[#4b7dab]'>739/10 Kalyangarh,Ashoknagar,WB 743272</div>
                        </div>
                    </div>
                    <div className='flex items-center gap-4 group/email'>
                        <div className='p-2 w-11 h-11 text-xl flex items-center justify-center rounded-full bg-[#d6e9fa] text-[#1977cc] group-hover/email:bg-[#1977cc] group-hover/email:text-[#fff] transition-all duration-500 ease-in-out'>
                            <BsEnvelope />
                        </div>
                        <div className='flex flex-col justify-start'>
                            <div className='text-[#2c4964] font-semibold text-xl'>Email:</div>
                            <div className='text-sm text-[#4b7dab]'>healthnest@gmail.com</div>
                        </div>
                    </div>
                    <div className='flex items-center gap-4 group/call'>
                        <div className='p-2 w-11 h-11 text-xl flex items-center justify-center rounded-full bg-[#d6e9fa] text-[#1977cc] group-hover/call:bg-[#1977cc] group-hover/call:text-[#fff] transition-all duration-500 ease-in-out'>
                            <CiMobile2 />
                        </div>
                        <div className='flex flex-col justify-start'>
                            <div className='text-[#2c4964] font-semibold text-xl'>Call:</div>
                            <div className='text-sm text-[#4b7dab]'>+91 70740 81267</div>
                        </div>
                    </div>
                </div>
                <form className='flex flex-col gap-3 col-span-2' onSubmit={(e) => handleSubmit(e)}>
                    <div className='grid grid-cols-2 gap-6'>
                        <input type='text' className='border rounded-md h-11 border-[#dee2e6] p-3 focus:outline-none text-sm' placeholder='Your Name' />
                        <input type='text' className='border rounded-md h-11 border-[#dee2e6] p-3 focus:outline-none text-sm' placeholder='Your Email' />
                        <input type='text' className='col-span-2 border rounded-md h-11 border-[#dee2e6] p-3 focus:outline-none text-sm' placeholder='Subject' />
                        <textarea className='col-span-2 border rounded-md border-[#dee2e6] p-3 focus:outline-none text-sm' rows={5} placeholder='Message'></textarea>
                    </div>
                    <div className='flex items-center justify-center'>
                        <button className="bg-[#dc4797] py-3 px-8 text-white text-sm rounded-full" type='submit'>
                            Contact Us
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact