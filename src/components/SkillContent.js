'use client'
import TooltipBottom from "@/components/TooltipBottom";
import Icon from "@/components/Icon";
import {techSkills} from "@/components/Technologys";

const SkillContent = (props) => {
    const { setIndex , index , indexComp , title , data } = props

    return (
        <div>
            <div
                className={`${index === indexComp && 'text-accent after:bg-red-600 after:transition-all after:duration-300'} relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
            >
                <p className={`${index === indexComp && 'text-red-600 after:bg-red-600 after:transition-all after:duration-300'} text-white font-medium xl:text-lg`}>{title}</p>
                <div>
                </div>

            </div>
            <div
                className='py-5 flex flex-wrap items-center gap-x-4'
                onMouseEnter={() => setIndex(indexComp)}
                onMouseLeave={() => setIndex(null)}
            >
                {data.map((skill, techIndex) => {
                    let findIcon = techSkills.find(icon => icon.name === skill.name)
                    return (
                        <div key={techIndex}>
                            <TooltipBottom title={findIcon?.name} className='text-accent'>
                            <span className='h-4 w-4'>{findIcon?.icon}</span>
                            </TooltipBottom>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}
export default SkillContent
