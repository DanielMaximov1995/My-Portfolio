import {techSkills} from "@/components/Technologys";

const project = {
    name: "project",
    title: "Projects",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: { source: "name" }
        },
        {
            name : 'order',
            title : 'Order',
            type : 'number'
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
            name: "git",
            title: "Git url",
            type: "url"
        },
        {
            name: "file",
            title: "File",
            type: "file",
            options: { hotspot: true },
        },
        {
            title: 'Technology',
            name: 'technology',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'skills' } }]
        },
        {
            name: "content",
            title: "Content",
            type: "array",
            of: [{ type: "block" }]
        }
    ],
}

export default project;