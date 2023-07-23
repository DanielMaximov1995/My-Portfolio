'use client'

import Image from "next/image";
import TooltipBottom from "@/components/TooltipBottom";
import {SiGithub} from "react-icons/si";
import {AiOutlineCloudDownload} from "react-icons/ai";
import Button from "@/components/Button";


const ProjectCard = ({data}) => {

    return (
        <div className='max-w-[50%] bg-customBlue/50 rounded overflow-hidden shadow-lg'>
                <Image src={data.pic} alt='' width={400} height={100} className='w-full' quality={100}/>
            <div className='px-2 py-4'>
                <div className="font-bold text-xl mb-2">{data.name}</div>
                <p className="text-white text-base">
                    {data.description}
                </p>
            </div>
            <div className="mx-auto flex justify-center pt-4 pb-2 gap-2">
                {
                    data.tech.map((item , index) => {
                        let icon = <span className='text-2xl lg:text-3xl'>{item.icon}</span>
                        return <TooltipBottom title={item.name} content={icon} position='top'/>
                    })
                }
            </div>
            <div className='pt-4 flex gap-2 p-4'>
                <Button icon={<SiGithub/>}>GitHub</Button>
                <Button icon={<AiOutlineCloudDownload/>}>Download</Button>

            </div>
        </div>
    )
}
export default ProjectCard
