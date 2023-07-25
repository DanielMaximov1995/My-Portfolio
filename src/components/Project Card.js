'use client'

import Image from "next/image";
import TooltipBottom from "@/components/TooltipBottom";
import {SiGithub} from "react-icons/si";
import {AiOutlineCloudDownload} from "react-icons/ai";
import Button from "@/components/Button";
import {MdPreview} from "react-icons/md";


const ProjectCard = ({data}) => {
    return (
        <div className='max-w-[100%] md:max-h-[100%] bg-customBlue/50 rounded overflow-hidden shadow-lg'>
            <div className='flex md:block md:justify-center'>
                {/* Image on the left side (for smaller screens) */}
                <div className='md:w-full object-cover'>
                    <Image src={data.pic} alt='' width={400} height={100} className='w-full h-full object-cover' quality={100} />
                </div>

                <div className='px-2 py-4 lg:w-full'>
                    <div className="text-center md:text-left font-semibold text-xl mb-2 flex justify-center md:justify-normal">
                        <p className='tracking-wide capitalize text-white flex'>{data.name} <span className='m-2'><Button icon={<SiGithub />}/></span></p>

                    </div>
                    <p className="text-white text-base mb-3 text-center md:text-left ">
                        {data.description}
                    </p>
                    <div className="mx-auto flex justify-center gap-2">
                        {data.tech.map((item, index) => {
                            let icon = <span className='text-2xl lg:text-3xl'>{item.icon}</span>
                            return <div key={index}>
                                <TooltipBottom title={item.name} content={icon} position='top' />
                            </div>
                        })}
                    </div>

                    <div className='flex justify-end md:justify-around'>
                        <div className='pt-4 inline-flex md:flex md:px-4 gap-2'>
                            <Button icon={<MdPreview />}>Preview</Button>
                            <Button icon={<AiOutlineCloudDownload />}>Download</Button>
                        </div>
                    </div>
                </div>
            </div>


        </div>

    )
}
export default ProjectCard
