import Projects from "@/components/Projects/Projects";
import {getPage, getProjects, getSkills} from "@/sanity/sanity-utils";

export async function generateMetadata({ params }) {
    return {
        title: 'My Projects',
    }
}

export const revalidate = 60

const Page = async () => {
    const projects = await getProjects()
    const skills = await getSkills()
    let page = await getPage('projects')

    return <Projects content={page} skills={skills} projects={projects}/>
}
export default Page
