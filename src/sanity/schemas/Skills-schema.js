
const skills = {
    name: "skills",
    title: "Skills",
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
            name: "tech",
            title: "Tech",
            type: "string",
            options: {
                list: [
                    { title: 'Front', value: 'front' },
                    { title: 'Back', value: 'back' },
                    { title: 'Database', value: 'db' },
                ],
            },
        },
        {
          name : 'order',
          title : 'Order',
          type : 'number'
        },
        {
            name: "icon",
            title: "Icon",
            type: "image",
            options: { hotspot: true },
        },
    ]
}

export default skills;