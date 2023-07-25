'use client'

import {renderBlockContent} from "@/sanity/Render Block Content";
import Button from "@/components/Button";
import {TbCertificate2} from "react-icons/tb";
import Link from 'next/link'

const Education = (props) => {
    const {education} = props

    const dateFormat = (date) => {
        const parts = date?.split("-");
        return `${parts[2]}-${parts[1]}-${parts[0]}`;
    }

    return (
        <div className='text-left'>
            {
                education.sort((a,b) => a.order - b.order).map(item => {
                    return  <div key={item._id} className='border-solid rounded border-accent m-1.5 border-2 p-4 px-6 md:px-4 md:w-5/6'>
                        <p className='text-accent font-semibold text-2xl text-center md:text-left'>{item.course}</p>
                        <p className='text-center md:text-left'><span className='text-accent font-medium'>{item.college}</span> {item.start && item.end ? `- ${dateFormat(item.start)} - ${dateFormat(item.end)}` : null}</p>
                        <div className='my-3'>
                            {
                                item.content && renderBlockContent(item.content)
                            }
                        </div>
                        <div className='my-2 text-right z-50'>
                            <Link href={item.file} target='_blank'>
                            <Button classes='bg-accent text-primary w-full md:w-[inherit] text-xl' icon={<TbCertificate2/>}>Certificate</Button>
                            </Link>
                        </div>
                    </div>
                })
            }
        </div>
    )
}
export default Education
