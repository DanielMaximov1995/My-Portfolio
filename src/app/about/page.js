import About from "@/components/About/About";
import {getEducation, getSkills} from "@/sanity/sanity-utils";

export async function generateMetadata({ params }) {
    return {
        title: 'About Me',
    }
}

const Page = async () => {
    let skills = await getSkills()
    let education = await getEducation()

    return <About skills={skills} education={education}/>
}
export default Page
