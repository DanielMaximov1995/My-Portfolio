import Projects from "@/components/Projects/Projects";
import {getPage, getProjects} from "@/sanity/sanity-utils";

export async function generateMetadata({ params }) {
    return {
        title: 'My Projects',
    }
}

const Page = async () => {
    const projects = await getProjects()
    let page = await getPage('projects')

    return <Projects content={page} projects={projects}/>
}
export default Page
