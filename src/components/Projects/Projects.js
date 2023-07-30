'use client'
import Circles from "@/components/Circles";
import Bulb from "@/components/Bulb";
import React, {useState} from "react";
import {SiExpress, SiMongodb, SiNextdotjs, SiReact} from "react-icons/si";
import {FaNode} from "react-icons/fa";
import ProjectsSlider from "@/components/ProjectsSlider";
import { techSkills} from "@/components/Technologys";
import {renderBlockContent} from "@/sanity/Render Block Content";

const Projects = (props) => {
    const { projects , content , skills } = props
    let sortProject = projects.sort((a,b) => b.order - a.order)
    return (
        <div className='h-full bg-primary/30 md:py-20 pt-36 text-center xl:text-left'>
            <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6 z-50'>
                <div className='flex-1 flex flex-col justify-center'>
                    <h2 className='h2 mt-0 md:mt-auto'>
                        {renderBlockContent(content.title)}
                    </h2>
                    <div className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-4 px-2 xl:px-0'>
                        {renderBlockContent(content.content)}
                    </div>
                </div>
                <div className='flex flex-col w-full xl:max-w-[60%] h-[480px]'>
                    <div className='flex flex-col w-full xl:max-w-[60%] h-[480px] z-50'>
                        <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
                            <div className='w-full z-10'>
                                <ProjectsSlider skills={skills} data={sortProject}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Bulb/>
        </div>
    )
}
export default Projects
