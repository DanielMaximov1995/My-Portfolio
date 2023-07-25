import Projects from "@/components/Projects/Projects";
import {getProjects} from "@/sanity/sanity-utils";

export async function generateMetadata({ params }) {
    return {
        title: 'My Projects',
    }
}

const Page = async () => {
    const projects = await getProjects()

    return <Projects projects={projects}/>
}
export default Page
