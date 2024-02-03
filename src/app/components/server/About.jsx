import React from "react";
import Image from "next/image";
import { BiFingerprint } from "react-icons/bi";
import { GoGift } from "react-icons/go";
import { SiElectron } from "react-icons/si";

const about = () => {
    return (
        <section className="w-full grid grid-cols-5" id="about">
            <Image src="https://firebasestorage.googleapis.com/v0/b/z-tube-53cf1.appspot.com/o/Doctor%20Profile%2Fabout_img.jpg?alt=media&token=233ea35d-efbe-4f80-b63e-b536caf63700" width={611.2} height={541.6} alt="Picture of the author" className="col-span-2 w-full h-full" />
            <div className="flex flex-col gap-10 p-12 col-span-3">
                <div className="flex flex-col gap-4">
                    <h1 className="font-extrabold text-[28px] text-[#2c4964]">
                    “Committed to Your Health: Our Hospital’s Journey”
                    </h1>
                    <p>
                    We are a healthcare institution dedicated to providing top-notch medical services in a compassionate environment. Our team of experienced professionals is committed to promoting health and well-being. We strive to deliver personalized care, ensuring every patient feels valued and cared for. Your health is our mission.                    </p>
                </div>
                <div className="flex justify-start items-center gap-5 group/fingerprint">
                    <div className="flex items-center justify-center p-4 border-2 border-[#8dc2f1] text-[#1977cc] group-hover/fingerprint:bg-[#1977cc] group-hover/fingerprint:text-white group-hover/fingerprint:border-[#1977cc] transition-all duration-500 ease-in-out text-3xl rounded-full">
                        <BiFingerprint />
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="text-[#343a40] font-bold">Secure Care:</div>
                        <div>Your Health Data, Safeguarded with Us. Trust in our commitment to privacy and data protection.</div>
                    </div>
                </div>
                <div className="flex justify-start items-center gap-5 group/fingerprint">
                    <div className="flex items-center justify-center p-4 border-2 border-[#8dc2f1] text-[#1977cc] group-hover/fingerprint:bg-[#1977cc] group-hover/fingerprint:text-white group-hover/fingerprint:border-[#1977cc] transition-all duration-500 ease-in-out text-3xl rounded-full">
                        <GoGift />
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="text-[#343a40] font-bold">Gift of Health:</div>
                        <div>Experience our care packages tailored to your wellness journey. Your health, our priority.</div>
                    </div>
                </div>
                <div className="flex justify-start items-center gap-5 group/fingerprint">
                    <div className="flex items-center justify-center p-4 border-2 border-[#8dc2f1] text-[#1977cc] group-hover/fingerprint:bg-[#1977cc] group-hover/fingerprint:text-white group-hover/fingerprint:border-[#1977cc] transition-all duration-500 ease-in-out text-3xl rounded-full">
                        <SiElectron />
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="text-[#343a40] font-bold">Atomic Precision:</div>
                        <div>Harnessing advanced technology for accurate diagnostics and treatments. Your health, our science.</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default about;
