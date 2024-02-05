"use client";
import React from "react";
import CountUp from "react-countup";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaUserDoctor } from "react-icons/fa6";
import { ImLab } from "react-icons/im";
import { FaAward } from "react-icons/fa";



const Statistic = () => {
    return (
        <section className="bg-[#f1f7fd] flex justify-center gap-6 py-[70px] -my-[60px]">
            <div className="text-4xl px-16 py-10 w-[306px] h-[130px] flex justify-center items-center flex-col gap-1 bg-white rounded-md relative">
                <div className="absolute -top-5 flex items-center justify-center p-4 bg-[#d54949] text-white rounded-full text-xl">
                <FaUserDoctor />

                </div>
                <CountUp end={100} duration={10} />
                <p className="text-xs">Doctor</p>
            </div>
            <div className="text-4xl px-16 py-10 w-[306px] h-[130px] flex justify-center items-center flex-col gap-1 bg-white rounded-md relative">
                <div className="absolute -top-5 flex items-center justify-center p-4 bg-[#d54949] text-white rounded-full text-xl">
                    <FaMapLocationDot />
                </div>
                <CountUp end={5} duration={10} />
                <p className="text-xs">Departments</p>
            </div>
            <div className="text-4xl px-16 py-10 w-[306px] h-[130px] flex justify-center items-center flex-col gap-1 bg-white rounded-md relative">
                <div className="absolute -top-5 flex items-center justify-center p-4 bg-[#d54949] text-white rounded-full text-xl">
                <ImLab />

                </div>
                <CountUp end={19} duration={10} />
                <p className="text-xs">Research Labs</p>
            </div>
            <div className="text-4xl px-16 py-10 w-[306px] h-[130px] flex justify-center items-center flex-col gap-1 bg-white rounded-md relative">
                <div className="absolute -top-5 flex items-center justify-center p-4 bg-[#d54949] text-white rounded-full text-xl">
                <FaAward />

                </div>
                <CountUp end={55} duration={10} />
                <p className="text-xs">Awards</p>
            </div>
        </section>
    );
};

export default Statistic;
