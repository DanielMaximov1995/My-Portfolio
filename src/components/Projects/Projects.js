'use client'

import Circles from "@/components/Circles";
import ProjectsSlider from "@/components/ProjectsSlider";
import Bulb from "@/components/Bulb";
import React, {useState} from "react";
import Skills from "@/components/skills";
import Education from "@/components/education";
import ProjectCard from "@/components/Project Card";
import {SiExpress, SiMongodb, SiNextdotjs, SiReact} from "react-icons/si";
import {FaNode} from "react-icons/fa";

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
    const [index, setIndex] = useState(0);

    return (
        <div className='h-full bg-primary/30 py-36 flex items-center'>
            <Circles/>
            <div className='container mx-auto'>
                <div className='flex flex-col xl:flex-row gap-x-8'>
                    {/*    text*/}
                    <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
                        <h2 className='h2 xl:mt-8'>My Projects <span className='text-accent'>.</span></h2>
                        <p className='mb-4 max-w-[400px] mx-auto lg:mx-0'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dignissim semper urna at
                            tincidunt. Nunc risus augue, cursus non laoreet ac, elementum ut augue.
                        </p>
                    </div>
                    {/*    slider*/}
                    <div className='flex flex-col w-full xl:max-w-[60%] h-[480px]'>
                        <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
                            {
                                langData.map((item, itemIndex) => {
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
                            <div className='flex flex-row gap-5'>
                                {
                                    projects.map((project, projectIndex) => {
                                        return <ProjectCard key={projectIndex} data={project}/>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    {/*    <ProjectsSlider/>*/}
                </div>
            </div>
            <Bulb/>
        </div>
    )
}
export default Projects
