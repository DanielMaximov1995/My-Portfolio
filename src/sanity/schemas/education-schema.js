import {techSkills} from "@/components/Technologys";

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
            of: [{ type: "block" }]
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