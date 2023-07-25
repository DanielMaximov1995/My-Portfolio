import {techSkills} from "@/components/Technologys";
import {BiBold, BiFontColor, BiHighlight, BiItalic} from "react-icons/bi";

const page = {
    name: "page",
    title: "Pages",
    type: "document",
    fields: [
        {
            name: "pageName",
            title: "Page Name",
            type: "string",
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: { source: "pageName" }
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            options: { hotspot: true },
            fields: [
                {
                    name: "alt",
                    title: "Alt",
                    type: "string"
                }
            ]
        },
        {
            name: "file",
            title: "File",
            type: "file",
            options: { hotspot: true },
            fields: [
                {
                    name: "alt",
                    title: "Alt",
                    type: "string"
                }
            ]
        },
        {
            name: "title",
            title: "Title",
            type: "array",
            of: [
                {
                    type: "block",
                    styles: [],
                    marks: {
                        decorators: [
                            {
                                title: 'Strong',
                                value: 'font-semibold',
                                blockEditor: {
                                    icon: <BiBold />,
                                    render: ({ children }) => <span className='font-semibold'>{children}</span>
                                }
                            },
                            {
                                title: 'Emphasis',
                                value: 'italic',
                                blockEditor: {
                                    icon: <BiItalic/>,
                                    render: ({ children }) => <span className='italic'>{children}</span>
                                }
                            },
                            {
                                title: 'Highlight',
                                value: 'bg-accent bg-opacity-75',
                                blockEditor: {
                                    icon: <BiHighlight />,
                                    render: ({ children }) => <span className='bg-accent bg-opacity-75'>{children}</span>
                                }
                            },
                            {
                                title: "Text Theme",
                                value: "text-accent",
                                blockEditor: {
                                    icon: <BiFontColor />,
                                    render: ({ children }) => <span className='text-accent'>{children}</span>
                                }
                            }
                        ],
                        annotations: [
                            // Add a new custom block type for line breaks
                            {
                                title: "Line Break",
                                name: "lineBreak",
                                type: "object",
                                fields: [
                                    {
                                        name: "type",
                                        type: "string",
                                        title: "Type",
                                        options: {
                                            list: [
                                                { title: "Line Break", value: "lineBreak" }
                                            ],
                                        },
                                    },
                                ],
                            },
                        ],
                    },
                },
            ],
        },
        {
            name: "content",
            title: "Content",
            type: "array",
            of: [
                {
                    type: "block",
                    styles: [],
                    marks: {
                        decorators: [
                            {
                                title: 'Strong',
                                value: 'font-semibold',
                                blockEditor: {
                                    icon: <BiBold />,
                                    render: ({ children }) => <span className='font-semibold'>{children}</span>
                                }
                            },
                            {
                                title: 'Emphasis',
                                value: 'italic',
                                blockEditor: {
                                    icon: <BiItalic/>,
                                    render: ({ children }) => <span className='italic'>{children}</span>
                                }
                            },
                            {
                                title: 'Highlight',
                                value: 'bg-accent bg-opacity-75',
                                blockEditor: {
                                    icon: <BiHighlight />,
                                    render: ({ children }) => <span className='bg-accent bg-opacity-75'>{children}</span>
                                }
                            },
                            {
                                title: "Text Theme",
                                value: "text-accent",
                                blockEditor: {
                                    icon: <BiFontColor />,
                                    render: ({ children }) => <span className='text-accent'>{children}</span>
                                }
                            }
                        ],
                        annotations: [
                            {
                                title: "Line Break",
                                name: "lineBreak",
                                type: "object",
                                fields: [
                                    {
                                        name: "type",
                                        type: "string",
                                        title: "Type",
                                        options: {
                                            list: [
                                                { title: "Line Break", value: "lineBreak" }
                                            ],
                                        },
                                    },
                                ],
                            },
                        ],
                    },
                },
            ],
        },
    ],
}

export default page;