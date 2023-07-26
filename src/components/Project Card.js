'use client'

import Image from "next/image";
import Link from "next/link";
import TooltipBottom from "@/components/TooltipBottom";
import {SiGithub} from "react-icons/si";
import Button from "@/components/Button";
import {renderBlockContent} from "@/sanity/Render Block Content";
import {useState} from "react";
import {VscGithub, VscOpenPreview , VscCloudDownload} from "react-icons/vsc";
import {techSkills} from "@/components/Technologys";


const ProjectCard = ({data , skills}) => {

    return (
        <div className='max-w-[100%] md:max-h-[100%] bg-customBlue/50 rounded overflow-hidden shadow-lg'>
            <div className='flex md:block md:justify-center'>
                <div className='md:w-[280px] w-[400px] h-[250px] md:h-[300px] text-center shadow-lg shadow-accent-500/50'>
                    <Image src={data.image || '/default.jpg'} alt='' width={400} height={400} className='w-full h-full object-cover' quality={100} />
                </div>

                <div className='pl-4 py-4 lg:w-full md:h-[270px]'>
                    <div className="text-center md:text-left font-semibold text-xl mb-2 flex justify-center md:justify-normal">
                        <p className='tracking-wide capitalize text-white inline-flex'>
                            {data.name}
                        </p>
                    </div>
                    <div className="text-white text-base mb-3 text-center md:text-left h-[100px]">
                        {renderBlockContent(data.content)}
                    </div>
                    <div className="mx-auto mb-2 flex gap-2 justify-start">
                        {data.technology.map((item, index) => {
                            let findSkill = skills.find((skill) => item._ref === skill._id)
                            let findIcon = techSkills.find(icon => icon.name === findSkill.name)
                            return <div key={index}>
                                <TooltipBottom title={findIcon?.name} position='top'>
                                    <span className='text-2xl lg:text-3xl'>{findIcon?.icon}</span>
                                </TooltipBottom>
                            </div>
                        })}
                    </div>

                    <div className='flex justify-center md:justify-end z-50'>
                        <div className='pt-2 inline-flex md:flex md:px-4 gap-2'>
                            <TooltipBottom title={'Github'} position='top'>
                                    <Link href={data.git} target={'_blank'}>
                                <Button icon={<VscGithub className='text-3xl md:text-inherit'/>}/>
                                    </Link>
                            </TooltipBottom>
                            <TooltipBottom title={'Preview'} position='top'>
                                <Button icon={<VscOpenPreview className='text-3xl md:text-inherit'/>}/>
                            </TooltipBottom>
                                {
                                    data.file &&
                                    <Link href={data.file} target={'_blank'}>
                            <TooltipBottom title={'Download'} position='top'>
                                        <Button icon={<VscCloudDownload className='text-3xl md:text-inherit'/>}/>
                            </TooltipBottom>
                                    </Link>
                                }

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default ProjectCard
