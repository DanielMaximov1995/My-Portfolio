import {BiBold, BiFontColor, BiHighlight} from "react-icons/bi";

const education = {
    name: "education",
    title: "Educations",
    type: "document",
    fields: [
        {
            name: "course",
            title: "Course",
            type: "string",
        },
        {
            name: "college",
            title: "College",
            type: "string",
        },
        {
            name : 'order',
            title : 'Order',
            type : 'number'
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: { source: "course" }
        },
        {
            name: "content",
            title: "Content",
            type: "array",
            of: [{ type: "block" , marks : {
                    decorators: [
                        { title: 'Strong', value: 'font-semibold', blockEditor: { icon : <BiBold/> , render : ({children}) => <span className='font-semibold'>{children}</span> } },
                        { title: 'Emphasis', value: 'italic' , blockEditor: { icon : '' , render : ({children}) => <span className='italic'>{children}</span> } },
                        { title: 'Highlight', value: 'bg-accent bg-opacity-75' , blockEditor: {
                                icon : <BiHighlight/>,
                                render : ({children}) => <span className='bg-accent bg-opacity-75'>{children}</span>
                            } },
                        {
                            title: "Text Theme",
                            value: "text-accent",
                            blockEditor: {
                                icon: <BiFontColor/>,
                                render: ({ children }) => <span className='text-accent'>{children}</span>
                            }
                        },
                    ],
                } } ]
        },
        {
            title: 'Start date',
            name: 'start',
            type: 'date',
            options: {
                dateFormat: 'DD-MM-YYYY',
                calendarTodayLabel: 'Today'
            }
        },
        {
            title: 'End date',
            name: 'end',
            type: 'date',
            options: {
                dateFormat: 'DD-MM-YYYY',
                calendarTodayLabel: 'Today'
            }
        },
        {
            name: "certificate",
            title: "Certificate",
            type: "file",
            options: { hotspot: true },
        },
    ],
}

export default education;