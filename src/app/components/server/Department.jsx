import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from 'next/image'

const Department = () => {
    return (
        <section className='container flex flex-col items-center justify-center gap-[30px]' id='departments'>
            <div className='flex flex-col items-center justify-center gap-5'>
                <div className='text-[#2c4964] text-3xl font-bold' id='title'>
                    <div className='mb-5'>
                        Departments
                    </div>
                    <div className='flex items-center justify-center'>
                        <div className='h-[1px] w-[120px] bg-[#ddd] flex items-center justify-center'>
                            <div className='h-[3px] w-[40px] bg-[#1977cc]'></div>
                        </div>
                    </div>
                </div>
                <div className='text-center'>
                    Explore our diverse departments, each dedicated to specific areas of healthcare. Our specialized teams of experienced professionals are committed to providing comprehensive care. From cardiology to neurology, we cover a wide range of medical fields. Discover the department that suits your healthcare needs                </div>
            </div>
            <Tabs defaultValue="cardiology" className="flex flex-col items-center justify-center">
                <TabsList>
                    <TabsTrigger value="cardiology">Cardiology</TabsTrigger>
                    <TabsTrigger value="neurology">Neurology</TabsTrigger>
                    <TabsTrigger value="hepatology">Hepatology</TabsTrigger>
                    <TabsTrigger value="pediatrics">Pediatrics</TabsTrigger>
                    <TabsTrigger value="eyecare">Eye Care</TabsTrigger>
                </TabsList>
                <TabsContent value="cardiology" className="mt-0">
                    <div className='container py-5 flex items-center gap-4'>
                        <div className="flex flex-col justify-center items-start gap-5">
                            <h1 className="text-2xl font-semibold text-[#2c4964]">
                                Cardiology
                            </h1>
                            <div className="flex flex-col gap-5">
                                <p>
                                    Our Cardiology Department is at the forefront of heart health. With a team of dedicated cardiologists, we provide comprehensive cardiac care, from diagnosis to treatment. We utilize advanced technology for precise diagnostics and innovative treatments. Our patient-centric approach ensures personalized care, prioritizing your heart health. Experience exceptional cardiac care with us.
                                </p>
                            </div>

                        </div>
                        <Image className="object-cover object-center rounded" alt="hero" src={`https://firebasestorage.googleapis.com/v0/b/z-tube-53cf1.appspot.com/o/Doctor%20Profile%2Fdepartments-1.jpg?alt=media&token=41b5f5e1-547c-4198-81ec-09ea2a0c6441`} width={306} height={267.75} />
                    </div>
                </TabsContent>
                <TabsContent value="neurology" className="mt-0">
                    <div className='container py-5 flex items-center gap-4'>
                        <div className="flex flex-col justify-center items-start gap-5">
                            <h1 className="text-2xl font-semibold text-[#2c4964]">
                                Neurology
                            </h1>
                            <div className="flex flex-col gap-5">
                                <p>
                                    Our Neurology Department is dedicated to providing comprehensive neurological care. Our team of expert neurologists specializes in diagnosing and treating a wide range of neurological disorders. We utilize state-of-the-art technology and innovative treatment approaches to ensure the best possible outcomes. Our patient-centered approach ensures personalized care, prioritizing your neurological health. Experience exceptional neurological care with us.
                                </p>
                            </div>

                        </div>
                        <Image className="object-cover object-center rounded" alt="hero" src={`https://firebasestorage.googleapis.com/v0/b/z-tube-53cf1.appspot.com/o/Doctor%20Profile%2Fdepartments-2.jpg?alt=media&token=82477006-84cf-4b97-9e7a-0811991aaebb`} width={306} height={267.75} />
                    </div>
                </TabsContent>
                <TabsContent value="hepatology" className="mt-0">
                    <div className='container py-5 flex items-center gap-4'>
                        <div className="flex flex-col justify-center items-start gap-5">
                            <h1 className="text-2xl font-semibold text-[#2c4964]">
                                Hepatology                            </h1>
                            <div className="flex flex-col gap-5">

                                <p>
                                    Our Hepatology Department is dedicated to the study and treatment of liver diseases. Our team of expert hepatologists specializes in diagnosing and treating a wide range of liver conditions, including hepatitis, cirrhosis, and liver cancer. We utilize advanced diagnostic tools and innovative treatment approaches to ensure the best possible outcomes. Our patient-centered approach ensures personalized care, prioritizing your liver health. Experience exceptional hepatology care with us.
                                </p>
                            </div>

                        </div>
                        <Image className="object-cover object-center rounded" alt="hero" src={`https://firebasestorage.googleapis.com/v0/b/z-tube-53cf1.appspot.com/o/Doctor%20Profile%2Fdepartments-3.jpg?alt=media&token=3c215e87-f46c-4eba-9504-75830f8ec267`} width={306} height={267.75} />
                    </div>
                </TabsContent>
                <TabsContent value="pediatrics" className="mt-0">
                    <div className='container py-5 flex items-center gap-4'>
                        <div className="flex flex-col justify-center items-start gap-5">
                            <h1 className="text-2xl font-semibold text-[#2c4964]">
                            Pediatrics
                            </h1>
                            <div className="flex flex-col gap-5">

                                <p>
                                Our Pediatrics Department is dedicated to providing comprehensive healthcare for children. Our team of pediatricians specializes in the physical, emotional, and developmental health of children from birth to adolescence. We offer a child-friendly environment and a patient-centered approach, ensuring personalized care for our young patients. Our goal is to work with parents to maintain the health and well-being of their children. Experience exceptional pediatric care with us.
                                </p>
                            </div>

                        </div>
                        <Image className="object-cover object-center rounded" alt="hero" src={`https://firebasestorage.googleapis.com/v0/b/z-tube-53cf1.appspot.com/o/Doctor%20Profile%2Fdepartments-4.jpg?alt=media&token=629b77e1-6e69-4b96-9b17-80d6afe9bcd7`} width={306} height={267.75} />
                    </div>
                </TabsContent>
                <TabsContent value="eyecare" className="mt-0">
                    <div className='container py-5 flex items-center gap-4'>
                        <div className="flex flex-col justify-center items-start gap-5">
                            <h1 className="text-2xl font-semibold text-[#2c4964]">
                            Eyecare
                            </h1>
                            <div className="flex flex-col gap-5">
                                
                                <p>
                                Our Eye Care Department is dedicated to providing comprehensive eye health services. Our team of ophthalmologists specializes in diagnosing and treating a wide range of eye conditions, from common vision problems to complex eye diseases. We utilize advanced diagnostic tools and innovative treatment approaches to ensure the best possible outcomes. Our patient-centered approach ensures personalized care, prioritizing your eye health. Experience exceptional eye care with us.                                </p>
                            </div>

                        </div>
                        <Image className="object-cover object-center rounded" alt="hero" src={`https://firebasestorage.googleapis.com/v0/b/z-tube-53cf1.appspot.com/o/Doctor%20Profile%2Fdepartments-5.jpg?alt=media&token=3731dc0d-15ee-4df3-b31f-48b28c596843`} width={306} height={267.75} />
                    </div>
                </TabsContent>
            </Tabs>
        </section>
    )
}

export default Department