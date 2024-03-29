"use client"
import { BiUpArrowAlt } from 'react-icons/bi'
import React from 'react'

const ScrollToTop = () => {
    const [visible, setVisible] = React.useState(false)

    const moveToTop = () => {
        if (typeof (window) !== undefined) {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }
    }

    React.useEffect(() => {
        if (typeof (window) !== undefined) {
            window.addEventListener("scroll", () => {
                window.scrollY === 0 ? setVisible(false) : setVisible(true);
            });
        }
    }, [])

    return (
        visible ? <div className='z-20 fixed bottom-5 right-7 text-2xl p-1 bg-[#2c4964] text-white rounded-md cursor-pointer' onClick={moveToTop}>
            <BiUpArrowAlt />
        </div> : null
    )

}

export default ScrollToTop