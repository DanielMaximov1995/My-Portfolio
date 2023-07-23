'use client'
import ProjectsBtn from "@/components/ProjectsBtn";
import Avatar from "@/components/Avatar";
import Link from "next/link";

const Home = () => {
    return (
        <div className='h-full'>
            <div className='w-full h-full'>
                <div
                    className='text-center flex flex-col justify-center xl:pt-10 xl:text-left h-full container mx-auto'>
                    <h1 className='h1'>
                        Hey there 👋 I&apos;m Daniel <br/>{' '}
                        <span className='text-accent'>a Full Stack Developer</span>
                    </h1>
                    <p className='max-w-sm xl:max-w-xl xl:max-0 mx-auto xl:mx-0 mb-10 xl:mb-16'>
                        Highly skilled and talented individual proficient in crafting web magic. Specializes in
                        building seamless applications using React, NodeJS, and Next.Js. Let&apos;s collaborate to bring your
                        ideas to life and create extraordinary online experiences together! Seeking new work
                        opportunities. ✨
                    </p>
                    <div className='flex justify-center md:justify-normal relative'>
                        <Link href='/projects'>
                        <ProjectsBtn />
                        </Link>
                    </div>
                </div>
            </div>
            <div className='w-[1200px] h-full absolute right-0 bottom-0 -z-10'>
                <div
                    className='bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0 '>
                </div>
            </div>
            <div className='w-full h-full max-w-[737px] max-h-[678px] absolute -bottom32 lg:bottom-0 lg:right-[8%] -z-10'>
                <Avatar/>
            </div>
        </div>
    )
}
export default Home
