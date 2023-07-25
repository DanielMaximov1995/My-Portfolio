'use client'

import Circles from "@/components/Circles";
import Bulb from "@/components/Bulb";
import React, {useState} from "react";
import {SiExpress, SiMongodb, SiNextdotjs, SiReact} from "react-icons/si";
import {FaNode} from "react-icons/fa";
import ProjectsSlider from "@/components/ProjectsSlider";
import { techSkills} from "@/components/Technologys";

const projectsData = [
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
        tech: [{name: 'Next.Js', icon: <SiNextdotjs/>}, {
            name: 'MongoDB',
            icon: <SiMongodb/>
        }],
        pic: '/thumb2.jpg',
        git: '',
        download: ''
    },
    {
        name: 'title3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et\n' +
            '                    perferendis eaque, exercitationem praesentium nihil.',
        tech: [{name: 'Next.Js', icon: <SiNextdotjs/>}, {
            name: 'MongoDB',
            icon: <SiMongodb/>
        }],
        pic: '/thumb3.jpg',
        git: '',
        download: ''
    },
]

const Projects = (props) => {
    const { projects } = props

    return (
        <div className='h-full bg-primary/30 md:py-36 pt-36 text-center xl:text-left'>
            <Circles/>
            <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
                <div className='flex-1 flex flex-col justify-center'>
                    <h2 className='h2 md:mt-0 mt-4 md:mt-auto'>
                        My Projects <span className='text-accent'>.</span>
                    </h2>
                    <p className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'>
                        Mastering React, Redux, Node.Js, Express.JS, and MongoDB, I crafted dynamic web solutions.
                        Additionally, I excelled in real-time object detection using OpenCV, showcasing my passion
                        for innovation and enhancing user experiences.
                    </p>
                </div>
                <div className='flex flex-col w-full xl:max-w-[65%] h-[480px] z-50'>
                    <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
                        <div className='w-full z-10'>
                            <ProjectsSlider data={projectsData}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='-z-10'>
                <Bulb/>
            </div>
        </div>
    )
}
export default Projects
