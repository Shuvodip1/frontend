import React from 'react'

const Appointment = () => {
    return (
        <section className='bg-[#f1f7fd] py-[60px] -my-[60px]' id='appoinment'>
            <div className='container flex flex-col items-center justify-center gap-[30px]'>
                <div className='flex flex-col items-center justify-center gap-5'>
                    <div className='text-[#2c4964] text-3xl font-bold' id='title'>
                        <div className='mb-5'>
                            Make an Appointment
                        </div>
                        <div className='flex items-center justify-center'>
                            <div className='h-[1px] w-[120px] bg-[#ddd] flex items-center justify-center'>
                                <div className='h-[3px] w-[40px] bg-[#1977cc]'></div>
                            </div>
                        </div>
                    </div>
                    <div className='text-center'>
                        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
                    </div>
                </div>
                <form className='grid grid-cols-3 w-full gap-6'>
                    <input type='text' className='h-11 p-[10px] border border-[#dee2e6] text-sm text-[#212529] placeholder:text-[#212529]' placeholder='Your Name' />
                    <input type='text' className='h-11 p-[10px] border border-[#dee2e6] text-sm text-[#212529] placeholder:text-[#212529]' placeholder='Your Email' />
                    <input type='text' className='h-11 p-[10px] border border-[#dee2e6] text-sm text-[#212529] placeholder:text-[#212529]' placeholder='Your Phone' />
                    <input type='text' className='h-11 p-[10px] border border-[#dee2e6] text-sm text-[#212529] placeholder:text-[#212529]' placeholder='Appointment Data' />
                    <input type='text' className='h-11 p-[10px] border border-[#dee2e6] text-sm text-[#212529] placeholder:text-[#212529]' placeholder='Select Department' />
                    <input type='text' className='h-11 p-[10px] border border-[#dee2e6] text-sm text-[#212529] placeholder:text-[#212529]' placeholder='Select Doctor' />
                    <textarea className='col-span-3 p-[10px] border border-[#dee2e6] text-sm text-[#212529] placeholder:text-[#212529]' rows={5} placeholder='Message(Optional)'></textarea>
                    <div className='col-span-3 flex items-center justify-center'>
                        <button className="bg-[#1977cc] py-3 px-8 text-white text-sm rounded-full">
                            Make an Appointment
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Appointment