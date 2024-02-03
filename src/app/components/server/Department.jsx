import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from 'next/image'

const Department = () => {
    return (
        <section className='container flex flex-col items-center justify-center gap-[30px]'id='departments'>
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
                    Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
                </div>
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
                                <p className='text-[#777777] italic'>
                                    Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka
                                </p>
                                <p>
                                    Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero
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
                                Et blanditiis nemo veritatis excepturi
                            </h1>
                            <div className="flex flex-col gap-5">
                                <p className='text-[#777777] italic'>
                                    Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka
                                </p>
                                <p>
                                    Ea ipsum voluptatem consequatur quis est. Illum error ullam omnis quia et reiciendis sunt sunt est. Non aliquid repellendus itaque accusamus eius et velit ipsa voluptates. Optio nesciunt eaque beatae accusamus lerode pakto madirna desera vafle de nideran pal
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
                                Impedit facilis occaecati odio neque aperiam sit
                            </h1>
                            <div className="flex flex-col gap-5">
                                <p className='text-[#777777] italic'>
                                    Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka
                                </p>
                                <p>
                                    Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero
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
                                Cardiology
                            </h1>
                            <div className="flex flex-col gap-5">
                                <p className='text-[#777777] italic'>
                                    Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka
                                </p>
                                <p>
                                    Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero
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
                                Cardiology
                            </h1>
                            <div className="flex flex-col gap-5">
                                <p className='text-[#777777] italic'>
                                    Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka
                                </p>
                                <p>
                                    Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero
                                </p>
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