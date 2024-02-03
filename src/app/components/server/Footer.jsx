import React from "react";
import {
    FaTwitter,
    FaFacebookF,
    FaInstagram,
    FaSkype,
    FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <footer className="text-gray-600 body-font shadow-inner">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap md:text-left text-center order-first">
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4 text-sm">
                            <h2 className="title-font font-medium text-[#444444] tracking-widest text-3xl mb-3">
                                Medilab
                            </h2>
                            <p>
                                739/10 Kalyangarh <br />
                                Ashoknagar, wB 743272 <br />
                                United States
                            </p>
                            <p className="mt-8">
                                <b>Phone:</b> +91 70741 81267 <br />
                                <b>Email:</b> medilab@gmail.com
                            </p>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-[#444444] tracking-widest text-1xl mb-3">
                                CATEGORIES
                            </h2>
                            <nav className="list-none mb-10">
                                <li className="cursor-pointer mt-2">
                                    <a className="text-gray-600 hover:text-gray-800">First Link</a>
                                </li>
                                <li className="cursor-pointer mt-2">
                                    <a className="text-gray-600 hover:text-gray-800">Second Link</a>
                                </li>
                                <li className="cursor-pointer mt-2">
                                    <a className="text-gray-600 hover:text-gray-800">Third Link</a>
                                </li>
                                <li className="cursor-pointer mt-2">
                                    <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-[#444444] tracking-widest text-1xl mb-3">
                                CATEGORIES
                            </h2>
                            <nav className="list-none mb-10">
                                <li className="cursor-pointer mt-2">
                                    <a className="text-gray-600 hover:text-gray-800">First Link</a>
                                </li>
                                <li className="cursor-pointer mt-2">
                                    <a className="text-gray-600 hover:text-gray-800">Second Link</a>
                                </li>
                                <li className="cursor-pointer mt-2">
                                    <a className="text-gray-600 hover:text-gray-800">Third Link</a>
                                </li>
                                <li className="cursor-pointer mt-2">
                                    <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                                SUBSCRIBE
                            </h2>
                            <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                                <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                                    <label
                                        htmlFor="footer-field"
                                        className="leading-7 text-sm text-gray-600"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="text"
                                        id="footer-field"
                                        name="footer-field"
                                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                </div>
                                <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-[#298ce5] border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-5 py-6 bg-[#f1f7fd] flex items-center justify-between">
                   
                    <span className="flex items-center justify-end gap-4">
                        <a className="bg-[#1977cc] text-white p-2 rounded-full text-lg">
                            <FaTwitter />
                        </a>
                        <a className="bg-[#1977cc] text-white p-2 rounded-full text-lg">
                            <FaFacebookF />
                        </a>
                        <a className="bg-[#1977cc] text-white p-2 rounded-full text-lg">
                            <FaInstagram />
                        </a>
                        <a className="bg-[#1977cc] text-white p-2 rounded-full text-lg">
                            <FaSkype />
                        </a>
                        <a className="bg-[#1977cc] text-white p-2 rounded-full text-lg">
                            <FaLinkedinIn />
                        </a>
                    </span>
                </div>
            </footer>
        </>
    );
};

export default Footer;
