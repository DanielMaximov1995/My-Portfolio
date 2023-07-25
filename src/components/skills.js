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

const Skills = (props) => {
    const {skills} = props
    const [index, setIndex] = useState(null);

    let front = skills.filter(skill => skill.tech === 'front').sort((a,b) => a.order - b.order)
    let back = skills.filter(skill => skill.tech === 'back').sort((a,b) => a.order - b.order)
    let db = skills.filter(skill => skill.tech === 'db').sort((a,b) => a.order - b.order)

    return (
        <div className='text-left'>
            <SkillContent title='Frontend' data={front} index={index} indexComp={0} setIndex={setIndex}/>
            <SkillContent title='Backend' data={back} index={index} indexComp={1} setIndex={setIndex}/>
            <SkillContent title='Database' data={db} index={index} indexComp={2} setIndex={setIndex}/>
        </div>
    )
}
export default Skills
