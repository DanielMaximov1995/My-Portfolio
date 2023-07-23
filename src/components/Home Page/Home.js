'use client'
import ProjectsBtn from "@/components/ProjectsBtn";
import Avatar from "@/components/Avatar";

const Home = () => {
    return (
        <div className='h-full'>
            <div className='w-full h-full'>
                <div className='text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto'>
                    <h1 className='h1'>
                        Transforming Ideas <br/> Into {' '}
                        <span className='text-accent'>Digital Reality</span>
                    </h1>
                    <p className='max-w-sm xl:max-w-xl xl:max-0 mx-auto xl:mx-0 mb-10 xl:mb-16'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                        printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                    <div className='flex justify-center xl:hidden relative'>
                        <ProjectsBtn/>
                    </div>
                    <div className='hidden xl:flex'>
                        <ProjectsBtn/>
                    </div>

                </div>
            </div>
            <div className='w-[1200px] h-full absolute right-0 bottom-0'>
                <div className='bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0 '>
                </div>
                </div>
                <div className='w-full h-full max-w-[737px] max-h-[678px] absolute -bottom32 lg:bottom-0 lg:right-[8%]' >
                    <Avatar/>
            </div>
        </div>
    )
}
export default Home
