import About from "@/components/About/About";
import {getEducation, getPage, getSkills} from "@/sanity/sanity-utils";

export async function generateMetadata({ params }) {
    return {
        title: 'About Me',
    }
}

export const dynamic = 'force-dynamic'

const Page = async () => {
    let skills = await getSkills()
    let education = await getEducation()
    let page = await getPage('about')
    
    return <About content={page} skills={skills} education={education}/>
}
export default Page
