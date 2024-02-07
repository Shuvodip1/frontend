import React from 'react'

const Hero = () => {
    return (
        <section className={`h-[90vh] flex items-center justify-start -mb-36`} id='hero'>
            <div className="mx-24 px-3 py-0 flex md:flex-row flex-col items-center justify-start backdrop-blur-md">
                <div className="flex justify-start flex-col items-start gap-[10px]">
                    <h1 className="text-5xl font-bold">
                        WELCOME TO HealthNest
                    </h1>
                    <p className="text-[#121b24] text-2xl">
                    Compassionate Care, Advanced Healing, Your Health is Our Mission.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Hero