'use client'
import React, { useState } from 'react'
import Circles from "@/components/Circles";
import Avatar from "@/components/Avatar";
import Skills from "@/components/skills";
import Education from "@/components/education";
import Button from "@/components/Button";
import Link from "next/link";
import Icon from "@/components/Icon";
import IconButton from "@/components/IconButton";
import {renderBlockContent} from "@/sanity/Render Block Content";
import Image from "next/image";

const aboutData = ['skills', 'education']

const About = (props) => {
    const {skills , education , content} = props
    const [index, setIndex] = useState(0);

    let iconButton = <Image src={content.image} alt='Download Daniel Maximov Resume' width={30} height={30}/>

    return (
        <div className='h-full bg-primary/30 md:py-36 pt-36 text-center xl:text-left'>
            <Circles />
            <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6 z-50'>
                <div className='flex-1 flex flex-col justify-center'>
                    <h2 className='h2 mt-0 md:mt-auto'>
                        {renderBlockContent(content.title)}
                    </h2>
                    <div className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-4 px-2 xl:px-0'>
                        {renderBlockContent(content.content)}
                    </div>
                        <Link href={content.file} target='_blank' className='mb-4'>
                            <Button classes='bg-accent text-primary' icon={iconButton}>Download Resume</Button>
                        </Link>
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
                    <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start z-50'>
                        {index === 0 && <Skills skills={skills}/>}
                        {index === 1 && <Education education={education}/>}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About
