import {defineConfig} from "sanity";
import {deskTool} from "sanity/desk";
import {schemas} from "@/sanity/schemas";

const config = defineConfig({
    projectId: 'trvef91i',
    dataset: 'production',
    title: 'Portfolio Project',
    apiVersion : '2023-07-24',
    basePath : '/admin',
    useCdn : true ,
    plugins: [deskTool()],
    schema : { types : schemas},
})

export default config