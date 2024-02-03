import React from 'react'

const Hero = () => {
    return (
        <section className={`h-[90vh] flex items-center justify-start -mb-36`} id='hero'>
            <div className="mx-24 px-3 py-0 flex md:flex-row flex-col items-center justify-start">
                <div className="flex justify-start flex-col items-start gap-[10px]">
                    <h1 className="text-[#2c4964] uppercase text-5xl font-bold">
                        WELCOME TO MEDILAB
                    </h1>
                    <p className="text-[#2c4964] text-2xl">
                        We are team of talented designers making websites with Bootstrap
                    </p>
                    <button className="bg-[#1977cc] py-3 px-9 mt-5 text-sm text-white rounded-full uppercase">
                        get started
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Hero