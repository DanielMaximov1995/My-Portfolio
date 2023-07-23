'use client'
import React, {useState} from 'react'
import Circles from "@/components/Circles";
import Avatar from "@/components/Avatar";
import Skills from "@/components/skills";
import Education from "@/components/education";

const aboutData = ['skills', 'education']

const About = () => {
    const [index, setIndex] = useState(0);

    return (
        <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
            <Circles/>
            <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
                <div className='flex-1 flex flex-col justify-center'>
                    <h2 className='h2 mt-0 md:mt-auto'>
                        Tech Enthusiast 🧑‍💻 <br className='hidden md:block'/> Master of <span className='text-accent'>Full-Stack</span>
                    </h2>
                    <p className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'>
                        As an enthusiastic tech developer, I take pride in my impressive portfolio of <span className='text-accent font-semibold'>11 Full-Stack
                        projects. </span>
                        Proficient in <span className='text-accent font-semibold'>React.js, Next.Js, NodeJS, and Python,</span> I'm passionate about writing
                        clean code.
                    </p>
                </div>
                <div className='flex flex-col w-full xl:max-w-[48%] h-[480px]'>
                    <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
                        {
                            aboutData.map((item, itemIndex) => {
                                return <div
                                    key={itemIndex}
                                    className={`${index === itemIndex && 'text-accent after:w-[100%] after:bg-red-600 after:transition-all after:duration-300'} cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                                    onClick={() => setIndex(itemIndex)}
                                >
                                    {item}
                                </div>
                            })
                        }
                    </div>
                    <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
                        {index === 0 && <Skills/>}
                        {index === 1 && <Education/>}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About
