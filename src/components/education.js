'use client'

import {renderBlockContent} from "@/sanity/Render Block Content";

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
                    return  <div key={item._id} className='border-solid rounded border-white m-1.5 border-2 p-2 md:w-5/6'>
                        <p><span className='text-accent font-semibold text-2xl'>{item.course}</span> </p>
                        <span>{item.college} {item.start && item.end ? `, ${dateFormat(item.start)} - ${dateFormat(item.end)}` : null}</span>
                        {
                            item.content && renderBlockContent(item.content)
                        }
                    </div>
                })
            }
        </div>
    )
}
export default Education
