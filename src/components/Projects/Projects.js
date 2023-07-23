'use client'

import Circles from "@/components/Circles";
import Bulb from "@/components/Bulb";
import React, {useState} from "react";
import {SiExpress, SiMongodb, SiNextdotjs, SiReact} from "react-icons/si";
import {FaNode} from "react-icons/fa";
import ProjectsSlider from "@/components/ProjectsSlider";
import Skills from "@/components/skills";
import Education from "@/components/education";

const langData = ['All', 'Web & App', 'Python']

const projects = [
    {
        name: 'title1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et\n' +
            '                    perferendis eaque, exercitationem praesentium nihil.',
        tech: [{name: 'React.Js', icon: <SiReact/>}, {name: 'Node.Js', icon: <FaNode/>}, {
            name: 'MongoDB',
            icon: <SiMongodb/>
        }, {
            name: 'Express.Js',
            icon: <SiExpress/>
        }],
        pic: '/thumb1.jpg',
        git: '',
        download: ''
    },
    {
        name: 'title2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et\n' +
            '                    perferendis eaque, exercitationem praesentium nihil.',
        tech: [{name: 'Next.Js', icon: <SiNextdotjs/>}, {name: 'MongoDB',
            icon: <SiMongodb/>}],
        pic: '/thumb2.jpg',
        git: '',
        download: ''
    },
    {
        name: 'title3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et\n' +
            '                    perferendis eaque, exercitationem praesentium nihil.',
        tech: [{name: 'Next.Js', icon: <SiNextdotjs/>}, {name: 'MongoDB',
            icon: <SiMongodb/>}],
        pic: '/thumb3.jpg',
        git: '',
        download: ''
    },
]

const Projects = () => {
    return (
        <div className='h-full bg-primary/30 py-36 flex items-center'>
            <Circles/>
                <div className='container mx-auto mt-40 md:mt0'>
                    <div className='flex flex-col xl:flex-row gap-x-8 '>
                        <div className='text-accent flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0 '>
                            <h2 className='h2 xl:mt-8 text-white'>My Projects <span className='text-accent'>.</span></h2>
                            <p className='mb-4 max-w-[400px] mx-auto lg:mx-0'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dignissim semper urna at
                                tincidunt. Nunc risus augue, cursus non laoreet ac, elementum ut augue.
                            </p>
                        </div>
                        <div className='flex flex-col w-full xl:max-w-[60%] h-[480px]'>
                       <div className='w-full z-10'>
                           <ProjectsSlider data={projects}/>
                       </div>
                        </div>
                    </div>
                </div>
            <Bulb/>
        </div>
    )
}
export default Projects
