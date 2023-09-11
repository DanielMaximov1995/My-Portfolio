import Home from "@/components/Home Page/Home";
import {getPage} from "@/sanity/sanity-utils";

export const dynamic = 'force-dynamic'

const Page = async () => {
    let page = await getPage('home')
    return <Home content={page}/>
}
export default Page
