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
            name: "url",
            title: "Preview url",
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
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'name',
                            title: 'Name',
                            type: 'string',
                        },
                    ],
                },
                {
                    type: 'reference',
                    to: [{ type: 'skills' }],
                },
            ],
        },
        {
            name: "content",
            title: "Content",
            type: "array",
            of: [{ type: "block" }],
            validation: (Rule) =>
                Rule.custom((blocks) => {
                    const totalCharacters = blocks
                        .map((block) => block.children.map((child) => child.text).join(""))
                        .join("").length;

                    if (totalCharacters > 130) {
                        return "Content cannot exceed 100 characters.";
                    }

                    return true;
                }),
        }
    ],
}

export default project;