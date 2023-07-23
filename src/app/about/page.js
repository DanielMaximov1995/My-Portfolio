import About from "@/components/About/About";

export async function generateMetadata({ params }) {
    return {
        title: 'About Me',
    }
}

const Page = () => <About/>
export default Page
