'use client'
import ProjectsBtn from "@/components/ProjectsBtn";
import Avatar from "@/components/Avatar";
import Link from "next/link";
import {renderBlockContent} from "@/sanity/Render Block Content";

const Home = (props) => {
    const {content} = props

    return (
        <div className='h-full md:py-36 '>
            <div className='w-full h-full'>
                <div
                    className='text-center flex flex-col justify-center xl:pt-10 xl:text-left h-screen md:h-full container mx-auto'>
                    <h1 className='h1 mt-0 md:mt-auto mx-auto md:mx-0'>
                        {renderBlockContent(content.title)}
                    </h1>
                    <div className='max-w-[430px] mx-auto xl:mx-0 mb-6 xl:mb-4 px-2 xl:px-0 text-left'>
                        {renderBlockContent(content.content)}
                    </div>
                    <div className='flex justify-center md:justify-normal relative'>
                        <Link href='/projects'>
                        <ProjectsBtn />
                        </Link>
                    </div>
                </div>
            </div>
            <div className='w-[1200px] hidden md:block md:h-full absolute right-0 bottom-0 -z-10'>
                <div
                    className='bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0 '>
                </div>
            </div>
            <div className='w-full h-full hidden md:block max-w-[737px] max-h-[678px] absolute -bottom32 lg:bottom-0 lg:right-[8%] -z-10'>
                <Avatar avatar={content.image}/>
            </div>
        </div>
    )
}
export default Home
