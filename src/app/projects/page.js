import Projects from "@/components/Projects/Projects";

export async function generateMetadata({ params }) {
    return {
        title: 'My Projects',
    }
}

const Page = () => <Projects/>
export default Page
