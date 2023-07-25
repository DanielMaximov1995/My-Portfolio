'use client'
import {NextStudio} from "next-sanity/studio";
import config from "../../../../sanity.config";

const Page = () => <NextStudio config={config}/>

export default Page