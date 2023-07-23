'use client'

import {FaNode} from "react-icons/fa";
import {
    SiBootstrap,
    SiCss3,
    SiExpress,
    SiFirebase,
    SiHtml5,
    SiJavascript,
    SiMongodb,
    SiMui,
    SiMysql,
    SiNextdotjs,
    SiReact,
    SiSocketdotio,
    SiTailwindcss
} from "react-icons/si";
import {useState} from "react";
import TooltipBottom from "@/components/TooltipBottom";
import SkillContent from "@/components/SkillContent";

const front = [{name: 'React.Js', icon: <SiReact/>}, {name: 'Next.js', icon: <SiNextdotjs/>}, {
    name: 'JavaScript',
    icon: <SiJavascript/>
}, {name: 'HTML', icon: <SiHtml5/>}, {name: 'CSS', icon: <SiCss3/>}, {
    name: 'Tailwind',
    icon: <SiTailwindcss/>
}, {name: 'Material-UI', icon: <SiMui/>}, {name: 'Bootstrap', icon: <SiBootstrap/>},]
const back = [{name: 'Next.js', icon: <SiNextdotjs/>}, {name: 'Node.Js', icon: <FaNode/>}, {
    name: 'Express.Js',
    icon: <SiExpress/>
}, {name: 'Socket.IO', icon: <SiSocketdotio/>}]
const db = [{name: 'MongoDB', icon: <SiMongodb/>}, {name: 'MySQL', icon: <SiMysql/>}, {
    name: 'Firebase',
    icon: <SiFirebase/>
}]
// const db = []

const Skills = () => {
    const [index, setIndex] = useState(null);


    return (
        <div className='text-left'>
            <SkillContent title='Frontend' data={front} index={index} indexComp={0} setIndex={setIndex} />
            <SkillContent title='Backend' data={back} index={index} indexComp={1} setIndex={setIndex} />
            <SkillContent title='Database' data={db} index={index} indexComp={2} setIndex={setIndex} />
        </div>
    )
}
export default Skills
