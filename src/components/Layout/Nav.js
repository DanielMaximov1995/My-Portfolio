'use client'
import { HiViewColumns} from "react-icons/hi2";
import {HiHome, HiUser} from "react-icons/hi";
import {usePathname} from "next/navigation";
import Link from "next/link";

const links = [
    {name: 'home', path: '/', icon: <HiHome/>},
    {name: 'about', path: '/about', icon: <HiUser/>},
    {name: 'projects', path: '/projects', icon: <HiViewColumns/>},
];

const Nav = () => {
    const pathname = usePathname()


    return <nav
        className='flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-max top-0 w-full xl:w-16 xl:max-w-md xl:h-screen '>
        <div
            className='flex w-full xl:flex-col items-center justify-between xl:justify-center z-50 gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full'>
            {
                links.map((link, index) => {
                    return <Link
                        className={`${link.path === pathname && 'text-accent'} relative flex z-50 items-center group hover:text-accent transition-all duration-300`}
                        key={index} href={link.path}>
                        <div className='absolute  pr-14 right-0 hidden xl:group-hover:flex z-50'>
                            <div className='bg-white relative flex text-primary items-center p-[6px] z-50 rounded-[3px]'>
                                <div className='capitalize text-[12px] leading-none font-semibold z-50'>
                                    {link.name}
                                </div>
                                <div
                                    className='border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute z-50 -right-2'></div>
                            </div>
                        </div>
                        <div className='z-50'>
                            {link.icon}
                        </div>
                    </Link>
                })
            }
        </div>
    </nav>;
};

export default Nav;
