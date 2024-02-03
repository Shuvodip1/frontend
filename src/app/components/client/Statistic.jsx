"use client";
import React from "react";
import CountUp from "react-countup";
import { FaMapLocationDot } from "react-icons/fa6";

const Statistic = () => {
    return (
        <section className="bg-[#f1f7fd] flex justify-center gap-6 py-[70px] -my-[60px]">
            <div className="text-4xl px-16 py-10 w-[306px] h-[130px] flex justify-center items-center flex-col gap-1 bg-white rounded-md relative">
                <div className="absolute -top-5 flex items-center justify-center p-4 bg-[#1977cc] text-white rounded-full text-xl">
                    <FaMapLocationDot />
                </div>
                <CountUp end={100} duration={10} />
                <p className="text-xs">Doctor</p>
            </div>
            <div className="text-4xl px-16 py-10 w-[306px] h-[130px] flex justify-center items-center flex-col gap-1 bg-white rounded-md relative">
                <div className="absolute -top-5 flex items-center justify-center p-4 bg-[#1977cc] text-white rounded-full text-xl">
                    <FaMapLocationDot />
                </div>
                <CountUp end={100} duration={10} />
                <p className="text-xs">Departments</p>
            </div>
            <div className="text-4xl px-16 py-10 w-[306px] h-[130px] flex justify-center items-center flex-col gap-1 bg-white rounded-md relative">
                <div className="absolute -top-5 flex items-center justify-center p-4 bg-[#1977cc] text-white rounded-full text-xl">
                    <FaMapLocationDot />
                </div>
                <CountUp end={100} duration={10} />
                <p className="text-xs">Research Labs</p>
            </div>
            <div className="text-4xl px-16 py-10 w-[306px] h-[130px] flex justify-center items-center flex-col gap-1 bg-white rounded-md relative">
                <div className="absolute -top-5 flex items-center justify-center p-4 bg-[#1977cc] text-white rounded-full text-xl">
                    <FaMapLocationDot />
                </div>
                <CountUp end={100} duration={10} />
                <p className="text-xs">Awards</p>
            </div>
        </section>
    );
};

export default Statistic;
