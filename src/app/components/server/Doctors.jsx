import React from "react";
import Image from "next/image";
import {
    FaTwitter,
    FaFacebookF,
    FaInstagram,
    FaLinkedin,
} from "react-icons/fa";

const Doctors = () => {
    return (
        <section className='container flex flex-col items-center justify-center gap-[30px]' id="doctors">
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
            <div className="flex flex-wrap justify-center gap-10">
                <div className="w-[636px] h-[233px] shadow-md flex justify-evenly items-center group cursor-pointer">
                    <Image
                        src="https://firebasestorage.googleapis.com/v0/b/z-tube-53cf1.appspot.com/o/Doctor%20Profile%2Fdoctors-testimonial-1.jpg?alt=media&token=16b83d78-1ff3-4417-9dc3-74a5eedb0328"
                        className="rounded-full group-hover:scale-110 duration-300"
                        width={173}
                        height={173}
                        alt="Picture of the author"
                    />
                    <div>
                        <h2 className="text-1xl font-semibold">Walter White</h2>
                        <p className="my-2">Chief Medical Officer</p>

                        <div className="mt-5 flex gap-5">
                            <FaTwitter
                                size={35}
                                className="bg-[#a0bcd5] text-white hover:bg-[#1977cc] duration-300 rounded-full p-2"
                            />
                            <FaFacebookF
                                size={35}
                                className="bg-[#a0bcd5] text-white hover:bg-[#1977cc] duration-300 rounded-full p-2"
                            />
                            <FaInstagram
                                size={35}
                                className="bg-[#a0bcd5] text-white hover:bg-[#1977cc] duration-300 rounded-full p-2"
                            />
                            <FaLinkedin
                                size={35}
                                className="bg-[#a0bcd5] text-white hover:bg-[#1977cc] duration-300 rounded-full p-2"
                            />
                        </div>
                    </div>
                </div>
                <div className="w-[636px] h-[233px] shadow-md flex justify-evenly items-center group cursor-pointer">
                    <Image
                        src="https://firebasestorage.googleapis.com/v0/b/z-tube-53cf1.appspot.com/o/Doctor%20Profile%2Fdoctors-testimonial-2.jpg?alt=media&token=781274a2-a1ae-428b-9da9-245379995f21"
                        className="rounded-full group-hover:scale-110 duration-300"
                        width={173}
                        height={173}
                        alt="Picture of the author"
                    />
                    <div>
                        <h2 className="text-1xl font-semibold">Dr. Isabella Müller</h2>
                        <p className="my-2">Chief Medical Officer</p>

                        <div className="mt-5 flex gap-5">
                            <FaTwitter
                                size={35}
                                className="bg-[#a0bcd5] text-white hover:bg-[#1977cc] duration-300 rounded-full p-2"
                            />
                            <FaFacebookF
                                size={35}
                                className="bg-[#a0bcd5] text-white hover:bg-[#1977cc] duration-300 rounded-full p-2"
                            />
                            <FaInstagram
                                size={35}
                                className="bg-[#a0bcd5] text-white hover:bg-[#1977cc] duration-300 rounded-full p-2"
                            />
                            <FaLinkedin
                                size={35}
                                className="bg-[#a0bcd5] text-white hover:bg-[#1977cc] duration-300 rounded-full p-2"
                            />
                        </div>
                    </div>
                </div>
                <div className="w-[636px] h-[233px] shadow-md flex justify-evenly items-center group cursor-pointer">
                    <Image
                        src="https://firebasestorage.googleapis.com/v0/b/z-tube-53cf1.appspot.com/o/Doctor%20Profile%2Fdoctors-testimonial-3.jpg?alt=media&token=d21e08f4-fbee-494e-8c24-56ddc1cec58c"
                        className="rounded-full group-hover:scale-110 duration-300"
                        width={173}
                        height={173}
                        alt="Picture of the author"
                    />
                    <div>
                        <h2 className="text-1xl font-semibold">Dr. Lucas Lefevre</h2>
                        <p className="my-2">Chief Medical Officer</p>

                        <div className="mt-5 flex gap-5">
                            <FaTwitter
                                size={35}
                                className="bg-[#a0bcd5] text-white hover:bg-[#1977cc] duration-300 rounded-full p-2"
                            />
                            <FaFacebookF
                                size={35}
                                className="bg-[#a0bcd5] text-white hover:bg-[#1977cc] duration-300 rounded-full p-2"
                            />
                            <FaInstagram
                                size={35}
                                className="bg-[#a0bcd5] text-white hover:bg-[#1977cc] duration-300 rounded-full p-2"
                            />
                            <FaLinkedin
                                size={35}
                                className="bg-[#a0bcd5] text-white hover:bg-[#1977cc] duration-300 rounded-full p-2"
                            />
                        </div>
                    </div>
                </div>
                <div className="w-[636px] h-[233px] shadow-md flex justify-evenly items-center group cursor-pointer">
                    <Image
                        src="https://firebasestorage.googleapis.com/v0/b/z-tube-53cf1.appspot.com/o/Doctor%20Profile%2Fdoctors-testimonial-4.jpg?alt=media&token=e668a98d-318b-49ff-b1a6-b98f5c429666"
                        className="rounded-full group-hover:scale-110 duration-300"
                        width={173}
                        height={173}
                        alt="Picture of the author"
                    />
                    <div>
                        <h2 className="text-1xl font-semibold">Dr. Sofia Rossi</h2>
                        <p className="my-2">Chief Medical Officer</p>

                        <div className="mt-5 flex gap-5">
                            <FaTwitter
                                size={35}
                                className="bg-[#a0bcd5] text-white hover:bg-[#1977cc] duration-300 rounded-full p-2"
                            />
                            <FaFacebookF
                                size={35}
                                className="bg-[#a0bcd5] text-white hover:bg-[#1977cc] duration-300 rounded-full p-2"
                            />
                            <FaInstagram
                                size={35}
                                className="bg-[#a0bcd5] text-white hover:bg-[#1977cc] duration-300 rounded-full p-2"
                            />
                            <FaLinkedin
                                size={35}
                                className="bg-[#a0bcd5] text-white hover:bg-[#1977cc] duration-300 rounded-full p-2"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Doctors;
