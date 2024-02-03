import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { FaRegCircleQuestion } from "react-icons/fa6";

const FAQ = () => {
    return (
        <section className='bg-[#f1f7fd] py-[60px] -my-[60px]'>
            <div className='container flex flex-col items-center justify-center gap-[30px]'>
                <div className='flex flex-col items-center justify-center gap-5'>
                    <div className='text-[#2c4964] text-3xl font-bold' id='title'>
                        <div className='mb-5'>
                            Frequently Asked Questions
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
                <Accordion type="single" collapsible className="w-full px-24 space-y-4 font-[Poppins]">
                    <AccordionItem value="item-1" className="p-5 bg-white rounded-md">
                        <AccordionTrigger className="p-0 text-base font-medium active:hover:text-[#1977cc] hover:text-[#1977cc] hover:no-underline">
                            <p className='flex items-center gap-2'>
                                <FaRegCircleQuestion className='text-lg' />
                                <span>
                                    Is it accessible?
                                </span>
                            </p>
                        </AccordionTrigger>
                        <AccordionContent className="pt-[10px] pb-0 font-light">
                            Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2" className="p-5 bg-white rounded-md">
                        <AccordionTrigger className="p-0 text-base font-medium active:hover:text-[#1977cc] hover:text-[#1977cc] hover:no-underline">
                            <p className='flex items-center gap-2'>
                                <FaRegCircleQuestion className='text-lg' />
                                <span>
                                    Is it styled?
                                </span>
                            </p>
                        </AccordionTrigger>
                        <AccordionContent className="pt-[10px] pb-0 font-light">
                            Yes. It comes with default styles that matches the other
                            components{`&apos;`} aesthetic.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3" className="p-5 bg-white rounded-md">
                        <AccordionTrigger className="p-0 text-base font-medium active:hover:text-[#1977cc] hover:text-[#1977cc] hover:no-underline">
                            <p className='flex items-center gap-2'>
                                <FaRegCircleQuestion className='text-lg' />
                                <span>
                                    Is it animated?
                                </span>
                            </p>
                        </AccordionTrigger>
                        <AccordionContent className="pt-[10px] pb-0 font-light">
                            Yes. It{`'`}s animated by default, but you can disable it if you prefer.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    )
}

export default FAQ